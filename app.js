const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input placeholder='Product Name' type='text' name='title'><input placeholder='size' type='number' name='size'><button type='submit'>Add Product</button></form>")
});

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send("<h1>hello</h1>")
    // res.send({ key1: "value" })
});

const server = http.createServer(app);

server.listen(4000);