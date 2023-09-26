const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input placeholder='Product Name' type='text' name='title'><input placeholder='size' type='number' name='size'><button type='submit'>Add Product</button></form>")
});

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

module.exports = router;

