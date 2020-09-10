const helper = require("./helpers.js");
const readline = require("readline");
const fs = require('fs')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const iniciar = () => {
  rl.question(
    "Olá! O que você gostaria de fazer?\n[1] Registrar Correntista\n[2] Procurar Correntista\n[3] Atualizar cadastro\n[4] Excluir cadastro\n[5] Sacar dinheiro\n[6] Depositar dinheiro\n[7] Transferir dinheiro\n[8] Extrato Bancário\n[9] Extrato Global\n[10] Imprimir extrato\n[0] Sair\nSua resposta: ",
    (resposta) => {
      if (resposta === "1") {
        addCorrentista();
      } else if (resposta === "2") {
        rl.question(
          "Insira apenas os números do CPF que deseja buscar: ",
          (cpf) => {
            mostraCorrentista(cpf);
            iniciar();
          }
        );
      } else if (resposta === "3") {
        rl.question(
          "Insira apenas os números do CPF do usuário que deseja atualizar cadastro: ",
          (cpf) => {
            atualizaCadastro(cpf);
          }
        );
      } else if (resposta === "4") {
        rl.question(
          "Insira apenas os números do CPF do usuário que deseja deletar o cadastro: ",
          (cpf) => {
            deletarCadastro(cpf);
          }
        );
      } else if (resposta === "5") {
        rl.question(
          "Insira apenas os números do CPF da conta que deseja sacar dinheiro: ",
          (cpf) => {
            rl.question("Insira agora o código do banco: ", (codBanco) => {
              sacarDinheiro(cpf, codBanco);
              iniciar();
            });
          }
        );
      } else if (resposta === "6") {
        rl.question(
          "Insira apenas os números do CPF da conta que deseja depositar dinheiro: ",
          (cpf) => {
            rl.question("Insira agora o código do banco: ", (codBanco) => {
              depositarDinheiro(cpf, codBanco);
              iniciar();
            });
          }
        );
      } else if (resposta === "7") {
        transferencia();
        iniciar();
      } else if (resposta === "8") {
          extratoBancario()
          iniciar()
      }else if (resposta === '9') {
          rl.question('Digite o cpf para exibir o extrato: ', (cpf) => {
            gerarExtrato(cpf);
            iniciar()
          })
      } else if (resposta === '10') {
        imprimirExtrato()
        iniciar()
      }else if (resposta === "0") {
        rl.close();
        return console.log("Agradecemos sua visita! Volte sempre! :D");
      } else {
        console.log("Comando inválido. Tente novamente!\n");
        iniciar();
      }
    }
  );
};

const existeCpf = (cpf) => {
  let flag = false;
  correntistas.forEach((correntista) => {
    if (cpf === correntista.cpf) {
      console.log(
        "Sinto muito, esse CPF já foi cadastrado... Tente novamente!\n"
      );
      iniciar();
      flag = true;
    }
  });
  return flag;
};
//Questão 01
const correntistas = [
  {
    nome: "Johanna",
    cpf: helper.converteEmCpf("33333333333"),
    codBanco: helper.procuraBanco("104"),
    ag: helper.converteAgencia("12345"),
    conta: helper.converteConta("1234567"),
    saldo: 700,
    deletado: false,
    registro: [],
  },
  {
    nome: "Pedrito",
    cpf: helper.converteEmCpf("22222222222"),
    codBanco: helper.procuraBanco("001"),
    ag: helper.converteAgencia("12345"),
    conta: helper.converteConta("1234567"),
    saldo: 500,
    deletado: false,
    registro: [],
  },
];

