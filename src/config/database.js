const { Sequelize } = require('sequelize');
const config = require('./sequelize-config');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize( 
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: false,
    dialectOptions: dbConfig.dialectOptions,
  }
);

module.exports = sequelize;