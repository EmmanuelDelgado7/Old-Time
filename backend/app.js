// importar las dependencias necesarias //

import express from 'express'
import dotenv from "dotenv"
import { connectionMongo } from './src/config/dataBase.js'
import { usersRouter } from './src/routes/users.routes.js'
import { productsRouter } from './src/routes/products.routes.js'

// crear las configuraciones necesarias //

const app = express() // Llamar a express para crear la app
dotenv.config() // Llama las variables de entorno .env
const port = process.env.PORT // puerto de escucha del servidor
connectionMongo() // Llamar a la función de conexión a la base de datos
app.use(express.json()) // permite recibir datos en formato json

app.get('/', (req, res) => {
    res.send('Hola desde mi')
})

app.use('/usuarios', usersRouter) // ruta para usuarios
app.use('/productos', productsRouter) // ruta para productos

// iniciar el servidor //
// alt gr + } comillas invertidas //
app.listen(port, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${port}`)
})