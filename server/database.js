const Sequelize = require('sequelize')
const bancoUsuarios = new Sequelize('cadastro', 'root', 's971288362!', {
        host: 'localhost',
        dialect: 'mysql'
    })
const databases = {

    authenticateUsuarios: ()=>{
        bancoUsuarios.authenticate()
        .then(()=>{
            console.log("conectado com sucesso ao banco de dados!")
        }).catch((err)=>{
            console.log("ERRO, não foi possivel se conectar ao banco de dados: " + err)
        })
    }
}

module.exports = databases