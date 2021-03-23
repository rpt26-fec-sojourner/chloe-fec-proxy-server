const path = require('path');
const express = require('express');
const cors = require('cors');

const port = 2021;
const publicPath = path.join(__dirname, 'client');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/:listing_id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});