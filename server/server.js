const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api', router);

// custom error handling middleware
app.use(function errorHandler(err, req, res, next) {
  // delegate to the default Express error handler if headers have already
  // been sent to client
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    serverError: 'Something went wrong - please try again later!',
  });
});

// Select the port in the env you are deploying from (e.g. Heroku) or 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port} !`));
