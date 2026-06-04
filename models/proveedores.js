const db = require('../config/db')


const crearProveedor = async (nombre, telefono, email) => {
    const query = `
        INSERT INTO public."proveedores" (nombre, telefono, email)
        VALUES ($1, $2, $3)
        returning *
    `;
    const { rows } = await db.query(query, [nombre, telefono, email])
    return rows[0]
}
//Exportar función
module.exports = { crearProveedor }