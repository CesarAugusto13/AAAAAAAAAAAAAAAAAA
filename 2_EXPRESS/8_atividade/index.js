const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

// acessar as informações do corpo da requisição
app.use(express.urlencoded({
    extended: true
}))
// transforma as informações em objetos do JS 
app.use(express.json())

// Requisita do body
app.post('/users/save', (req,res) => {
    const nome = req.body.nome
    const email = req.body.email
    const mensagem = req.body.mensagem

console.log(`
    Usuário: ${nome}
    Email: ${email}
    mensagem: ${mensagem}
 `)

    res.redirect(`/`)
})

app.use(express.static(`public`))

app.get('/users/formulario', (req, res) => {
    res.sendFile(`${caminho}/usuariosform.html`)
})


app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)

})


app.listen(5000)