const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');

//configuração do body-parser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/cad', function(req, res){
    res.render('inquilino')
})

app.post('/confirm', function(req, res){
    res.send("Nome: "+req.body.nome+" CPF: "+req.body.cpf+" Telefone: "+req.body.telefone+" Data de Inicio do contrato: "+req.body.inicioContrato+" Data de término do contrato: "+req.body.fimContrato)
    res.send('Novo inquilino salvo com sucesso!')
})

app.get('/pag', function(req, res){
    res.render('pagamento')
    
})

app.post('/confpag', function(req, res){
    res.send("Data de pagamento: "+req.body.dataEstabelecida+" Data de pagamento: "+req.body.dataPagamento+" Valor pago: "+req.body.valor)
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});