const addCorrentista = (/*nome, cpf, codBanco, ag, conta, saldo*/) => {
  console.log("Certo, vamos adicionar um novo correntista!\n");
  const correntista = {
    nome: "",
    cpf: "",
    codBanco: "",
    ag: "",
    conta: "",
    saldo: 0,
  };

  rl.question("Insira o nome completo: ", (nome) => {
    correntista.nome = nome;
    rl.question("Insira o cpf do correntista: ", (cpf) => {
      cpf = helper.converteEmCpf(cpf);
      if (cpf === false) {
        iniciar();
      } else {
        if (existeCpf(cpf)) {
          iniciar();
        } else {
          correntista.cpf = cpf;
          rl.question("Qual o código do banco: ", (codBanco) => {
            codBanco = helper.procuraBanco(codBanco);
            if (codBanco === false) {
              console.log(
                "Sinto muito. O código informado não possui um banco atrelado. Tente novamente."
              );
              iniciar();
            } else {
              correntista.codBanco = codBanco;
              rl.question("Insira a agência: ", (ag) => {
                ag = helper.converteAgencia(ag);
                if (ag === false) {
                  iniciar();
                } else {
                  correntista.ag = ag;
                  rl.question("Insira a conta: ", (conta) => {
                    conta = helper.converteConta(conta);
                    if (conta === false) {
                      iniciar();
                    } else {
                      correntista.conta = conta;
                      rl.question(
                        "Por fim, digite o valor de depósito: ",
                        (deposito) => {
                          correntista.saldo = Number(deposito);
                          correntista.deletado = false;
                          correntista.registro = [];
                          correntistas.push(correntista);
                          mostrarCorrentistas();
                          iniciar();
                        }
                      );
                    }
                  });
                }
              });
            }
          });
        }
      }
    });
  });
};

const mostrarCorrentistas = () => {
  correntistas.forEach((correntista) => {
    if (correntista.deletado === false) {
      console.log(correntista);
    }
  });
};

const mostraCorrentista = (cpf) => {
  let encontrado = procuraCorrentista(cpf);
  if (encontrado && !encontrado.correntista.deletado) {
    console.log("Encontramos: ");
    console.log(encontrado.correntista);
  } else {
    console.log("CPF não encontrado. Correntista não cadastrado.");
  }
};

const procuraCorrentista = (cpf) => {
  let encontrado = null;
  let indice = -1;
  cpf = helper.converteEmCpf(cpf);
  correntistas.forEach((correntista, index) => {
    if (correntista.cpf === cpf) {
      encontrado = correntista;
      indice = index;
    }
  });
  if (encontrado === null) {
    return false;
  } else {
    return {
      correntista: encontrado,
      indice: indice,
    };
  }
};

const atualizaCadastro = (cpf) => {
  let correntista = procuraCorrentista(cpf);
  mostraCorrentista(cpf);
  if (correntista !== false) {
    rl.question(
      "Qual dado você gostaria de atualizar?\n[1] Nome\n[2] CPF\n[3] Agência\n[4] Conta\n[0] Sair\n Sua resposta: ",
      (resposta) => {
        if (resposta === "1") {
          rl.question("Insira o nome: ", (nome) => {
            correntistas[correntista.indice].nome = nome;
            console.log("Nome alterado com sucesso!");
            iniciar();
          });
        } else if (resposta === "2") {
          rl.question("Insira o novo cpf: ", (cpf) => {
            if (existeCpf(cpf) === false) {
              correntistas[correntista.indice].cpf = helper.converteEmCpf(cpf);
              console.log("Cpf alterado com sucesso!\n");
              iniciar();
            } else {
              console.log("Cpf não pode ser alterado.");
              iniciar();
            }
          });
        } else if (resposta === "3") {
          rl.question("Insira a nova agência: ", (ag) => {
            ag = helper.converteAgencia(ag);
            if (ag === false) {
              iniciar();
            } else {
              correntistas[correntista.indice].ag = ag;
              console.log("Agência alterada com sucesso!");
              iniciar();
            }
          });
        } else if (resposta === "4") {
          rl.question("Insira a nova conta: ", (conta) => {
            conta = helper.converteConta(conta);
            if (conta === false) {
              iniciar();
            } else {
              correntistas[correntista.indice].conta = conta;
              console.log("Conta alterada com sucesso!");
              iniciar();
            }
          });
        } else if (resposta === "0") {
          console.log("Ok... saindo!\n");
          iniciar();
        } else {
          console.log("Comando inválido! Tente novamente.");
          rl.close();
          iniciar();
        }
      }
    );
  }
};

