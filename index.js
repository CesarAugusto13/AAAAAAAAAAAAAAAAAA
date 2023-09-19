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
    res.render('home', { products })
})

app.get('/products/:id', (req,res) => {
    const id = req.params.id

    const products = products.find(products => {
        if (products.id == id) {
            return products
        } 
    })

    res.render('products', {products})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})