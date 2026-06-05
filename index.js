const express = require('express')
const cors = require('cors')
require('dotenv').config()

//Conexion con la base de datos
const db = require('./config/db')
const categoriaRutas = require('./rutas/categoriaRutas')

const proveedoresRutas = require('./rutas/proveedoresRutas')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by')

//Rutas
app.get('/api/prueba', (req, res) => {
    res.status(200).json({
        estado: 'ok',
        mensaje: 'El servidor esta en funcionamiento'
    })
})

app.use('/api/proveedores', proveedoresRutas)

app.use('/api/categorias', categoriaRutas)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor express corriendo en el puerto ${PORT}`)
})
