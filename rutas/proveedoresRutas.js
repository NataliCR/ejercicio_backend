const express = require('express')
const router = express.Router()

const proveedoresControler = require('../controles/proveedoresControler')
//Crear proveedores
router.post('/crear', proveedoresControler.crearProveedor)

//Obtener todos
router.get('/todos', proveedoresControler.obtenerProveedores)

//Obtener ID
router.get('/:id', proveedoresControler.obtenerProveedorId)

//Eliminar por ID
router.delete('/:id', proveedoresControler.eliminarProveedor)

module.exports= router