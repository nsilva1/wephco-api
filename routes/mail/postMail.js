const express = require('express');
const mailer = require('nodemailer');

var transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ukpongneto@gmail.com',
    pass: '1netogoogle#',
  },
});

const router = express.Router();

router.post('/send-mail', async (req, res) => {
  const params = req.body;

  var mailOptions = {
    from: 'ukpongneto@gmail.com',
    to: 'neto@tomanetech.com.ng',
    subject: 'Test Email',
    text: `${params}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.status(500).send('Error sending mail');
    } else {
      res.status(200).send('Mail Sent Successfully');
    }
  });
});

module.exports = router;