const deletarCadastro = (cpf) => {
  let encontrado = procuraCorrentista(cpf);
  if (encontrado !== false) {
    mostraCorrentista(cpf);
    rl.question(
      "Deseja mesmo deletar o usuário em questão?\n[1] Sim\n[2] Não\nSua resposta; ",
      (resp) => {
        if (resp === "1") {
          correntistas[encontrado.indice].deletado = true;
          console.log("Usuário deletado com sucesso.\n");
          mostrarCorrentistas();
          iniciar();
          // rl.close()//Preciso disso aqui?
        } else if (resp === "2") {
          console.log("Ok... Saindo para tela inicial\n");
          iniciar();
        } else {
          console.log("Comando inválido. Tente novamente.\n");
          iniciar();
        }
      }
    );
  }
};

const sacarDinheiro = (cpf, codBanco) => {
  const indice = procuraCorrentista(cpf).indice;
  const correntista = procuraCorrentista(cpf).correntista;
  console.log(helper.procuraBanco(codBanco));
  if (indice === false) {
    console.log("Cpf não cadastrado. Tente novamente.\n");
    iniciar();
  } else if (
    indice !== false &&
    correntista.codBanco === helper.procuraBanco(codBanco)
  ) {
    rl.question(
      "Qual a quantia que deseja sacar?\n Sua resposta: ",
      (saque) => {
        if (saque > correntistas[indice].saldo) {
          console.log("Saldo insuficiente. Tente novamente.\n");
          const registro = {
            natureza: "saque",
            cpf: correntistas[indice].cpf,
            cliente: correntistas[indice].nome,
            banco: correntistas[indice].codBanco,
            ag: correntistas[indice].ag,
            conta: correntistas[indice].conta,
            valor: "Deu erro. Saldo insuficiente.",
            data: "23-12-2020 14:34",
            tipo: "saída",
          };
          correntistas[indice].registro.push(registro);
          iniciar();
        } else {
          console.log("Saque realizado. Confira as notas!\n");
          correntistas[indice].saldo -= Number(saque);
          const registro = {
            natureza: "saque",
            cpf: correntistas[indice].cpf,
            cliente: correntistas[indice].nome,
            banco: correntistas[indice].codBanco,
            ag: correntistas[indice].ag,
            conta: correntistas[indice].conta,
            valor: "R$" + saque,
            data: "31-12-2020 21:49",
            tipo: "saída",
          };
          correntistas[indice].registro.push(registro);
          iniciar();
        }
      }
    );
  } else {
    console.log(
      "O código do banco inserido não condiz com o cpf cadastrado. Tente novamente.\n"
    );
    iniciar();
  }
};

const depositarDinheiro = (cpf, codBanco) => {
  const indice = procuraCorrentista(cpf).indice;
  const correntista = procuraCorrentista(cpf).correntista;
  console.log(helper.procuraBanco(codBanco));
  if (indice === false) {
    console.log("Cpf não cadastrado. Tente novamente.");
    iniciar();
  } else if (
    indice !== false &&
    correntista.codBanco === helper.procuraBanco(codBanco)
  ) {
    rl.question(
      "Qual a quantia que deseja depositar?\n Sua resposta: ",
      (deposito) => {
        console.log(
          "Deposito realizado. Obrigado por confiar em nosso banco!\n"
        );
        correntistas[indice].saldo += Number(deposito);
        const registro = {
          natureza: "deposito",
          cpf: correntistas[indice].cpf,
          cliente: correntistas[indice].nome,
          banco: correntistas[indice].codBanco,
          ag: correntistas[indice].ag,
          conta: correntistas[indice].conta,
          valor: "R$" + saque,
          data: "30-01-2021 11:13",
          tipo: "entrada",
        };
        correntistas[indice].registro.push(registro);
        iniciar();
      }
    );
  } else {
    console.log(
      "O código do banco inserido não condiz com o cpf cadastrado. Tente novamente.\n"
    );
    iniciar();
  }
};

