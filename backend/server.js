require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const server = require('http').createServer(app);

app.use(cookieParser());

const corsOption = {
  credentials: true,
  origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use('/storage', express.static('storage'));

const PORT = process.env.PORT || 5500;
DbConnect();
app.use(express.json({ limit: '8mb' }));

app.get('/', (req, res) => {
  res.send('hello from express');
});

app.use(router);

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
