//importar o pacote express
const express = require ('express')
//executar o express
const app = express()
//definir as portas para o servidor
const porta = process.env.PORT || 3030

//definir servidor a pasta dos arquivos de css e imagens
app.use(express.static('./assets'))
//definir o express como body parse
app.use(express.urlencoded({extended:false}))

//exportar app e porta
module.exports = {app,porta}