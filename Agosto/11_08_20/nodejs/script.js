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
//Implementando as funções
function listarUsuarios(){
  for(let i = 0; i < cadastros.length; i++){
    if(!(cadastros[i].deletado)){
      console.log(cadastros[i])
    }
  }
}

function deletarUsuario(cpf){
  for(let i = 0; i < cadastros.length; i++){
    if(cadastros[i].cpf === cpf){
      cadastros[i].deletado = true;
      console.log(`Usuário de CPF ${cpf} foi deletado!`);
    } else{
      console.log(`Usuário de CPF ${cpf} não encontrado!`);
    }
  }
}

function cadastrar(usuario){
  rl.question('Qual o nome que deseja cadastrar? ', function callback(nome){
    usuario.nome = nome;
    rl.question('Qual a data de nascimento? ', function callback(dataDeNascimento){
      usuario.dataDeNascimento = dataDeNascimento;
      rl.question('Qual o CPF do usuário? ', function callback(cpf){
        usuario.cpf = cpf;
        rl.question('Qual a profissão do usuário? ', function callback(profissao){
          usuario.profissao = profissao;
          estaCadastrado(usuario);
        })
      })
    })
  })
}

function estaCadastrado (usuario){
  let cadastrado = false;
  for(let i = 0; i < cadastros.length; i++){
    if(cadastros[i].cpf === usuario.cpf){
      console.log('Erro! Usuário já cadastrado')
      rl.close()
      return 0
    }
  }

  cadastros.push(usuario);
  console.log('Cadastro realizado com sucesso!')
  listarUsuarios();

  rl.close();
}

function escolhaUmaOpcao(){
  rl.question('Digite uma opção: \n[1]Listar usuários \n[2]Deletar usuário \n[3]Cadastrar usuário\n', function(escolha){
    if(escolha === '1'){
      listarUsuarios();

    } else if(escolha === '2'){
      rl.question('Qual o cpf do usuário que deseja deletar?', function callback(cpf){
        deletarUsuario(cpf);
        rl.close();
      })
    } else if(escolha === '3'){
      let usuario = {
        nome: '',
        dataDeNascimento: '',
        cpf:'',
        profissao:'',
        deletado:false
      }
      cadastrar(usuario);
    } else{
      console.log('O valor inserido é inválido!')
      rl.close();
    }
  })
}
function corrigeCadastro(cpf){
  for(let i = 0; i < cadastros.length; i++){
    if(cadastros[i].cpf === cpf){
      deletarUsuario(cadastros[i].cpf);
      console.log('O cadastro anterior será corrigido agora.')
      let usuario = {
        nome: '',
        dataDeNascimento: '',
        cpf:'',
        profissao:'',
        deletado:false
      }
      cadastrar(usuario);
    }
  }
  listarUsuarios();
}
//Código em si

let cadastros = [
  {
    nome: 'João',
    dataDeNascimento: '13/09/1991',
    cpf:'03192845531',
    profissao: 'UX/UI Designer',
    deletado: false

  }
];

const userData = {
  nome: 'Dona Florinda',
  dataDeNascimento: '24/02/1958',
  cpf: '32134532192',
  profissao: 'Dona de Casa',
  deletado: false
};

escolhaUmaOpcao()
// corrigeCadastro('03192845531')

