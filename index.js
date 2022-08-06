const express = require('express');
const app = express();

app.listen('3000')
app.use(express.json()); // precisa para tratar o JSon de retorno nos métodos

app.route('/').get((req, res) => {
    res.send('olá');
});

app.route('/').post((req,res) => {
    console.log('body -------------------------');
    console.log(req.body);
    console.log('baseUrl -------------------------');
    console.log(req.baseUrl)
    console.log('headers -------------------------');
    console.log(req.headers)
    res.body = 'teste ronald';
});

app.route('/about').get((req,res) => res.send('Página sobre'));

app.route('/about').post((req,res) => {
    const {nome, email, conhecimentos} = req.body
    let retorno = `BODY ---------\n`
    retorno = retorno + `Nome: ${nome}\n`
    retorno = retorno + `E-mail: ${email}\n`
    retorno = retorno + `Conhecimentos: ${conhecimentos}\n`
    retorno = retorno + `\n\nBASE URL => ${req.baseUrl}`
    
    return res.send(retorno);
})