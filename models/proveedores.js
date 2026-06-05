
const db = require('../config/db')

//CREAR PROVEEDOR
const crearProveedor = async (nombre, telefono, email) => {
    
    const query = `
        INSERT INTO proveedores (nombre, telefono, email)
        VALUES ($1, $2, $3)
        returning *
    `;
    const { rows } = await db.query(query, [nombre, telefono, email])
    return rows[0]
}


//OBTENER TODOS
const obtenerProveedores = async () => {
    const query = `
        SELECT * FROM proveedores
        ORDER BY id_proveedor;
    `;

    const { rows } = await db.query(query);
    return rows;
}


//Obtener por ID
const obtenerProveedorId = async (id) => {
    const query = `
        SELECT * FROM proveedores
        WHERE id_proveedor = $1;
    `;

    const { rows } = await db.query(query, [id]);
    return rows[0];
}

//Obtener Eliminar por ID
const eliminarProveedor = async (id) => {
    const query = `
        DELETE FROM proveedores
        WHERE id_proveedor = $1
        RETURNING *
    `;

    const { rows } = await db.query(query, [id]);
    return rows[0];
}



//Exportar funciónes
module.exports = {
    crearProveedor,
    obtenerProveedores,
    obtenerProveedorId,
    eliminarProveedor
}