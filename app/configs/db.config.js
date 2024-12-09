require('dotenv').config();
import mysql from 'mysql2';

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    dialect: "mysql",
    dialectModule: mysql,
};