const express = require('express');
const app = express();
const winnerRouter = require('./routes/winner');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/winner', winnerRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
