//Definindo funções
//Função mater
const iniciar = () => {
  rl.question('Olá, estimad@ cliente! Bem-vind@ a nossa feira! O que gostaria de fazer?\n[1] Consultar produto\n[2] Ver sacola\n[3] Fechar compra\n[4] Sair\nSua resposta: ', (resposta) => {

    if(resposta === '1') {
      procuraFruta(vendinhaDeFrutas);
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
const procuraFruta = (vendinhaDeFrutas) => {
  rl.question('Muito bem! Qual produto você gostaria de encontrar?\nSua resposta: ', (resposta) => {

    let flag = false;
    for(let i = 0; i < vendinhaDeFrutas.length; i++){
      if(resposta === vendinhaDeFrutas[i].nome){
        console.log('Achei aqui o(a) ' + chalk.greenBright(`${resposta}!`))
        console.log(`Ainda temos ${vendinhaDeFrutas[i].quant} unidade(s) e a unidade custa ${vendinhaDeFrutas[i].preco}`)
        flag = true;
        rl.question('O que deseja fazer com o produto?\n[1] Adicionar à sacola\n[2] Sair\nSua resposta: ', (resposta) => {
          if(resposta === '1'){
            rl.question('Qual a quantidade deseja adicionar?\nSua resposta: ', (resposta) =>{
              if(resposta > vendinhaDeFrutas[i].quant) {
                console.log('Não temos a quantidade que você deseja...Tente novamente!')
                procuraFruta(vendinhaDeFrutas)
              } else {
                addMinhaSacola(vendinhaDeFrutas[i].id, vendinhaDeFrutas[i].nome, Number(vendinhaDeFrutas[i].quant), Number(vendinhaDeFrutas[i].preco));
                vendinhaDeFrutas[i].quant -= Number(resposta)
                iniciar();
              }
            })
          }
        })
      }
    } 
    //Se não encontrar o produto...
    if(flag === false){
      console.log('Não consegui achar ' +  chalk.redBright(`${resposta}`) + '!')
      rl.question('Deseja procurar outro produto?\n[1]Sim\n[2]Não\nSua resposta: ', (resposta) => {
        if(resposta === '1') {
          return procuraFruta(vendinhaDeFrutas);
        } else{
          rl.close();
          return console.log('Agradecemos a sua visita!');
        }
      })
    }
   })
}

const addMinhaSacola = (id, nome, quant, preco) => {
  const produto = {
    id: id, 
    nome: nome,
    quant: Number(quant),
    preco: Number(preco)
  };

  checarSacola(produto)
  const produtos = [];
}

const checarSacola = (produto) => {
  
  const produtos = verSacola();

  if(produtos.length === 0){
    produtos.push(produto);
  } else{
    for(let i = 0; i < produtos.length; i++){
      if(produtos[i].id === produto.id){
        produtos[i].quant += produto.quant;
      } else{
        produtos.push(produto);
      }
    }
  }
  return produtos;
}


const verSacola = () => {
  const produtos = []

  if(typeof produtos.length === 0){
    console.log('Sua sacola ainda está vazia! Vamos comprar!\n')
    iniciar()
  } else{
    console.log(produtos);
    iniciar()
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

//Perguntas: como implementar as funções de adicionar item à sacola, 
//checar sacola(se item adicionado) já existe e
//exibir sacola
//Como escrever função de fechar compra?