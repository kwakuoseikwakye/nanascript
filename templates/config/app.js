require('dotenv').config();

const config = {
      NODE_ENV: process.env.NODE_ENV || 'development',
      APP_URL: process.env.APP_URL,
      PORT: process.env.PORT || 3000,

      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,

      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
      AWS_REGION: process.env.AWS_REGION,

      JWT_SECRET: process.env.JWT_SECRET,

};

module.exports = config;
