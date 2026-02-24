import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, company, email, phone, type, location, message } = data;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Wall Bed King B2B" <${process.env.GMAIL_USER}>`,
            to: 'info@wallbedking.com',
            replyTo: email,
            subject: `New B2B Application - ${company}`,
            html: `
        <h3>New B2B Trade Account Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Location/Country:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
        <hr/>
        <p><small>This email was sent via the B2B contact form.</small></p>
      `,
        });

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error in API route:', error);
        return new Response(JSON.stringify({ error: error.message || 'Internal server error.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
