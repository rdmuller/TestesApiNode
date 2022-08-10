const { response } = require("express")

const url = 'http://localhost:3000/api'

function GetUsers() {
    fetch(url)
    .then(response => console.log(response.json()))
    .catch(error => console.error(error))
}