const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, '../../dist')));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
// });

const apiKey = process.env.API_WEATHERBIT;

app.get('/getApiKey', (req, res) => {
  res.json(apiKey);
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});
