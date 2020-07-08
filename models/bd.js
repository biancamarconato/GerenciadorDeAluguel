const Sequelize = require('sequelize');
//const { console } = require('console');
const sequelize = new Sequelize('galuguel', 'root', '',{

    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar!"+erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}