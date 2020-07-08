const bd = require('./bd')

const Pagamento = bd.sequelize.define('pagamento', {
    dataEstabelecida:{type: bd.Sequelize.DATE},
    dataPagamento:{type: bd.Sequelize.DATE},
    valor:{type: bd.Sequelize.FLOAT}
})

//Pagamento.sync({force: true})
module.exports = Pagamento