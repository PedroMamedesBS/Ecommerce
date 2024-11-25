const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const controllerCliente = require('./controller/controllerCliente')
const controllerFabricante = require('./controller/controllerFabricante')

const PORT = 3000
const hostname = 'localhost'
/* -------- config -------------- */
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
/* ------------------------------- */

//Cliente
app.post('/cliente', controllerCliente.cadastrarCliente)
app.post('/login', controllerCliente.loginCliente)
/* ------------------------------- */

//Fabricante
app.post('/fabricante', controllerFabricante.cadastrarFabricante )
app.post('/loginfab', controllerFabricante.loginFabricante )
/* ------------------------------- */

app.get('/', (req,res)=>{
    res.status(200).json({message: "Servidor rodando!"})
})

/* ------------------------------- */
conn.sync().then(()=>{
app.listen(PORT, hostname, ()=>{
    console.log(`Servidor rodando em ${hostname}:${PORT}`)
})
}).catch((err)=>{
console.error('Erro de conexão!',err)
})