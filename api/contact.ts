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

        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' });
        }

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Using raw fetch as requested, replacing Resend SDK
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                from: 'Contact Form <onboarding@resend.dev>',
                to: ['maildswadeep@gmail.com'],
                reply_to: email,
                subject: `New Message from ${name}`,
                html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">${message}</blockquote>
          `,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return res.status(200).json(data);
        } else {
            const errorText = await response.text();
            console.error('Resend API Error (Fetch):', errorText);

            // Try to parse json error if possible for cleaner response
            let errorJson;
            try { errorJson = JSON.parse(errorText); } catch (e) { }

            return res.status(500).json({
                message: 'Failed to send email via Resend API',
                error: errorJson || errorText
            });
        }

    } catch (globalError: any) {
        console.error('CRITICAL HANDLER ERROR:', globalError);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end(`Critical Server Error: ${globalError.message}`);
    }
}
