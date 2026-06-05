const { request } = require('express')
const categoriaModelo = require('../models/categorias')

//Crear controlador para CREAR UNA CATEGORIA
const crearCategoria = async (req, res) => {

    const { nombre } = req.body
    try {
        const nuevaCategoria = await categoriaModelo.crearCategoria(nombre)
        res.status(201).json({
            mensaje: "Categoria creada exitosamente",
            categoria: nuevaCategoria
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear categorias",
            error: error.message
        })
    }
}

//Crear controlador para OBTENER UNA CATEGORIA POR ID
const obtenerID = async (req, res) => {

    const { id_categoria } = req.params
    try {
        const categoria = await categoriaModelo.obtenerID(id_categoria)

        if (!categoria) {
            return res.status(404).json({
                mensaje: "Categoria encontrada"
            })
        }
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener categoria",
            error: error.mensaje
        })
    }
}

//Crear controlador para OBTENER TODAS LAS CATEGORIAS
const obtenerCategorias = async (req, res) => {

    try {
        const categorias = await categoriaModelo.obtenerCategorias()

        res.status(200).json({
            total: categorias.length,
            categorias
        })
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener categorias",
            error: error.mensaje
        })
    }
}

//Crear controlador para ELIMINAR CATEGORIA POR ID
const eliminarID = async (req, res) => {

    const { id_categoria } = req.params
    try {
        const categoriaEliminada = await categoriaModelo.eliminarID(id_categoria)
        if (!categoriaEliminada) {
            return res.status(404).json({
                mensaje: "Categoria no encontrada"
            })
        }

        res.status(200).json({
            mensaje: "Categoria eliminada exitosamente",
            categoria: categoriaEliminada
        })
    } catch (error) {
        console.error(error)

        res.status(500).json({
            mensaje: "Error al eliminar categoria",
            error: error.message
        })
    }
}

module.exports = { crearCategoria, obtenerID, obtenerCategorias, eliminarID }