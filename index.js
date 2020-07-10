const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const moment = require('moment')
const Inquilino = require('./models/Inquilino')
const Pagamento = require('./models/Pagamento')
const { where } = require("sequelize")
const {DataTypes}=require("Sequelize")

//configuração do body-parser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD,MM,YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

//app.get('/', function(req, res){
    
  //  })
//});

app.get('/inq', function(req, res){
    res.render('inquilino')
})

app.post('/confinq', function(req, res){
    Inquilino.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        inicioContrato: req.body.inicioContrato,
        fimContrato: req.body.fimContrato
    }).then(function(){
        res.redirect('/infoinq')
    }).catch(function(erro){
        res.send("Houve um erro ao cadastrar inquilino: "+erro)
    })
})

app.get('/infoinq', function(req, res){
    Inquilino.findAll({order:[['id', 'DESC']]}).then(function(inquilinos){
        res.render('InfoInq', {inquilinos: inquilinos})
     })
})

app.get('/apagar/:id', function(req, res){
    Inquilino.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/infoinq')
    }).catch(function(erro){
        res.send("Este inquilino não existe!")
    })
})

app.get('/pag', function(req, res){
    res.render('pagamento')
})

app.post('/confpag', function(req, res){
    Pagamento.create({
        dataEstabelecida: req.body.dataEstabelecida,
        dataPagamento: req.body.dataPagamento,
        valor: req.body.valor,
    }).then(function(){
        res.redirect('/infopag')
    }).catch(function(erro){
        res.send("Houve um erro ao cadastrar pagamento: "+erro)
    })
})

app.get('/infopag', function(req, res){
    Pagamento.findAll({order: [['id', 'DESC']]}).then(function(pagamentos){
        res.render('InfoPag', {pagamentos: pagamentos})
    })
})

app.get('/apagarpag/:id', function(req, res){
    Pagamento.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/infopag')
    }).catch(function(erro){
       // res.send("Este pagamento não existe!")
    })
})



app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})