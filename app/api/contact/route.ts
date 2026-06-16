import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const schema = z.object({
  fullName:    z.string().min(2),
  email:       z.string().email(),
  phone:       z.string().optional(),
  company:     z.string().min(1),
  inquiryType: z.enum(['Solar EPC', 'Telecom Towers', 'Manpower', 'Campus Hiring', 'Renewable Energy', 'General']),
  message:     z.string().min(20),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Please fill all required fields correctly.' }, { status: 400 });
    }

    const data = parsed.data;
    const uuidChunk = crypto.randomUUID().split('-')[0].toUpperCase();
    const referenceId = 'TG-' + uuidChunk;

    // Configure Transporter with extra stability settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // This helps if there are issues with local certificate validation
        rejectUnauthorized: false 
      }
    });

    // 1. Send Admin Notification
    await transporter.sendMail({
      from: `"Tatsu Global Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: data.email,
      subject: `New Contact Form Submission - Tatsu Global [${referenceId}]`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #1e3055; padding: 20px; color: white; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Enquiry</h2>
            <p style="margin: 5px 0 0; opacity: 0.8;">Ref: ${referenceId}</p>
          </div>
          <div style="padding: 24px; border: 1px solid #e1e1e1; border-top: none; border-radius: 0 0 8px 8px;">
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">${data.message}</p>
          </div>
        </div>
      `,
    });

    // 2. Send Auto-Reply to User
    await transporter.sendMail({
      from: `"Tatsu Global" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "We received your message - Tatsu Global",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="padding: 24px; border: 1px solid #e1e1e1; border-radius: 8px;">
            <h2 style="color: #1e3055;">Hi ${data.fullName},</h2>
            <p>Thank you for contacting Tatsu Global. Our team has received your message and will reach out to you shortly.</p>
            <p>Your reference number for this enquiry is: <strong>${referenceId}</strong></p>
            <br>
            <p>Best Regards,<br>Tatsu Global Team</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, referenceId });

  } catch (error: unknown) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: "Could not send email. Please verify credentials." 
    }, { status: 500 });
  }
}
