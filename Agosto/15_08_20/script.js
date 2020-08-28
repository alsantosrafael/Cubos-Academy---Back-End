//Definindo funções
//Função mater
const iniciar = () => {
  rl.question('Olá, estimad@ cliente! Bem-vind@ a nossa feira! O que gostaria de fazer?\n[1] Consultar produto\n[2] Ver sacola\n[3] Fechar compra\n[4] Sair\nSua resposta: ', (resposta) => {

    if(resposta === '1') {
      procuraFruta();
    } else if(resposta === '2') {
      verSacola();
    } else if(resposta === '3'){
      fechaCompra();
    } else if(resposta === '4'){
      rl.close();
      return console.log('Agradeço sua visita! Volte sempre! :D')

    } else {
      console.log('Comando inválido. Tente novamente...')
      iniciar()
    }
  })
}
//Função que localiza e indica existência do produto
const procuraFruta = () => {
  rl.question('Muito bem! Qual produto você gostaria de encontrar?\nSua resposta: ', (resposta) => {

    let flag = false;
    for(let i = 0; i < vendinhaDeFrutas.length; i++) {
      if(resposta === vendinhaDeFrutas[i].nome){
        console.log('Achei aqui o(a) ' + chalk.greenBright(`${resposta}!`))
        console.log(`Ainda temos ${vendinhaDeFrutas[i].quant} unidade(s) e a unidade custa ${vendinhaDeFrutas[i].preco}`)
        flag = true;
        rl.question('O que deseja fazer com o produto?\n[1] Adicionar à sacola\n[2] Voltar\nSua resposta: ', (resposta) => {
          if(resposta === '1'){
            rl.question('Qual a quantidade deseja adicionar?\nSua resposta: ', (resposta) =>{
              if(resposta > vendinhaDeFrutas[i].quant) {
                console.log('Não temos a quantidade que você deseja...Tente novamente!');
                procuraFruta();
              } else if (vendinhaDeFrutas[i].quant === 0){
                console.log('Não temos mais esse produto no nosso estoque. Tente novamente')
                procuraFruta();
              } else {
                atualizaSacola(vendinhaDeFrutas[i].id, vendinhaDeFrutas[i].nome, Number(resposta), Number(vendinhaDeFrutas[i].preco));
                vendinhaDeFrutas[i].quant -= Number(resposta);
                iniciar();
              }
            })
          } else{

            iniciar();
          }
        })
      }
    } 
    //Se não encontrar o produto...
    if(flag === false){
      console.log('Não consegui achar ' +  chalk.redBright(`${resposta}`) + '!')
      rl.question('Deseja procurar outro produto?\n[1]Sim\n[2]Não\nSua resposta: ', (resposta) => {
        if(resposta === '1') {
          procuraFruta();
        } else{
          rl.close();
          return console.log('Agradecemos a sua visita!');
        }
      })
    }
   })
}
//Definindo array global
let  produtos = [];

const atualizaSacola = (id, nome, quant, preco) => {
  
  const produto = {
    id: id, 
    nome: nome,
    quant: Number(quant),
    preco: Number(preco)
  };
  
  if(produtos.length === 0){
    produtos.push(produto);
  } else{
    for(let i = 0; i < produtos.length; i++){
      console.log(produtos[i].id, produto.id)
      if(Number(produtos[i].id) === Number(produto.id)){
        produtos[i].quant += produto.quant;
        break;//Condição de parada se não ele continua para sempre
      } else{
        produtos.push(produto);
        break;
      }
    }
  }
  verSacola()
}

const verSacola = () => {
  
  if(produtos.length === 0){
    console.log('Sua sacola ainda está vazia! Vamos comprar!\n')
    iniciar()
  } else{
    for(let i = 0; i < produtos.length; i++){
      console.log(produtos[i]);
    }
    iniciar()
  }
}

const fechaCompra = () => {
  let somaTotal = 0;
  if(produtos.length === 0){
    console.log('Sua sacola está vazia... tente novamente!');
    iniciar();
  } else {
    console.log('Vejamos o que temos na sacola!')
    for(let i = 0; i < produtos.length; i++){
      console.log(`Item: ${produtos[i].nome}\nQuant: ${produtos[i].quant}\nPreço:${produtos[i].preco}\nSubtotal: ${produtos[i].preco * produtos[i].quant}`)
      somaTotal += produtos[i].quant * produtos[i].preco;
    }
    rl.question(`O total foi de: ${somaTotal}. Aceitamos apenas dinheiro. Quantia dada: `, (resposta) => {
      if(Number(resposta) - Number(somaTotal) === 0){
        console.log('Tudo certo! Muito obrigado e volte sempre!')
        rl.close()
      } else{
        console.log(`Aqui está seu troco: R$${Number(resposta) - Number(somaTotal)}`);
        console.log('Obrigado pela preferência! Volte sempre!')
        rl.close()
      }
    })
  }
}

//Declarando variáveis
//Requisição de pacotes
const chalk = require('chalk');
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


//Declarando vetor de objetos com os itens da feira
const vendinhaDeFrutas = [
  {
    id: 1,
    nome: 'uva',
    preco: 300,
    quant: 5
  },
  {
    id: 2,
    nome: 'mamao papaya',
    preco: 400,
    quant: 3
  },
  {
    id: 3,
    nome: 'banana',
    preco: 350,
    quant: 10
  },
  {
    id: 4,
    nome: 'maca',
    preco: 400,
    quant: 20
  }
]
//Iniciando programa
iniciar()
