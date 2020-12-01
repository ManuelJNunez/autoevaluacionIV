const express = require('express')
const app = express()
const port = process.env.port || 8080

app.get('/', (req, res) => {
    res.send({ message: 'Funciona :D' })
})

app.get('/status', (req, res) => {
    res.send({ status: 'Healthy' })
})

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto', 3000)
})
