const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maalsubi_bai25@mepcoeng.ac.in', // Your email address
        pass: '**********' // Your password
    }
});

const mailOptions = {
    from: 'maalsubi_bai25@mepcoeng.ac.in', 
    to: 'maalsubi@gmail.com', 
    subject: 'Hello from Node.js', 
    text: 'Hello, this is a test email sent from Node.js using nodemailer!', 
    html: '<h1>Welcome All </h1><p>That was easy!</p>'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
