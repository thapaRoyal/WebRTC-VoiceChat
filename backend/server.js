require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const server = require('http').createServer(app);
const ACTIONS = require('./actions');
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

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
app.use(router);

app.get('/', (req, res) => {
  res.send('hello from express');
});

// Sockets

const socketUserMapping = {};
io.on('connection', (socket) => {
  console.log('new connection', socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, user }) => {
    socketUserMapping[socket.id] = user;
    //new map
    const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
    clients.forEach((clientId) => {
      io.to(clientId).emit(ACTIONS.ADD_PEER, {
        peerId: socket.id,
        createOffer: false,
        user,
      });
    });
    socket.emit(ACTIONS.ADD_PEER, {
      peerId: clientId,
      createOffer: true,
      user: socketUserMapping[clientId],
    });
    socket.join(roomId);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
