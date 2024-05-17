const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/pindie';

async function connect(req, res, next) {
  try {
    await mongoose.connect(DB_URL);
    next();
  }
  catch (err) {
    res.status(500).end('Error connecting to mongodb');
  }
}

module.exports = connect;