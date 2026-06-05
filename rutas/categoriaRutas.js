const express = require('express')
const router = express.Router()

const categoriasController = require('../controles/categoriasController')

//Ruta para CREAR CATEGORIA
router.post('/crear', categoriasController.crearCategoria)

//Ruta para OBTENER CATEGORIA POR ID
router.get('/:id_categoria', categoriasController.obtenerID)

//Ruta para OBTENER TODAS LAS CATEGORIAS
router.get('/', categoriasController.obtenerCategorias)

//Ruta para ELIMINAR CATEGORIA POR ID
router.delete('/:id_categoria', categoriasController.eliminarID)

//Ruta para ACTUALIZAR CATEGORIA POR ID
router.put('/:id_categoria', categoriasController.actualizarID)

module.exports = router