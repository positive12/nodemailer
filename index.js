var nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.dnamicro.net',
    port: 587
});

const message = {
    from: 'Edison@smtp.dnamicro.net', // Sender address
    to: 'edison@dnamicro.com',         // List of recipients
    subject: 'EMAIL Example S | zoom', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
