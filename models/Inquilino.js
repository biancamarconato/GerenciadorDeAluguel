const bd = require('./bd')

const Inquilino = bd.sequelize.define('inquilino', {
    nome:{type: bd.Sequelize.TEXT},
    cpf:{type: bd.Sequelize.STRING},
    telefone:{type: bd.Sequelize.STRING },
    inicioContrato:{type: bd.Sequelize.DATE},
    fimContrato:{type: bd.Sequelize.DATE }
})

//Inquilino.sync({force: true})
module.exports = Inquilino
