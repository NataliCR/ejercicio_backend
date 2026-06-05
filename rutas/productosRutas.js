const express = require('express')
const router = express.Router()

const productosController =
    require('../controles/productosController')

// CREAR
router.post('/crear',
    productosController.crearProducto)

// OBTENER TODOS
router.get('/todos',
    productosController.obtenerProductos)

// OBTENER POR ID
router.get('/:id',
    productosController.obtenerProductoId)

// ELIMINAR
router.delete('/:id',
    productosController.eliminarProducto)

// ACTUALIZAR
router.put('/:id',
    productosController.actualizarProducto)

module.exports = router
