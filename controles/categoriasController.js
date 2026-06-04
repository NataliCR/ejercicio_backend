const { request } = require('express')
const categoriaModelo = require('../models/categorias')

//Crear controlador
const crearCategoria = async(req, res) => {
    
    const {nombre}= req.body
    try {
        const nuevaCategoria = await categoriaModelo.crearCategoria(nombre)
        res.status(201).json({
            mensaje: "Categoria creada exitosamente",
            categoria: nuevaCategoria
        })
    } catch (error) {
        res.status(500).json({
           mensaje: "Error al crear categoria",
            error: error.message
        })
    }
}
module.exports = {crearCategoria}