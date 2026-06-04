//Configuración de la base de datos: Crear y exportar
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

pool.connect()
    .then(() => {
        console.log('Conectado a PostgreSQL');

})
    .catch((err) => {
        console.error('Error de conexion', err)
    });
module.exports = pool;