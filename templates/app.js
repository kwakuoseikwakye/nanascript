const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');
const config = require('./config/app');

const app = express();
const PORT = config.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes); // Use user routes

// Error handling middleware
app.use(errorHandler);

sequelize.sync()
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => console.error('Error: ' + err));

module.exports = app;