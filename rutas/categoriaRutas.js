const express = require('express')
const router = express.Router()

const categoriasController = require('../controles/categoriasController')
router.post('/crear', categoriasController.crearCategoria)

module.exports = router