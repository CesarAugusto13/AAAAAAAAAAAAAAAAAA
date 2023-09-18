const express = require('express')
const exphbs = require('express-handlebars')
const products = require('./products')

const app = express()

// configurar posta public para arquivos estáticos
app.use(express.static('public'))

// configurar o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const itens = [{
        
        nome:"Geladeira",
        preco: 10,
        pagina: "/geladeira"
        
    },
    { nome: "Microfone",
      preco: 20,
      pagina: "/microfone"
    },
    {
        nome: "Computador",
        preco: 30,
        pagina: "/computador"
    }
    ]

    res.render('home', { itens })
})

app.get('/computador', (req,res) =>{
    res.render('computador')
}) 


app.get('/post', (req,res) => {
    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 4
    }

    res.render('blogpost', { post })
})



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})