'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {OAuth2Client} = require('google-auth-library');
const app = express();
// const CLIENT_ID = '867685073133-cc7g3jp9762653scgf951s3qcnai64ac.apps.googleusercontent.com'
const CLIENT_ID = "CLIENT_ID";
const port = process.env.PORT || 8000;

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true}),
  bodyParser.json()
)

app.post('/', (req, res) => {
  console.log(req.body.id_token);
  const token = req.body.id_token
  const client = new OAuth2Client(CLIENT_ID);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log(payload)
  }
  // Error: Invalid token signature
  // Error: Wrong recipient, payload audience != requiredAudience
  verify().catch(console.error);

  res.status(200).send('Welcome to GOogle API');
});

app.get('/google', (req, res) => {
  res.send('Welcome to GOogle API');
});

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on the port: ${port}`);
});

module.exports = app;
