const databases = require('./database')
const express = require('express')
const cors = require('cors')
const port = 8081

const app = express()

app.use(cors())

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.get('/authentication', (req, res)=>{
    databases.authenticateUsuarios()
})

app.listen(port, ()=>{
    console.log("Servidor iniciado com sucesso!")
    console.log("host: http://localhost:8081")
})

