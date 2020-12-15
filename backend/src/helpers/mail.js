require('dotenv').config({ path: "./config.env" });
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (options) => {
    try {
        // createTransport
        const transporter = nodemailer.createTransport({
            host: process.env.host,
            port: process.env.port,
            auth: {
                user: process.env.email,
                pass: process.env.password
            },
            connectionTimeout: 10 * 60 * 1000, // 5 min
        });
        // send mail with defined transport object
        let mailOptions = await transporter.sendMail({
            from: '"MhmdAzab 👻" <mhmdazab4@gmail.com>',
            to: options.email,
            subject: options.subject,
            text: options.message
        });
        console.log("From Options Mail", options.mail)
        //- acually send the mail
        await transporter.sendMail(mailOptions) // 
    } catch (ex) {
        console.log(ex)
    }
}

module.exports = {
    sendEmail
}