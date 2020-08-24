/*
  Não altere nada ABAIXO disso até o próximo comentário;

  -- Este código permite que tenhamos uma 
  -- experiência interativa com o usuário;
  -- Não é necessário entendê-lo neste momento.
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  Não altere nada ACIMA deste comentário;;
*/

/**
 * Escreva seu código aqui embaixo;
 */

 const restart(resposta){
   rl.question('Deseja continuar sua compra?', (resposta) => {
     if()
   })
 }

 const procuraFruta = (frutas, resposta) => {
  let flag = false;
  for(let i = 0; i < frutas.length; i++){
    if(resposta === frutas[i].nome){
      console.log('Achei aqui o(a) ' + chalk.greenBright(`${resposta}!`))
      flag = true
      rl.close()
    }
  } if(flag === false){
    console.log('Não consegui achar ' +  chalk.redBright(`${resposta}`) + '!')
    rl.close()
  }
 }
const chalk = require('chalk');
const vendinhaDeFrutas = [
  {
    nome: 'uva',
    preco: 300,
    quant: 5
  },
  {
    nome: 'mamao papaya',
    preco: 400,
    quant: 3
  },
  {
    nome: 'banana',
    preco: 350,
    quant: 10
  },
  {
    nome: 'maca',
    preco: 400,
    quant: 20
  }
]

rl.question('Olá, querido cliente! Qual fruta você gostaria de comprar?', 
(resposta) => procuraFruta(vendinhaDeFrutas, resposta));


