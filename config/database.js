const { Sequelize } = require('sequelize');
const config = require('./config')
const { Pool } = require('pg');

// const sequelize = new Sequelize(config.DATABASE_URL) // Example for postgres
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    dialect: 'postgres', // or 'mysql', 'sqlite', etc.
});

const pool = new Pool({
    user: config.username,
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    database: config.database,
    password: config.password,
    port: 6543,
});
  

module.exports = {sequelize, pool}