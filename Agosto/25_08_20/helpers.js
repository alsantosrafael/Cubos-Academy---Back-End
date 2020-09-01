//Exercícios em Sala
//Questão 01
const procuraBanco = (id) => {
    const bancos = [
        {
            id:'001',
            nome:'Banco do Brasil S.A.'
        },
        {
            id:'033',
            nome: 'Banco Santander (Brasil) S.A.'
        },
        {
            id:'104',
            nome: 'Caixa Econômica Federal'
        },
        {
            id:'237',
            nome: 'Banco Bradesco S.A.'
        },
        {
            id:'341',
            nome: 'Banco Itaú S.A.'
        },
        {
            id:'356',
            nome: 'Banco Real S.A. (antigo)'
        },
        {
            id:'389',
            nome: 'Banco Mercantil do Brasil S.A.'
        },
        {
            id:'399',
            nome: 'HSBC Bank Brasil S.A.'
        },
        {
            id:'422',
            nome: 'Banco Safra S.A.'
        },
        {
            id:'453',
            nome: 'Banco Rural S.A.'
        },
        {
            id:'633',
            nome: 'Banco Rendimento S.A.'
        },
        {
            id:'652',
            nome: 'Itaú Unibanco Holding S.A.'
        },
        {
            id:'745',
            nome: 'Banco Citibank S.A.'
        }
    ]
    let nomeBanco = ''
    for(let i = 0; i < bancos.length; i++){
        if(bancos[i].id === id){
            nomeBanco = bancos[i].nome.replace('S.A.', '').replace('(Brasil)', '').trim()
            return nomeBanco;
        }
    } 
    return false;
}

//Questão 02
const mudaString = (dado) => {
    novaString = ''
    for(let i = 0; i < dado.length; i++){
        novaString += dado[i].replace('.', '').replace('-','').replace(',', '');
    }
    return novaString;
  }
  
// Questão 03
const converteEmCpf = (numero) => {
    let cpf = ''
    if(numero.length !== 11){
        console.log('O cpf tem 11 digitos. Tente novamente.');
        return false;
    } else {
        cpf = numero.slice(0,3) + '.' + numero.slice(3,6) + '.' + numero.slice(6, 9) + '-' + numero.slice(9, 11)
        return cpf;
    }

}

//Questão 04
const converteAgencia = (numero) => {
    let ag = ''

    if(numero.length !== 5) {
        console.log('A agência deve possuir cinco dígitos. Tente novamente')
        return false
    } else {
        ag = numero.slice(0,4) + '-' + numero.slice(4,5)
        return ag;
    }

}
//Questão 05
const converteConta = (numero) => {
    let conta = ''
    if(numero.length !== 7) {
        console.log('Sinto muito, a conta deve ter 7 digitos. Tente novamente.')
        return false
    } else {
        conta = numero.slice(0,6) + '-' + numero.slice(6,7)
        return conta;
    }

}

//console.log(converteConta('1234567'))

//Questão 06
module.exports = {
    procuraBanco: procuraBanco,
    mudaString: mudaString,
    converteEmCpf: converteEmCpf,
    converteAgencia: converteAgencia,
    converteConta: converteConta,
};