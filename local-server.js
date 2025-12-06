import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    console.log('Local API: POST /api/contact');
    const { name, email, message } = req.body;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error('Local API Error: Missing RESEND_API_KEY');
        return res.status(500).json({ message: 'Missing RESEND_API_KEY in .env file' });
    }

    const resend = new Resend(apiKey);

    try {
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'maildswadeep@gmail.com',
            replyTo: email,
            subject: `New Message from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">${message}</blockquote>
      `,
        });

        if (error) {
            console.error('Resend API returned error:', error);
            return res.status(500).json({ message: 'Failed to send email via Resend', error });
        }

        console.log('Email sent successfully:', data);
        res.status(200).json(data);
    } catch (error) {
        console.error('Unexpected Local API Error:', error);
        res.status(500).json({ message: 'Unexpected error sending email', error: error.message });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Local API server running at http://localhost:${PORT}`);
});
