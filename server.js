import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { z } from 'zod';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files from Vite build
app.use(express.static(path.join(__dirname, 'dist')));

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().min(1),
  inquiryType: z.enum(['Solar EPC', 'Telecom Towers', 'Manpower', 'Campus Hiring', 'Renewable Energy', 'General']),
  message: z.string().min(20),
});

app.post('/api/contact', async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    const uuidChunk = crypto.randomUUID().split('-')[0].toUpperCase();
    const referenceId = `TG-${uuidChunk}`;

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

    await transporter.sendMail(adminMessage);
    await transporter.sendMail(userMessage);

    res.status(200).json({ success: true, referenceId });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: error.issues });
    } else {
      console.error('Email sending error:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  }
});

// For any other route, send back the index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
