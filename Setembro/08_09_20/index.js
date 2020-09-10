
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

const procuraAutor = (id) => {
    let autorProcurado = null;
    autores.forEach((autor, index) => {
        if(autor.id === id && !autor.deletado) {
            autorProcurado = {
                autor,
                index
            }
        }
    })
    return autorProcurado;
}


//Chamando dependências
const Koa = require("koa");
const bodyparser = require("koa-bodyparser");

const server = new Koa ();

const autores = [];
const posts = [];


//Exemplo de objeto post
// const post = {
//     id: '',
//     titulo: '',
//     subtitulo: '',
//     autor: '',//id
//     publicado: false,
//     deletado: false,
// }
server.use(bodyparser());

server.use((ctx) => {
    if(ctx.url.includes('/autor')) {

        if(ctx.url.includes('/autor/:')) {
            const id = ctx.url.split('/:')[1]
            const autor = procuraAutor(id)

            if(!autor) {
                ctx.status = 404;
                ctx.body = {
                    status: 'erro',
                    dados: {
                        mensagem: 'Conteúdo não encontrado'
                    }
                }
            } else if (autor && ctx.method === 'GET') {
                    
                    ctx.status = 200
                    ctx.body = {
                        status: 'Sucesso',
                        dados: {
                            mensagem:'Conteúdo encontrado!',
                            dado: autor.autor
                        }
                    }
                } else if(autor && ctx.method === 'DELETE') {
                    autores[autor.index].deletado = true;
                    ctx.status = 200
                    ctx.body = {
                        status: 'Sucesso',
                        dados: {
                            mensagem:'Usuário deletado com sucesso!',
                            dado: autor.autor
                        }
                    }
                } else if(autor && ctx.method === 'PUT') {

                    autores[autor.index].primeiroNome = ctx.request.body.primNome,
                    autores[autor.index].ultimoNome= ctx.request.body.ultNome,
                    autores[autor.index].email = ctx.request.body.email,
                    autores[autor.index].senha = ctx.request.body.senha, 
                    ctx.status = 200
                    ctx.body = {
                        status: 'Sucesso',
                        dados: {
                            mensagem:'Usuário atualizado com sucesso!',
                            dado: autor.autor
                        }
                    }
                }
            
        } else if(ctx.method === 'POST') {
            const autor = ctx.request.body;
            if(!autor) {
                ctx.status = 400
                ctx.body = {
                    status: 'Erro',
                    dados: {
                        mensagem: 'Pedido mal-formatado'
                    }
                }
            } else {
                autores.push( { id: atribuiId(),
                    primeiroNome: ctx.request.body.primNome,
                    ultimoNome: ctx.request.body.ultNome,
                    email: ctx.request.body.email,
                    senha: ctx.request.body.senha,
                    deletado: false
                })
                ctx.status = 201
                ctx.body = {
                    status: 'Sucesso',
                    dados: {
                        mensagem:'Autor criado com sucesso!'
                    }
                }
            }
        }

    } else {
        console.log('parou aqui')
        ctx.status = 404;
        ctx.body = {
            status: 'erro',
            dados: {
                mensagem: 'Conteúdo não encontrado'
            }
        }
    }

})

server.listen(8081, () => {
    console.log("Servidor rodando na porta 8081!")
})

Diário: 'Toda a parte de autor está ok. falta psot e outras coisinhas '