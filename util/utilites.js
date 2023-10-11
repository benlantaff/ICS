const nodemailer = require('nodemailer');
const AppError = require('./appError');

// Create transporter
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: 'SSLv3',
  },
  auth: {
    user: 'Ben_ICS@outlook.com',// Change this value
    pass: 'password',// Change this value
  },
});

function generateVerificationCode(length) {
  var result = '';
  var characters = '0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function sendEmail(options, next) {
  const mailOptions = {
    from: 'Ben_ICS <Ben_ICS@outlook.com>', // Change this value
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err)
new AppError('Error sending email', 500);
  }
}

const dbConnectionString =
  'mongodb+srv://user:password@cluster.lq4ximj.mongodb.net/ICSDB'; // Change this to your own mongodb connection string.

const host = 'http://localhost:9001';

module.exports = {
  generateVerificationCode,
  sendEmail,
  dbConnectionString,
  host,
};
