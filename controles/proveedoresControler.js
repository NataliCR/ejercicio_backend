const {request} = require('express')
const proveedorModelo = require('../models/proveedores')

//Crear controlador
const crearProveedor = async (req, res) => {

    const { nombre, telefono, email } = req.body
    try {
        const nuevoProveedor = await proveedorModelo.crearProveedor(nombre, telefono, email)
        res.status(201).json({
            mensaje: "Proveedor creado exitosamente",
            proveedor: nuevoProveedor
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error al crear el proveedor",
            error: error.mensaje
        })
    }
}
module.exports = {crearProveedor}

