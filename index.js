const mongoose = require('mongoose');

const app = require('./server');
const config = require('./config/config');

// Connect to db
try {
  mongoose.connect(
    config.mongoSchema,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
    () => {
      console.log('Connected to MongoDB:', config.mongoSchema);
    },
  );
  mongoose.set('useCreateIndex', true);
} catch (err) {
  console.log('Connecting to MongoDB:', err);
}

app.start();