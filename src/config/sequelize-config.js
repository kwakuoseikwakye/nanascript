const config = require('./app');

module.exports = {
      development: {
            username: config.DB_USERNAME || 'root',
            password: config.DB_PASSWORD || '',
            database: config.DB_NAME || 'nanascript',
            host: config.DB_HOST || 'localhost',
            port: config.DB_PORT,
            dialect: 'postgresql', // 'mysql' | 'sqlite' | 'postgres' | 'mssql'
      },
      // Add production and test configurations
};
