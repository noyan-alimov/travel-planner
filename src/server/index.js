const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

const apiAttractions = process.env.API_GOOGLE;

app.post('/touristAttractions', async (req, res) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=attraction+in+${req.body.city}&key=${apiAttractions}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(8080, () => {
  console.log('App listening on port 8080!');
});
