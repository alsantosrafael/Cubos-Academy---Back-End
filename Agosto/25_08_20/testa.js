const helper = require('./helpers.js')
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const iniciar = ()  => {
    rl.question("Olá! O que você gostaria de fazer?\n[1] Registrar Correntista\n[2] Procurar Correntista\n[3] Atualizar cadastro\n[4] Excluir cadastro\n[5] Sacar dinheiro\n[6] Depositar dinheiro\n[0] Sair\nSua resposta: ", (resposta) => {
        if(resposta === '1'){
            addCorrentista();
        } else if (resposta === '2') {
            rl.question("Insira apenas os números do CPF que deseja buscar: ", (cpf) => {
                mostraCorrentista(cpf);
                iniciar();
            })

        } else if (resposta === '3') {
            rl.question("Insira apenas os números do CPF do usuário que deseja atualizar cadastro: ", (cpf) => {
                atualizaCadastro(cpf);
            })

        } else if (resposta === '4') {
            rl.question("Insira apenas os números do CPF do usuário que deseja deletar o cadastro: ", (cpf) => {
                deletarCadastro(cpf);
            })

        } else if (resposta === '5') {
            rl.question("Insira apenas os números do CPF da conta que deseja sacar dinheiro: ", (cpf) => { 
                rl.question("Insira agora o código do banco: ", (codBanco) => {
                    sacarDinheiro(cpf, codBanco);
                    iniciar()
                })
            })

        } else if (resposta === '6') {
            rl.question("Insira apenas os números do CPF da conta que deseja depositar dinheiro: ", (cpf) => { 
                rl.question("Insira agora o código do banco: ", (codBanco) => {
                    depositarDinheiro(cpf, codBanco);
                    iniciar()
                })
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
    let flag = false;
    correntistas.forEach((correntista) => {
        if(cpf === correntista.cpf) {
            console.log('Sinto muito, esse CPF já foi cadastrado... Tente novamente!\n')
            iniciar()
            flag = true;
        }
    })
    return flag
}
//Questão 01
const correntistas = [
    {
        nome: 'Johanna',
        cpf: helper.converteEmCpf('33333333333'),
        codBanco: helper.procuraBanco('104'),
        ag: helper.converteAgencia('12345'),
        conta: helper.converteConta('1234567'),
        saldo: 700,
        deletado: false
    },
    {
            nome: 'Pedrito',
            cpf: helper.converteEmCpf('22222222222'),
            codBanco: helper.procuraBanco('001'),
            ag: helper.converteAgencia('12345'),
            conta: helper.converteConta('1234567'),
            saldo: 500,
            deletado: false
    }
]

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

const mostraCorrentista = (cpf) => {
    let encontrado = procuraCorrentista(cpf)
    if(encontrado && !encontrado.correntista.deletado){
        console.log('Encontramos: ')
        console.log(encontrado.correntista)
    } else {
        console.log('CPF não encontrado. Correntista não cadastrado.')
    }
}

const procuraCorrentista = (cpf) => {
    let encontrado = null;
    let indice = -1;
    cpf = helper.converteEmCpf(cpf);
    correntistas.forEach((correntista,index) => {
        if(correntista.cpf === cpf) {
            encontrado = correntista;
            indice = index;
        } 
    })
    if (encontrado === null) {
        return false
    } else {
        return {
            correntista: encontrado,
            indice: indice,
        }
    };
}

const atualizaCadastro = (cpf) => {
    let correntista = procuraCorrentista(cpf)
    mostraCorrentista(cpf)
    if(correntista !== false) {
        rl.question("Qual dado você gostaria de atualizar?\n[1] Nome\n[2] CPF\n[3] Agência\n[4] Conta\n[0] Sair\n Sua resposta: ", (resposta) => {
            if(resposta === '1') {
                rl.question('Insira o nome: ',(nome) => {
                    correntistas[correntista.indice].nome = nome;
                    console.log('Nome alterado com sucesso!');
                    iniciar()
                })
            } else if(resposta === '2') {
                rl.question('Insira o novo cpf: ', (cpf) => {
                    if(existeCpf(cpf) === false){
                        correntistas[correntista.indice].cpf = helper.converteEmCpf(cpf);
                        console.log('Cpf alterado com sucesso!\n');
                        iniciar()
                    } else {
                        console.log('Cpf não pode ser alterado.')
                        iniciar()
                    }
                }
            )} else if(resposta === '3') {
                rl.question('Insira a nova agência: ', (ag) => {
                   ag = helper.converteAgencia(ag);
                   if(ag === false) {
                       iniciar();
                   } else {
                    correntistas[correntista.indice].ag = ag;
                    console.log('Agência alterada com sucesso!')
                    iniciar();
                   }
                })
            } else if(resposta === '4') {
                rl.question('Insira a nova conta: ', (conta) => {
                   conta = helper.converteConta(conta)
                   if(conta === false) {
                       iniciar();
                   } else {
                    correntistas[correntista.indice].conta = conta;
                    console.log('Conta alterada com sucesso!')
                    iniciar();
                   }
                })
            } else if (resposta === '0') {
                console.log('Ok... saindo!\n')
                iniciar()

            }else {
                console.log('Comando inválido! Tente novamente.')
                rl.close()
                iniciar()
            }
        })
    }
}

const deletarCadastro = (cpf) => {
    let encontrado = procuraCorrentista(cpf);
    if(encontrado !== false) {
        mostraCorrentista(cpf);
        rl.question('Deseja mesmo deletar o usuário em questão?\n[1] Sim\n[2] Não\nSua resposta; ', (resp) => {
            if(resp === '1') {
                correntistas[encontrado.indice].deletado = true;
                console.log('Usuário deletado com sucesso.\n')
                mostrarCorrentistas()
                iniciar()
                // rl.close()//Preciso disso aqui?
            } else if (resp === '2') {
                console.log('Ok... Saindo para tela inicial\n')
                iniciar();
            } else{
                console.log('Comando inválido. Tente novamente.\n')
                iniciar();
            }
        })
    }
}

const sacarDinheiro = (cpf, codBanco) => {
    const indice = procuraCorrentista(cpf).indice;
    const correntista = procuraCorrentista(cpf).correntista;
    console.log(helper.procuraBanco(codBanco))
    if(indice === false) {
        console.log('Cpf não cadastrado. Tente novamente.\n');
        iniciar();
    } else if(indice !== false && correntista.codBanco === helper.procuraBanco(codBanco)) {
        rl.question('Qual a quantia que deseja sacar?\n Sua resposta: ', (saque) => {
            if(saque > correntistas[indice].saldo) {
                console.log('Saldo insuficiente. Tente novamente.\n');
                iniciar()
            } else {
                console.log('Saque realizado. Confira as notas!\n')
                correntistas[indice].saldo -= Number(saque);
                iniciar()
            }
        })

    } else {
        console.log('O código do banco inserido não condiz com o cpf cadastrado. Tente novamente.\n');
        iniciar()
    }
}

const depositarDinheiro = (cpf, codBanco) => {
    const indice = procuraCorrentista(cpf).indice;
    const correntista = procuraCorrentista(cpf).correntista;
    console.log(helper.procuraBanco(codBanco))
    if(indice === false) {
        console.log('Cpf não cadastrado. Tente novamente.');
        iniciar();
    } else if(indice !== false && correntista.codBanco === helper.procuraBanco(codBanco)) {
        rl.question('Qual a quantia que deseja depositar?\n Sua resposta: ', (deposito) => {
            console.log('Deposito realizado. Obrigado por confiar em nosso banco!\n')
            correntistas[indice].saldo += Number(deposito);
            iniciar()
        })
    } else {
        console.log('O código do banco inserido não condiz com o cpf cadastrado. Tente novamente.\n');
        iniciar()
    }
}

//Falta adicionar as funções de saque e depósito!

iniciar()