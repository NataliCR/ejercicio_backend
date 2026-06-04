const express = require('express')
const router = express.Router()

const proveedoresControler = require('../controles/proveedoresControler')
router.post('/crear', proveedoresControler.crearProveedor)

module.exports= router