const mailgun = require('mailgun-js');
const verifyEmailTemplate = require('../../utils/templates/email-verify');
const ejs = require('ejs');

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

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
        return await mg.messages().send(data);
    } catch (error) {
        console.log(error);
        throw error;
    }

}

module.exports = {sendHTMLEmail, sendVerificationEmail}
