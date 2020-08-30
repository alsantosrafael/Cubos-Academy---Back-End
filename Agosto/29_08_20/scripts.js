
//Operador Ternário
//Questão 1A
const maioridade = (idade) => (idade >= 18) ? 'Maior de idade' : 'Menor de idade';

console.log(maioridade(14))

//Questão 1B
const escolherHeroina = (grupo) => {
    let heroina = (grupo === 'marvel') ? 'Capitã Marvel' : 'Mulher-Maravilha';
    return heroina;
}

console.log(escolherHeroina('marvel'))

//Questão 1C

const calcularIdade = (animal, idade) => {
    let retorno = (animal === 'gato' ? ((idade <= 1) ? 15 : (idade > 1 && idade <= 2) ?
    15 + 10 : (15+10+((idade-2)*4))) : animal === 'cachorro' ? (idade <= 1) ? 15 : (15 + 
        ((idade-1)*7)) : idade )

        return retorno
}

console.log(calcularIdade('gato', 1))


// Servidor Web
//Questão02

const Koa = require('koa')
const server = new Koa();
//Questão 03 04 e 05
server.use(async (ctx) => {
    ctx.body = 'Hey essa é a aula 21'
    if (ctx.originalUrl ==='/caraOuCoroa') {
        const resultado = Math.ceil(Math.random()*100);
        (resultado <= 50) ? ctx.body = 'Deu cara!' : ctx.body = 'Deu coroa!'
    } else if(ctx.originalUrl === '/raizQuadrada/') {
        ctx.body = 'Passe um número para o cálculo!'
    } else if (ctx.originalUrl === '/raizQuadrada/4'){
        ctx.body = 'Raiz quadrada de 4 vale: ' + Math.sqrt(4);
    } else if (ctx.originalUrl === '/raizQuadrada/2500') {
        ctx.body = 'Raiz quadrada de 2500 vale: ' + Math.sqrt(2500);
    } if (ctx.originalUrl === '/divide/') {
        ctx.body = 'Requisição exige dois números!';
   } else if (ctx.originalUrl === '/divide/2/2') {
       let res = 2 / 2;
       ctx.body = 'A divisão de 2 por 2 vale: ' + res;
   } else if (ctx.originalUrl === '/divide/37/6') {
       let res = (37 / 6).toFixed(2);
       ctx.body = 'A divisão de 37 por 6 vale: ' + res;
   } else {
        ctx.body = 'Erro 404! Página não encontrada!'
    }
})


server.listen(8081, () => {
    console.log('Server on-line!')
})
