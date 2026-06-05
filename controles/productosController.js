const productoModelo = require('../models/productos')

// CREAR PRODUCTO
const crearProducto = async (req, res) => {

    try {

        const {
            nombre,
            precio,
            stock,
            id_categoria,
            id_proveedor
        } = req.body;

        const nuevoProducto =
            await productoModelo.crearProducto(
                nombre,
                precio,
                stock,
                id_categoria,
                id_proveedor
            );

        res.status(201).json({
            mensaje: "Producto creado exitosamente",
            producto: nuevoProducto
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al crear producto",
            error: error.message
        });
    }
}

// OBTENER TODOS
const obtenerProductos = async (req, res) => {

    try {

        const productos =
            await productoModelo.obtenerProductos();

        res.status(200).json({
            total: productos.length,
            productos
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener productos",
            error: error.message
        });
    }
}

// OBTENER POR ID
const obtenerProductoId = async (req, res) => {

    try {

        const { id } = req.params;

        const producto =
            await productoModelo.obtenerProductoId(id);

        res.status(200).json(producto);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener producto",
            error: error.message
        });
    }
}

// ELIMINAR
const eliminarProducto = async (req, res) => {

    try {

        const { id } = req.params;

        const productoEliminado =
            await productoModelo.eliminarProducto(id);

        res.status(200).json({
            mensaje: "Producto eliminado exitosamente",
            producto: productoEliminado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar producto",
            error: error.message
        });
    }
}

// ACTUALIZAR
const actualizarProducto = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nombre,
            precio,
            stock,
            id_categoria,
            id_proveedor
        } = req.body;

        const productoActualizado =
            await productoModelo.actualizarProducto(
                id,
                nombre,
                precio,
                stock,
                id_categoria,
                id_proveedor
            );

        res.status(200).json({
            mensaje: "Producto actualizado exitosamente",
            producto: productoActualizado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar producto",
            error: error.message
        });
    }
}

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProductoId,
    eliminarProducto,
    actualizarProducto
}