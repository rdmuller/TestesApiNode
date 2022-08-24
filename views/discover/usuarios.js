const axios = require('axios');
const urlDiscover = 'http://localhost:5500/api'

const renderView = async (res) => {
    try {
        const result = await axios.get(urlDiscover)
        const users = result.data['users']
        listUsersConsole(users)

        res.render('discover/index', {
            result : JSON.stringify(result.data),
            users : users,
        })
    }
    catch (e) {
        console.error(e)
    }
    finally {
        console.log("Fim")
    }
}

function listUsersConsole(users) {
    for(let i = 0; i < users.length; i++){
        console.log(users[i].name)
    }
}

/*const renderView = (res) => {
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
}*/

module.exports = {
    renderView,
};