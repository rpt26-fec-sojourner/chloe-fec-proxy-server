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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});