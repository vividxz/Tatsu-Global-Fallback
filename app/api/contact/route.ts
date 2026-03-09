import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().min(1),
  inquiryType: z.enum(['Solar EPC', 'Telecom Towers', 'Manpower', 'Campus Hiring', 'Renewable Energy', 'General']),
  message: z.string().min(20),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const uuidChunk = crypto.randomUUID().split('-')[0].toUpperCase();
    const referenceId = `TG-${uuidChunk}`;

    // Configure Nodemailer transporter based on SMTP configuration in .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'aditya.singh@tatsuglobal.in',
        pass: process.env.SMTP_PASS || 'YourEmailPassword',
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const adminEmail = process.env.SMTP_USER || 'aditya.singh@tatsuglobal.in';

    // [Email 1] Admin Notification
    const adminMessage = {
      from: `"TATSU Global Website" <${adminEmail}>`,
      to: adminEmail,
      replyTo: validatedData.email,
      subject: `New Contact Form Submission - ${validatedData.inquiryType} [Ref: ${referenceId}]`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Reference ID:</strong> ${referenceId}</p>
        <p><strong>Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Inquiry Type:</strong> ${validatedData.inquiryType}</p>
        <h3>Message:</h3>
        <p>${validatedData.message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // [Email 2] Auto-Reply to User
    const userMessage = {
      from: `"TATSU Global" <${adminEmail}>`,
      to: validatedData.email,
      subject: `Thank you for contacting TATSU Global - Reference ID: ${referenceId}`,
      html: `
        <h2>We have received your message, ${validatedData.fullName}</h2>
        <p>Thank you for reaching out to TATSU Global regarding <strong>${validatedData.inquiryType}</strong>.</p>
        <p>Your inquiry reference number is: <strong>${referenceId}</strong>.</p>
        <p>One of our team members will review your message and get back to you shortly.</p>
        <br>
        <p>Best Regards,</p>
        <p><strong>TATSU Global Team</strong></p>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMessage);
    await transporter.sendMail(userMessage);

    return NextResponse.json({ success: true, referenceId }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.issues }, { status: 400 });
    }
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
