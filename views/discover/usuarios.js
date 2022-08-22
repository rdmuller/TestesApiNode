const axios = require('axios');
const urlDiscover = 'http://localhost:5500/api'

const renderView = (res) => {
    axios.get(urlDiscover)
    .then(result => {
        const users = result.data['users']
        for(let i = 0; i < users.length; i++){
            console.log(users[i].name)
        }
        res.render('discover/index', {
            result : JSON.stringify(result.data),
            users : users,
        })
    })
    .catch(error => console.error(error))
}

module.exports = {
    renderView,
};