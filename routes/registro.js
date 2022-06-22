const mongoose = require('mongoose')

module.exports = (app)=>{
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    app.post('/registro',async(req,res)=>{

        var dados = req.body

        var database = require('../config/database')()

        var usuarios = require('../models/usuarios')

        var verificar = await usuarios.findOne({email:dados.email})
        if (verificar){
            return res.send('email já cadastrado')
        }

        var cript = require('bcryptjs')
        var senhasegura = await cript.hash(dados.senha,10)

        var documento = await new usuarios({
            nome:dados.nome,
            email:dados.email,
            senha:senhasegura
        }).save()
        res.redirect('/')
    })
}