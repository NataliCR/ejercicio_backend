const db = require('../config/db')

// CREAR PRODUCTO
const crearProducto = async (nombre, precio, stock, id_categoria, id_proveedor) => {

    const query = `
        INSERT INTO productos (
            nombre,
            precio,
            stock,
            id_categoria,
            id_proveedor
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `;

    const { rows } = await db.query(query, [
        nombre,
        precio,
        stock,
        id_categoria,
        id_proveedor
    ]);

    return rows[0];
}

// OBTENER TODOS
const obtenerProductos = async () => {

    const query = `
        SELECT * FROM productos
        ORDER BY id_producto;
    `;

    const { rows } = await db.query(query);

    return rows;
}

// OBTENER POR ID
const obtenerProductoId = async (id) => {

    const query = `
        SELECT * FROM productos
        WHERE id_producto = $1;
    `;

    const { rows } = await db.query(query, [id]);

    return rows[0];
}

// ELIMINAR POR ID
const eliminarProducto = async (id) => {

    const query = `
        DELETE FROM productos
        WHERE id_producto = $1
        RETURNING *;
    `;

    const { rows } = await db.query(query, [id]);

    return rows[0];
}

// ACTUALIZAR POR ID
const actualizarProducto = async (
    id,
    nombre,
    precio,
    stock,
    id_categoria,
    id_proveedor
) => {

    const query = `
        UPDATE productos
        SET nombre = $1,
            precio = $2,
            stock = $3,
            id_categoria = $4,
            id_proveedor = $5
        WHERE id_producto = $6
        RETURNING *;
    `;

    const { rows } = await db.query(query, [
        nombre,
        precio,
        stock,
        id_categoria,
        id_proveedor,
        id
    ]);

    return rows[0];
}

// EXPORTAR FUNCIONES
module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoId,
    eliminarProducto,
    actualizarProducto
}