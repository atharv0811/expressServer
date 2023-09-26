const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path');
const success = require('./routes/success')
const contactRoutes = require('./routes/contact')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)
app.use(success)


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(4000);