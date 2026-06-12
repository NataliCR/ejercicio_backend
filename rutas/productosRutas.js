const express = require('express')
const router = express.Router()

const productosController = require('../controles/productosController')

// CREAR PRODUCTO
router.post('/crear', productosController.crearProducto)

// OBTENER TODOS LOS PRODUCTOS 
router.get('/todos', productosController.obtenerProductos)

// OBTENER PRODUCTO POR ID
router.get('/:id', productosController.obtenerProductoId)

// ELIMINAR PRODUCTO POR ID
router.delete('/:id', productosController.eliminarProducto)

// ACTUALIZAR PRODUCTO POR ID
router.put('/:id', productosController.actualizarProducto)

module.exports = router
