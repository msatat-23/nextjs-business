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
    name: 'Business Developer',
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, fullName, email } = body;

        // For testing, send to your email, but in production this would be the client's email
        const recipientEmail = "muhammad23.2026@gmail.com";

        if (type === 'contact') {
            // Send confirmation to client who submitted contact form
            await transport.sendMail({
                from: sender,
                to: [{ address: recipientEmail }],
                subject: 'Thank You for Contacting Us - We Will Reply Soon',
                text: `
Hello ${fullName},

Thank you for reaching out to us! We have successfully received your message.

Our team will review your inquiry carefully and get back to you within 24-48 business hours. We appreciate your patience and look forward to assisting you.

In the meantime, feel free to explore our website to learn more about our services and how we can help transform your business.

Best regards,
The Business Developer Team
                `.trim(),
                html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; }
        .header { background: linear-gradient(135deg, #f43f5e 0%, #9333ea 100%); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
        .content { background: #f9fafb; padding: 30px 20px; border-radius: 0 0 8px 8px; }
        .highlight { color: #f43f5e; font-weight: bold; }
        .icon { font-size: 48px; margin-bottom: 10px; }
        .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="icon">✉️</div>
            <h1>Thank You for Contacting Us!</h1>
        </div>
        <div class="content">
            <p>Hello <strong>${fullName}</strong>,</p>
            <p>Thank you for reaching out to us! We have successfully received your message.</p>
            <p>Our team will review your inquiry carefully and get back to you within <span class="highlight">24-48 business hours</span>. We appreciate your patience and look forward to assisting you.</p>
            <p>In the meantime, feel free to explore our website to learn more about our services and how we can help transform your business.</p>
            <p style="margin-top: 30px;"><strong>Best regards,</strong><br>The Business Developer Team</p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} Business Developer. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
                `.trim(),
                category: 'Contact Confirmation',
            });
        } else if (type === 'subscription') {
            // Send thank you to client who subscribed to newsletter
            await transport.sendMail({
                from: sender,
                to: [{ address: recipientEmail }],
                subject: 'Welcome! Thank You for Subscribing to Our Newsletter 🎉',
                text: `
Hello!

Thank you for subscribing to our newsletter! We're thrilled to have you join our community.

You'll now receive regular updates featuring:
• Industry insights and trends
• Expert tips and strategies
• Exclusive content and resources
• Case studies and success stories

Our newsletter is delivered bi-weekly with valuable content crafted specifically for business leaders like you.

Your first newsletter will arrive soon. We're excited to share our knowledge and help you grow your business!

Welcome aboard!

Best regards,
The Business Developer Team

P.S. You can unsubscribe at any time by clicking the link at the bottom of our emails.
                `.trim(),
                html: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f3f4f6; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #f43f5e 0%, #9333ea 100%); color: white; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 10px 0 0 0; font-size: 28px; font-weight: bold; }
        .emoji { font-size: 48px; }
        .content { padding: 30px 20px; }
        .benefits { background: #fef2f2; border-left: 4px solid #f43f5e; padding: 20px; margin: 20px 0; border-radius: 5px; }
        .benefits ul { margin: 10px 0; padding-left: 20px; list-style: none; }
        .benefits li { margin: 12px 0; padding-left: 25px; position: relative; }
        .benefits li:before { content: "✓"; position: absolute; left: 0; color: #f43f5e; font-weight: bold; font-size: 18px; }
        .footer { background: #111827; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="emoji">🎉</div>
            <h1>Thank You for Subscribing!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Welcome to our community</p>
        </div>
        <div class="content">
            <p><strong>Hello!</strong></p>
            <p>Thank you for subscribing to our newsletter! We're thrilled to have you join our community of forward-thinking business leaders.</p>
            
            <div class="benefits">
                <p style="margin-top: 0; font-weight: bold; color: #f43f5e;">You'll now receive regular updates featuring:</p>
                <ul>
                    <li>Industry insights and the latest trends</li>
                    <li>Expert tips and proven strategies</li>
                    <li>Exclusive content and valuable resources</li>
                    <li>Real case studies and success stories</li>
                </ul>
            </div>

            <p>Our newsletter is delivered <strong>bi-weekly</strong> with valuable content crafted specifically for business leaders like you.</p>

            <p style="margin-top: 25px;">Your first newsletter will arrive soon. We're excited to share our knowledge and help you grow your business!</p>
            
            <p style="margin-top: 30px; font-size: 18px; color: #f43f5e;"><strong>Welcome aboard!</strong></p>

            <p style="margin-top: 30px;">
                <strong>Best regards,</strong><br>
                The Business Developer Team
            </p>
        </div>
        <div class="footer">
            <p><strong>Business Developer</strong></p>
            <p style="margin: 10px 0;">© ${new Date().getFullYear()} Business Developer. All rights reserved.</p>
            <p style="margin-top: 15px; font-size: 11px;">You can unsubscribe at any time by clicking the link in our emails.</p>
        </div>
    </div>
</body>
</html>
                `.trim(),
                category: 'Newsletter Subscription',
            });
        } else {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Invalid email type. Must be "contact" or "subscription".',
                },
                { status: 400 }
            );
        }

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