const transferencia = () => {
  rl.question("Insira o cpf de destino do depósito: ", (cpfDest) => {
    const correntista = procuraCorrentista(cpfDest).correntista;
    const indice = procuraCorrentista(cpfDest).indice;
    if (!correntista) {
      console.log("Cliente não cadastrado...Tente novamente.");
      iniciar();
    } else {
      rl.question(
        "Agora, insira o código do banco do destinatário: ",
        (codBancoDest) => {
          if (correntista.codBanco === helper.procuraBanco(codBancoDest)) {
            rl.question(
              "De qual CPF vai sair o dinheiro? Sua resposta: ",
              (cpf) => {
                const correntistaRem = procuraCorrentista(cpf).correntista;
                const indiceRem = procuraCorrentista(cpf).indice;
                if (correntistaRem) {
                  if (correntistaRem.codBanco === correntista.codBanco) {
                    rl.question(
                      "Qual a quantia que deseja depositar? Sua resposta: ",
                      (quantia) => {
                        quantia = Number(quantia);
                        if (quantia > correntistaRem.saldo) {
                          console.log("Saldo insuficiente. Tente novamente.");

                          const registro = {
                            natureza: "transferencia",
                            cpfEntrada: correntistas[indice].cpf,
                            cpfSaida: correntistaRem[indiceRem].cpf,
                            destinatario: correntistas[indice].nome,
                            remetente: correntistasRem[indiceRem].nome,
                            banco: correntistas[indice].codBanco,
                            ag: correntistas[indice].ag,
                            conta: correntistas[indice].conta,
                            valor: "Erro na transferência",
                            data: "15-04-2020 12:31",
                            tipo: "entrada",
                          };
                          const registroRem = {
                            natureza: "transferencia",
                            cpfEntrada: correntistas[indice].cpf,
                            cpfSaida: correntistaRem[indiceRem].cpf,
                            destinatario: correntistas[indice].nome,
                            remetente: correntistasRem[indiceRem].nome,
                            banco: correntistas[indice].codBanco,
                            ag: correntistas[indice].ag,
                            conta: correntistas[indice].conta,
                            valor: "Erro na transferência",
                            data: "15-04-2020 16:05",
                            tipo: "saida",
                          };
                          correntistas[indice].registro.push(registro);
                          correntistas[indiceRem].registro.push(registroRem);
                          iniciar();
                        } else {
                          correntistas[indiceRem].saldo -= quantia;
                          correntistas[indice].saldo += quantia;
                          console.log("Depósito realizado com sucesso.");
                          const registro = {
                            natureza: "transferencia",
                            cpfEntrada: correntistas[indice].cpf,
                            cpfSaida: correntistaRem[indiceRem].cpf,
                            destinatario: correntistas[indice].nome,
                            remetente: correntistasRem[indiceRem].nome,
                            banco: correntistas[indice].codBanco,
                            ag: correntistas[indice].ag,
                            conta: correntistas[indice].conta,
                            valor: "R$" + quantia.toString(),
                            data: "15-04-2020 12:31",
                            tipo: "entrada",
                          };
                          const registroRem = {
                            natureza: "transferencia",
                            cpfEntrada: correntistas[indice].cpf,
                            cpfSaida: correntistaRem[indiceRem].cpf,
                            destinatario: correntistas[indice].nome,
                            remetente: correntistasRem[indiceRem].nome,
                            banco: correntistas[indice].codBanco,
                            ag: correntistas[indice].ag,
                            conta: correntistas[indice].conta,
                            valor: "R$" + quantia.toString(),
                            data: "15-04-2020 16:05",
                            tipo: "saida",
                          };
                          correntistas[indice].registro.push(registro);
                          correntistas[indiceRem].registro.push(registroRem);
                          iniciar();
                        }
                      }
                    );
                  } else {
                    console.log("Só conseguimos realizar transações entre correntistas de bancos iguais. Tente novamente!");
                    iniciar();
                  }
                } else {
                  console.log("Usuário não existe. Tente novamente.");
                  iniciar();
                }
              }
            );
          } else {
            console.log(
              "O cliente encontrado não possui conta nesse banco. Tente novamente."
            );
          }
        }
      );
    }
  });
};

