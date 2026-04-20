const { Sequelize } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const DEBUG = process.env.DEBUG === 'true';

const sequelize = new Sequelize(DATABASE_URL, {
  logging: DEBUG ? console.log : false,
});

function applySQLiteResilience() {
  if (sequelize.dialect.name === 'sqlite') {
    // SQLite-specific resilience logic
  }
}

module.exports = { sequelize, applySQLiteResilience };