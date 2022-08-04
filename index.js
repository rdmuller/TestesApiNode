const express = require('express');
const app = express();

app.listen('3000')

app.route('/').get((req, res) => {
    res.send('olá');
});

app.route('/').post((req,res) => {
    console.log(req.body);
    console.log(req.baseUrl)
    console.log(req.body)
    console.log(req.headers)
});