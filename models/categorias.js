const db = require('../config/db')

//CREAR CATEGORIA
const crearCategoria = async (nombre) => {
    const query = `
        INSERT INTO public."categorias"(nombre)
        VALUES ($1)
        RETURNING *
    `;

    const { rows } = await db.query(query, [nombre])
    return rows[0]
}

//OBTENER CATEGORIAS POR ID
const obtenerID = async (id_categoria) => {
    const query = `
        SELECT * FROM public."categorias" WHERE id_categoria = $1
    `;

    const { rows } = await db.query(query, [id_categoria])
    return rows[0]
}

//OBTENER TODAS LAS CATEGORIAS
const obtenerCategorias = async() => {
    const query = `
        SELECT * FROM public."categorias" ORDER BY id_categoria
    `;

    const { rows } = await db.query(query)
    return rows
}

//ELIMINAR CATEGORIA POR ID
const eliminarID = async(id_categoria) => {
    const query = `
        DELETE FROM public."categorias" WHERE id_categoria = $1
        RETURNING *
    `;

    const {rows} = await db.query(query, [id_categoria])
    return rows[0]
}

//ACTUALIZAR CATEGORIA POR ID
const actualizarIDS = async(id_categoria, nombre) => {
    const query = `
        UPDATE public."categorias" SET nombre= $1 WHERE id_categoria = $2
        RETURNING *
    `;

    const {rows} = await db.query(query, [nombre, id_categoria])
    return rows[0]
}

//Exportar para cualquier parte del proyecto
module.exports = {crearCategoria, obtenerID, obtenerCategorias, eliminarID, actualizarIDS}