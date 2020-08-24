//Criando funções
const leiaEndereco = () => {
    let bolha =''
    let arrayEnd = []
    let endereco = fs.readFileSync('enderecos.txt').toString().split('---');
    for(let i = 0; i < endereco.length; i++){
        //objeto vazio tem que ficar dentro do loop
        let objeto = {
                nome: '',
                endereco:''
            }
        bolha = endereco[i].trim().split("\n")
        objeto.nome = bolha[0].trim()
        objeto.endereco = bolha[1].trim()
        arrayEnd.push(objeto)
    }
    return arrayEnd;
}

const encontraEnd = (nome, lista) => {
    let endereco = ''
    for(let i = 0; i < lista.length; i++){
        if(lista[i].nome.trim().toLowerCase() === nome.trim().toLowerCase()){
            endereco = lista[i].endereco;
        }
    }
    return endereco;
}

//Iniciando variáveis
const fs = require('fs');
const chalk = require('chalk')
const objetoEnderecos = leiaEndereco();


//leitura do txt de interesse
fs.readFile("./cartas.txt", (err, dados) => {
    //Mensagem de erro deve ser a primeira de tudo!
    if (err) {
        return console.log(err);
    }
    // armazenando conteudo textual em cartas
    const cartas = dados.toString().split("---");

    for (let i = 0; i < cartas.length; i++){
        let conversa = cartas[i].trim().split('\n'); //to mudando meu array conversa a cada interação
        let endereco =  '';

        endereco = encontraEnd(conversa[1].trim(), objetoEnderecos);

        console.log('INICIO DA MENSAGEM')
        console.log('Remetente:' + chalk.redBright(conversa[0].trim()))
        console.log('Destinatário:' + chalk.greenBright(conversa[1].trim()))
        console.log('Endereço:' + chalk.greenBright(endereco))
        console.log('Mensagem: ' + chalk.blueBright(conversa[2]))
        console.log('FIM DA MENSAGEM\n')
        }
});



