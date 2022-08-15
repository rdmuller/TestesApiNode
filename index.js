const express = require('express');
const app = express();
const axios = require('axios');
const { response } = require('express');
//const apis = require('./views/fetch/fetch')

app.listen('3000')
app.use(express.json()); // precisa para tratar o JSon de retorno nos métodos
app.set("view engine", "ejs");

/*
app.route('/:nome').get((req, res) => {
    res.send(`olá ${req.params.nome}`);
});
*/

const url = 'http://api.github.com/users'
const urlComParm = `${url}\/rdmuller`

app.route('/').get((req, res) => {
    res.send('olá.');
});

app.route('/QueryParm').get((req, res) => {
    res.send(req.query);
});

app.route('/').post((req,res) => {
    console.log('body -------------------------');
    console.log(req.body);
    console.log('baseUrl -------------------------');
    console.log(req.baseUrl)
    console.log('headers -------------------------');
    console.log(req.headers)
    console.log('headers -------------------------');
    console.log(req.query)
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

// buscar dados do usuário do github
app.get('/git', (req,res) => {
    axios.get(urlComParm)
        .then(
            (result) => {
                console.log(result.data)
                res.render('gitdata/index', {
                    gitData: result.data,
                })
            }
        )
        .catch(error => res.render('gitdata/index', {
            gitData: error,
        })
        )
})

//----------------------------------------------------------------------------//

const urlDiscover = 'http://localhost:5500/api'

function getUsers() {
    axios.get('http://localhost:5500/api')
    .then(response => {
        console.log(response.data)
        return JSON.stringify(response.data)
    })
    .catch(error => {
        console.log("Erro executando a função")
        console.error(error)
    })
}

app.get('/discover', (req, res) => {
    result = getUsers()
    res.render('discover/index', {result: result, })
})

