const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = "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"
sgMail.setApiKey(SENDGRID_API_KEY)

const msg = {
  to: 'hanna@dnamicro.com',
  from: 'help@corporatetech.com',
  subject: 'Edison Test Email',
  text: 'Hi Edison Please check the pbx network',
  html: '<strong>This is an email is a Email that compose Email </strong>',
}
console.log(msg)

sgMail.send(msg)