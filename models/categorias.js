const db = require('../config/db')


const crearCategoria = async (nombre) => {
    const query = `
        INSERT INTO public."categorias"(nombre)
        VALUES ($1)
        RETURNING *
    `;

    const { rows } = await db.query(query, [nombre])
    return rows[0]
}
//Exportar para cualquier parte del proyecto
module.exports = {crearCategoria}