const express = require('express')
const path = require('path')
const app = express()
const db = require('./db.js')
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/api/products', async (req, res, next) => {
    const products = await db.readJSON('products.json')
    res.send(products)
})

app.post('/api/products', async (req, res) => {
    const prod = req.body
    console.log(prod)
    
})
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listening on port ${port}`))