const nodemailer = require("nodemailer");
const verifyEmailTemplate = require('../../utils/templates/email-verify');

const ejs = require('ejs');

const transporter = nodemailer.createTransport({
    host: process.env.GOOGLE_SMTP_HOST,
    port: process.env.GOOGLE_SMTP_PORT,
    auth: {
        user: process.env.GOOGLE_SMTP_USER,
        pass: process.env.GOOGLE_SMTP_PASSWORD
    }
});

const sendVerificationEmail = async (email, verifyLink) => {
    const html = ejs.render(verifyEmailTemplate, {verifyLink: verifyLink});
    try {
        return await sendHTMLEmail(process.env.MAILGUN_FROM_EMAIL, email, 'Verify Your Email', html);
    } catch (err) {
        throw err;
    }
}
const sendHTMLEmail = async (from, to, subject, html) => {
    const data = {
        to: to,
        from: from,
        subject: subject,
        html: html
    };
    try {
        return await transporter.sendMail(data);
    } catch (error) {
        console.log(error);
        throw error;
    }

}

module.exports = {sendHTMLEmail, sendVerificationEmail}
