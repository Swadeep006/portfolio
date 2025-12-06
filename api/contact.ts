import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ message: 'Missing RESEND_API_KEY environment variable' });
    }

    // Check if resend is initialized correctly with the key, 
    // though the top-level init might have run with undefined. 
    // It's safer to re-init or just rely on the check above.
    // Let's just trust top-level if we want, or better: 
    // move init inside as planned.

    const resend = new Resend(apiKey);

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'maildswadeep@gmail.com',
            replyTo: email as string,
            subject: `New Message from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">${message}</blockquote>
      `,
        });

        return res.status(200).json(data);
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ message: 'Failed to send email', error });
    }
}
