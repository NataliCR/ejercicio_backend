const express = require('express')
const cors = require('cors')
require('dotenv').config()

//Conexion con la base de datos
const db=require('./config/db')

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

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor express corriendo en el puerto ${PORT}`)
})