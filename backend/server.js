require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

const corsOption = {
  credentials: true,
  origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 5500;
DbConnect();
app.use(express.json({ limit: '8mb' }));

app.get('/', (req, res) => {
  res.send('hello from express');
});

app.use(router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
