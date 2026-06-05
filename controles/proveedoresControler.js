const proveedorModelo = require('../models/proveedores')

//Crear controlador
const crearProveedor = async (req, res) => {
    const { nombre, telefono, email } = req.body
    try {
        const nuevoProveedor = await proveedorModelo.crearProveedor(nombre, telefono, email)
        res.status(201).json({
            mensaje: "Proveedor creado exitosamente"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al crear el proveedor",
            error: error.message

        })
    }
}


// Controlador para obtener todos 
const obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await proveedorModelo.obtenerProveedores();
        res.status(200).json({
            total:proveedores.length,
            proveedores
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener proveedores",
            error: error.message
        });
    }
}

// Controlador para obtener por ID
const obtenerProveedorId = async (req, res) => {
    try {
        const { id } = req.params;
        const proveedor = await proveedorModelo.obtenerProveedorId(id);
        res.status(200).json(proveedor);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener proveedor",
            error: error.message
        });
    }
}

//Controlador para elominar por ID
const eliminarProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const proveedorEliminado = await proveedorModelo.eliminarProveedor(id);
        res.status(200).json({
            mensaje: "Proveedor elimnado exitosamente",
            proveedor: proveedorEliminado
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar proveedor",
            error: error.message
        });
    }
}

//Controlador actualizar proveedor por ID
const actualizarProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, telefono, email } = req.body;
        const proveedorActualizado =
            await proveedorModelo.actualizarProveedor(
                id,
                nombre,
                telefono,
                email
            );
        res.status(200).json({
            mensaje: "Proveedor actualizado exitosamente",
            proveedor: proveedorActualizado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar proveedor",
            error: error.message
        });
    }
}


//Exportar funciónes
module.exports = {
    crearProveedor,
    obtenerProveedores,
    obtenerProveedorId,
    eliminarProveedor,
    actualizarProveedor
}