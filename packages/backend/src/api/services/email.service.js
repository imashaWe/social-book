const mailgun = require('mailgun-js');
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

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

module.exports = {sendHTMLEmail}
