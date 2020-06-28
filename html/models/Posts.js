const Inquilino = sequelize.define('inquilino', {
    nome:{
        type: Sequelize.TEXT
    },
    cpf:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.STRING
    },
    inicioContrato:{
        type: Sequelize.DATE
    },
    fimContrato:{
        type: Sequelize.DATE
    }
})

const Pagamento = sequelize.define('pagamento', {
    dataEstabelecida:{
        type: Sequelize.DATE
    },
    dataPagamento:{
        type: Sequelize.DATE
    },
    valor:{
        type: Sequelize.FLOAT
    }
})

//Inquilino.sync({force: true})
//Pagamento.sync({force: true})