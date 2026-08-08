import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';

const token = process.env.MAILTRAP_TOKEN;

if (!token) {
    throw new Error('MAILTRAP_TOKEN is not configured');
}

const transport = nodemailer.createTransport(
    MailtrapTransport({
        token,
    })
);

const sender = {
    address: 'hello@demomailtrap.co',
    name: 'Mailtrap Test',
};

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { fullName } = body;

        await transport.sendMail({
            from: sender,
            to: [
                {
                    address: 'muhammad23.2026@gmail.com',
                },
            ],
            subject: 'We received your contact request',
            text: `
Hello ${fullName},

Thank you for contacting us.

We have successfully received your contact request and our team will review your message and get back to you as soon as possible.

We appreciate your interest and look forward to speaking with you.

Best regards,
The Team
            `.trim(),
            category: 'Contact Form Confirmation',
        });

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully.',
        });
    } catch (error) {
        console.error('EMAIL ERROR:', error);

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : String(error),
            },
            {
                status: 500,
            }
        );
    }
}