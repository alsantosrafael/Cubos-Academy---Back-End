//Chamei biblioteca
const fs = require('fs');

fs.readFile("./cartas.txt", (err, dados) => {
    //Mensagem de erro deve ser a primeira de tudo!
    if (err) {
        return console.log(err);
    }
    // armazenando conteudo textual em cartas
    const cartas = dados.toString().split("---");
    
    for (let i = 0; i < cartas.length; i++){
        let conversa = cartas[i].trim().split('\n') 
        //to mudando meu array conversa a cada interação

        console.log('INICIO DA MENSAGEM')
        console.log('Remetente:' + conversa[0].trim())
        console.log('Destinatário:' + conversa[1])
        console.log('Mensagem: ' + conversa[2])
        console.log('FIM DA MENSAGEM')
        }
});