const extratoBancario = () => {
  rl.question("Vamos retirar o extrato. Digite o CPF do correntista: ", (cpf) => {
      const cliente = procuraCorrentista(cpf).correntista;
      if (cliente) {
        rl.question(
          "Digite o código do banco do correntista procurado: ",
          (codBanco) => {
            if (cliente.codBanco === helper.procuraBanco(codBanco)) {
              rl.question("Digite a quantidade de registros que quer ver: ", (quant) => {
                  if ((quant = "todos")) {
                    for (let i = 0; i < cliente.registro.length; i++) {
                      console.log(cliente.registro[i]);
                    }
                    iniciar()
                  } else if (Number(quant) <= cliente.registro.length) {
                    for (let i = 0; i < Number(quant); i++) {
                      console.log(cliente.registro[i]);
                    }
                    iniciar()
                  } else {
                    console.log("Não há registros.");
                    iniciar()
                  }
                }
              );
            } else {
              console.log("O cliente não possui conta no banco digitado. Tente novamente.");
              iniciar();
            }
          }
        );
      } else {
        console.log(
          "Não existe um correntista com esse cpf cadastrado. Tente novamente."
        );
        iniciar();
      }
    }
  );
};

const gerarExtrato = (cpf) => {
    const cliente = procuraCorrentista(cpf).correntista;
    let extrato = `|| ${cliente.codBanco} ||\n` + `Extrato bancário de ${cliente.nome}, CPF: ${cliente.cpf}\n` + `Agência: ${cliente.ag} Conta-corrente: ${cliente.conta}\n` + '*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n' + '|| Movimentações ||\n' + '*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n' + 'Tipo  |   Data da Ocorrência  |  Valor Movimentado(R$)\n'
    if(cliente) {
        console.log(`|| ${cliente.codBanco} ||`)
        console.log(`Extrato bancário de ${cliente.nome}, CPF: ${cliente.cpf}`)
        console.log(`Agência: ${cliente.ag} Conta-corrente: ${cliente.conta}`)
        console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
        console.log('|| Movimentações ||')
        console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
        console.log('Tipo  |   Data da Ocorrência  |  Valor Movimentado(R$)')
        cliente.registro.forEach((registro) => {
            console.log(registro.tipo, registro.data, registro.valor)
            extrato += `${registro.tipo} ` + `${registro.data} ` + `${registro.valor} \n`
        })

    } else{
        console.log('Erro. Tente novamente')
        resultado = 0;

    }
  iniciar()
  return extrato
}

const imprimirExtrato = () => {
  rl.question('Insira cpf: ', (cpf) => {
    const cliente = procuraCorrentista(cpf).correntista;
    if(cliente) {
      rl.question('Insira o banco: ', (codBanco) => {
        if(cliente.codBanco === helper.procuraBanco(codBanco)){
          const result = gerarExtrato(cpf)
          fs.writeFile(`cpf_do_correntista_${(Math.random().toFixed(5))}.txt`, result, (err) => {
            if(err) {
              console.log(err);
            }
         }
      )} else {
        iniciar()
      }
    })
  
  } else {
    iniciar()
  }
  })
}

//iniciar()
//Exportanto  minha nova biblioteca
module.exports = {
  iniciar: iniciar,
  addCorrentista: addCorrentista,
  mostraCorrentista: mostraCorrentista,
  mostrarCorrentistas: mostrarCorrentistas,
  existeCpf: existeCpf,
  procuraCorrentista: procuraCorrentista,
  atualizaCadastro: atualizaCadastro,
  deletarCadastro: deletarCadastro,
  sacarDinheiro: sacarDinheiro,
  depositarDinheiro: depositarDinheiro,
  transferencia: transferencia,
  extratoBancario: extratoBancario,
  gerarExtrato: gerarExtrato,
  imprimirExtrato: imprimirExtrato,
}