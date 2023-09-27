const path = require('path')
const rootDir = require('../util/path')

exports.getAddProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
}

exports.postAddProducts = (req, res, next) => {
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}