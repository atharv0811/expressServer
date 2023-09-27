const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path');
const success = require('./routes/success')
const contactRoutes = require('./routes/contact')
const getError = require('./controllers/errorController')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)
app.use(success)


app.use(getError.get404)

app.listen(4000);