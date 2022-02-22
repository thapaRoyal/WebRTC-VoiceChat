const mongoose = require('mongoose');

function DbConnect() {
  const DB_URL = process.env.DB_URL;
  //   Database connection
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', () => {
    console.log('DB Connected...');
  });
}

module.exports = DbConnect;
