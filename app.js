const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to GOogle API');
});

app.server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on the port: ${port}`);
});

module.exports = app;
