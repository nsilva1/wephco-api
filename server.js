var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var port = process.env.PORT || 3434;

// routes
const postMail = require('./routes/mail/postMail');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/mail', postMail);

// listen on port
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
