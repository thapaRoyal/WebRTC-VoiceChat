require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('hello from express');
});

app.listen(PORT, () => `Listening on port ${PORT}`);
