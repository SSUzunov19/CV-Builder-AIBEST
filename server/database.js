const { Sequelize } = require('sequelize');
const pg = require('pg');
const config = require('./config');

pg.defaults.poolSize = 10;

const sequelize = new Sequelize({
  database: config.db.database,
  username: config.db.user,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  dialect: 'postgres',
  dialectModule: pg,
});

module.exports = sequelize;