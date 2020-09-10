//Funções
const atribuiId = () => { 
    let id;
    if(autores.length === 0) {
        id = '0'
    } else { 
        id = (autores[autores.length-1].id + 1).toString()
    }
    return id;
}

const criarAutor = () => {

autores.push({ id: atribuiId(),
                primeiroNome: primNome,
                ultimoNome: ultNome,
                email: email,
                senha: senha,
                deletado: false
            })

console.log(autores)

}



const deletaAutor = (id) => {
    const pos = procuraAutor(id);
    if(!pos) {
        console.log('Autor não encontrado!')
        return false
    } else {
        console.log(pos.autor)
        rl.question('Encontramos o usuário. Deseja mesmo deletá-lo? [1] Sim\n[2]Não\nSua resposta: ', (resp) => {
            if(resp === '1') {
                autores[pos.index].deletado = true;
                console.log('Usuário deletado com sucesso!')
                return true
            }
        })
    }
}



const atualizaAutor = (id) => {
    const autor = procuraAutor(id);

    if(!autor) {
        return 'Autor não encontrado.'
    } else {
        rl.question('Qual dado deseja atualizar: [1] Primeiro Nome\n[2] Último Nome\n[3] Email\n[4] Senha\n[5]Sua resposta: ', (resp) => {
            switch (resp) {
                case '1':
                    rl.question('Insira o novo nome: ', (ans) => {
                        autores[autor.index].primeiroNome = ans;
                        rl.close()
                        break;
                    })
                case '2':
                    rl.close('Insira o novo ultimo nome: ', (ans) => {
                        autores[autor.index].ultimoNome = ans;
                        rl.close()
                        break;
                    })
                case '3':
                    rl.close('Insira o novo email: ', (ans) => {
                        autores[autor.index].email = ans;
                        rl.close()
                        break;
                    })
                case '4':
                    rl.close('Insira a nova senha: ', (ans) => {
                        autores[autor.index].senha = ans;
                        rl.close()
                        break;
                    })
                default:
                    console.log('Comando inválido!')
                    rl.close()
                    break;
            }
        })
    }
}

// Arquivo que registra as funções do blog
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


let autores = [{id: '0',
    primeiroNome: 'rafa',
    ultimoNome: 'alm',
    email: 'asdasfs',
    senha: 'senha',
    deletado: false}];
let posts = [] 




console.log(procuraAutor('0'))



