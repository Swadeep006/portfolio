import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log('API Handler triggered: ', req.method);

    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('Missing RESEND_API_KEY');
            return res.status(500).json({ message: 'Missing RESEND_API_KEY environment variable' });
        }

        console.log('API Key present, starting with:', apiKey.substring(0, 5) + '...');

        const resend = new Resend(apiKey);

        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' });
        }

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        try {
            const { data, error } = await resend.emails.send({
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

            if (error) {
                console.error('Resend API returned error:', error);
                return res.status(500).json({ message: 'Failed to send email via Resend', error });
            }

            return res.status(200).json(data);
        } catch (error: any) {
            console.error('Unexpected Resend Error:', error);
            return res.status(500).json({ message: 'Unexpected error sending email', error: error.message || error });
        }
    } catch (globalError: any) {
        console.error('CRITICAL HANDLER ERROR:', globalError);
        // Fallback to basic send in case json serialization fails or other weirdness
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end(`Critical Server Error: ${globalError.message}`);
    }
}
