const express = require('express')
const app = express()
const port = process.env.port || 8080

let nombre = 'anónimo'

app.get('/', (req, res) => {
    res.send({ message: 'Funciona :D' })
})

app.get('/status', (req, res) => {
    res.send({ status: 'Healthy' })
})

app.put('/saluda/:nombre', (req, res) => {
    nombre = req.params.nombre

    res.send(`Te llamas ${nombre}`)
})

app.get('/saluda', (req, res) => {
    res.send(`Hola, ${nombre}`)
})

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto', 3000)
})

module.exports = app
