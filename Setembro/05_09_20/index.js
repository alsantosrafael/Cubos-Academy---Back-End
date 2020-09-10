//chamando dependências
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const server = new Koa();
//Preciso do bodyparser para transformar o conteudo que o usuario enviar
//no body em JSON
server.use(bodyparser());

//Armazenando url original e encurtada para ter uma referência
const urls = [];

const obterUrl = (codigo) => {
    for(let i = 0; i< urls.length; i++) {
        return urls[i][codigo] // To acessando a propriedade através dessa construção, não o valor dela!
    }
    return null;
};
//Gera código aleatório
const gerarCodigo = () => Math.random().toString(36).substr(2,9);

server.use((ctx) => {
    //montando a url encurtada
    if(ctx.url.includes('/encurta')) {
        if(ctx.method === 'POST') {
            const url = ctx.request.body.url;
            if(!url) {
                ctx.status = 400;
                ctx.body = {
                    status: 'erro',
                    dados: {
                        mensagem: "Pedido mal-formatado"
                    }
                }
            } else {
                const codigo = gerarCodigo();
                urls.push({ [codigo] : url } );

                ctx.status = 201;
                ctx.body = {
                    status: 'Sucesso',
                    dados: {
                        url_original: url,
                        url_encurtada: `localhost:8081:${codigo}`,
                    }
                }
            }
        }
    } else if (ctx.method === "GET") { //Caso o usuário agora queira acessar nossa nova URL
        const url_desejada = ctx.url.split('/')[1];
        const url_original = obterUrl(url_desejada);
        
        if(url_original) {
            ctx.status = 301;
            ctx.redirect(url_original);
        } else {
            ctx.status = 404;
            ctx.body = {
            status: 'erro',
            dados: {
                mensagem: 'Conteúdo não encontrado'
            }
        }
    }
    } else{//Padronizando formas de enviar e receber conteúdo
        ctx.status = 404;
        ctx.body = {
            status: 'erro',
            dados: {
                mensagem: 'Conteúdo não encontrado'
            }
        }
    }
});

server.listen(8081, () => {
    console.log('Servidor rodando na porta 8081!')
})