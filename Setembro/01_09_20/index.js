//Requisição de bibliotecas
const banco = require('C:/Users/alsan/Desktop/Cubos Academy/Aulas/Backend/Aulas Práticas/Back End/Agosto/25_08_20/banco.js')
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const server = new Koa();


//Criando funções
const getCorrentistas = (ctx) => {
    const cpf = ctx.url.split("/");
    if(!cpf) {
        ctx.body = banco.mostrarCorrentistas();
    }
}

//Fazendo com que minhas respostas de requisição sejam traduzidas pelo bodyparser
server.use(bodyparser())
server.use((ctx) => {
    if(ctx.url.includes("/correntistas")) {
        if(ctx.method = "GET") {

        }
    }

})

server.listen(8081, () => {
    console.log("Server rodando mais que Beyblade na porta 8081.")
})