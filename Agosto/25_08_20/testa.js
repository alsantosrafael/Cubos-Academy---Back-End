const helper = require('./helpers.js')
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const iniciar = ()  => {
    rl.question("Olá! O que você gostaria de fazer?\n[1] Registrar Correntista\n[2] Procurar Correntista\n[3] Atualizar cadastro\n[4] Excluir cadastro\n[0] Sair\nSua resposta: ", (resposta) => {
        if(resposta === '1'){
            addCorrentista();
        } else if (resposta === '2') {
            rl.question("Insira apenas os números do CPF que deseja buscar: ", (cpf) => {
                procuraCorrentista(cpf);
                iniciar();
            })

        } else if (resposta === 3) {
            rl.question("Insira apenas os números do CPF do usuário que deseja atualizar cadastro: ", (cpf) => {
                cpf = helper.converteEmCpf(cpf);
                atualizaCadastro(cpf);
            })

        }else if (resposta === '0'){
            rl.close();
            return console.log('Agradecemos sua visita! Volte sempre! :D')
        } else {

            console.log('Comando inválido. Tente novamente!\n')
            iniciar()
        }
    })
}

const existeCpf = (cpf) => {
    correntistas.forEach((correntista) => {
        if(cpf === correntista.cpf) {
            console.log('Sinto muito, esse CPF já foi cadastrado... Tente novamente!\n')
            iniciar()
            return true;
        } else{
            return false;
        }
    })
}
//Questão 01
const correntistas = []

const addCorrentista = (/*nome, cpf, codBanco, ag, conta, saldo*/) => {
    console.log("Certo, vamos adicionar um novo correntista!\n")
    const correntista = {
        nome: '',
        cpf: '',
        codBanco: '',
        ag: '',
        conta: '',
        saldo: 0,
        }

    rl.question("Insira o nome completo: ", (nome) => {
        correntista.nome = nome;
        rl.question("Insira o cpf do correntista: ", (cpf) => {
            cpf = helper.converteEmCpf(cpf);
            if(cpf === false) {
                iniciar();
            } else {
                if(existeCpf(cpf)) {
                    iniciar()
                } else {
                    correntista.cpf = cpf;
                    rl.question("Qual o código do banco: ", (codBanco) => {
                        codBanco = helper.procuraBanco(codBanco) 
                        if(codBanco === false) {
                            console.log('Sinto muito. O código informado não possui um banco atrelado. Tente novamente.')
                            iniciar()

                        } else {
                            correntista.codBanco = codBanco;
                            rl.question('Insira a agência: ', (ag) => {
                                ag = helper.converteAgencia(ag);
                                if(ag === false) {

                                    iniciar();
                                } else {
                                    correntista.ag = ag 
                                    rl.question('Insira a conta: ', (conta) => {
                                        conta = helper.converteConta(conta);
                                        if(conta === false) {
                                            iniciar();
                                        } else {
                                            correntista.conta = conta;
                                            rl.question('Por fim, digite o valor de depósito: ', (deposito) => {
                                                correntista.saldo = Number(deposito);
                                                correntista.deletado = false;
                                                correntistas.push(correntista);
                                                mostrarCorrentistas()
                                                iniciar()
                                            })
                                        }

                                    })
                                }
                            })
                        }
                    })
                }

            }

        })
    })
}

const mostrarCorrentistas = () => {
    correntistas.forEach((correntista) => {
        if(correntista.deletado === false) {
            console.log(correntista)
        }
    });
}

const mostraCorrentista = (correntista) => {
    console.log('Encontramos: ')
    console.log(correntista)
}

const procuraCorrentista = (cpf) => {
    let encontrado = [];
    cpf = helper.converteEmCpf(cpf);
    correntistas.forEach((correntista) => {
        if(correntista.cpf === cpf) {
            encontrado = correntista;
            mostraCorrentista(encontrado)
        } else {
            console.log('CPF não cadastrado... tente novamente!\n')
            iniciar()
        }
    })
}


//Fazer o atualiza cadastro, deleta usuario, deposito e saque


// const atualizaCadastro = (cpf) => {
//     if(existeCpf(cpf) === false) {
//         console.log("Usuário não encontrado. Cpf não cadastrado. Tente Novamente.");
//         iniciar();
//     } else {
//         procuraCorrentista(cpf);
//         rl.question("Qual propriedadade você quer alterar\n[1] Nome\n [2] CPF\n[3] Cod. do Banco\n [4] Agência\n[5] Conta\n[0] Sair\nSua resposta: ", (resposta) => {
//             if(resposta === '1') {
//                 rl.question('Insira o nome nome: ')
//             }
//         })
//     }
// }
//console.log(addCorrentista('Rafael Almeida', '05380765505', '104', '12345', '1234567', '1000' ))

iniciar()