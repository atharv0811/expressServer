const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("in the middleware");
    next();
});

app.use((req, res, next) => {
    console.log("in the another middleware");
    // res.send("<h1>hello</h1>")
    res.send({ key1: "value" })
});

const server = http.createServer(app);

server.listen(4000);