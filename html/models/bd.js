const Sequelize = require('sequelize');
const { Console } = require('console');
const sequelize = new Sequelize('GAluguel', 'root', '',{

    host:'localhost',
    dialect:'mysql'
});

sequelize.authenticate().then(function(){
    Console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar!"+erro)
});

