const Nodemailer = require("nodemailer");
const { MailtrapTransport } = require("mailtrap");

const TOKEN = process.env.MAILTRIPTOKEN;

const transport = Nodemailer.createTransport(
    MailtrapTransport({
        token: TOKEN,
    })
);

const sender = {
    address: "hello@demomailtrap.co",
    name: "Mailtrap Test",
};
const recipients = [
    "muhammad23.2026@gmail.com",
];

transport
    .sendMail({
        from: sender,
        to: recipients,
        subject: "You are awesome!",
        text: "Congrats for sending test email with Mailtrap!",
        category: "Integration Test",
    })
    .then(console.log, console.error);