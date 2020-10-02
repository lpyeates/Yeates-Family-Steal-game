const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

// Routes go here

// Set up middleware
const app = express();
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

function start() {
    // declare port amnd start app
    const PORT = config.apiPort || 3000;
    app.listen(PORT, () => {
      console.log(`app is running on Port ${PORT}`);
    });
    // Health check in AWS
    app.get('/', (_, res) => {
      res.send('Up and running');
    });
  }
  
  module.exports = { app, start };