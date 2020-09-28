const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const pacAutor = require("./authors.js");
const pacPost = require("./posts.js");

const server = new Koa();
const autores = [];
const posts = [];

server.use(bodyparser());
server.use((ctx) => {
  if (ctx.url.includes("/autor")) {
    if (ctx.url.includes("/autor/:")) {
      const id = Number(ctx.url.split("/:")[1]);
      const autor = pacAutor.procuraAutor(id, autores);

      if (!id) {
        ctx.status = 400;
        ctx.body = {
          status: "Erro",
          dados: {
            mensagem: "Requisição mal-formatada.",
          },
        };
      } else {
        if (!autor) {
          ctx.status = 404;
          ctx.body = {
            status: "Erro",
            dados: {
              mensagem: "Autor não encontrado.",
            },
          };
        } else {
          if (ctx.method === "GET") {
            ctx.status = 200;
            ctx.body = {
              status: "Sucesso",
              dados: {
                mensagem: "Autor encontrado",
                descricao: autor.autor,
              },
            };
          } else if (ctx.method === "DELETE") {
            autores[autor.index].deletado = true;
            ctx.status = 200;
            ctx.body = {
              status: "Sucesso",
              dados: {
                mensagem: "Usuario deletado com sucesso",
                descricao: autor.autor,
              },
            };
          } else if (ctx.method === "PUT") {
            //Como colocar uma lógica aqui para se tiver vazio, não alterar?
            (autores[autor.index].primNome = !ctx.request.body.primNome
              ? autores[autor.index].primNome
              : ctx.request.body.primNome),
              (autores[autor.index].ultNome = !ctx.request.body.ultNome
                ? autores[autor.index].ultNome
                : ctx.request.body.ultNome),
              (autores[autor.index].email = !ctx.request.body.email
                ? autores[autor.index].email
                : ctx.request.body.email),
              (autores[autor.index].senha = !ctx.request.body.senha
                ? autores[autor.index].senha
                : ctx.request.body.senha);
            ctx.status = 200;
            ctx.body = {
              status: "Sucesso",
              dados: {
                mensagem: "Autor alterado com sucesso",
                descricao: autores[autor.index],
              },
            };
          } else {
            ctx.status = 400;
            ctx.body = {
              status: "Erro",
              dados: {
                mensagem: "Requisição mal-formatada.",
              },
            };
          }
        }
      }
    } else if (ctx.method === "POST") {
      autores.push({
        id: Number(pacAutor.atribuiId(autores)),
        primNome: ctx.request.body.primNome,
        ultNome: ctx.request.body.ultNome,
        email: ctx.request.body.email,
        senha: ctx.request.body.senha,
      });
      ctx.status = 201;
      ctx.body = {
        status: "Sucesso",
        dados: {
          mensagem: "Autor criado com sucesso.",
          descricao: autores[autores.length - 1],
        },
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: "Erro",
        dados: {
          mensagem: "Requisição mal-formatada.",
        },
      };
    }
  } else if (ctx.url.includes("/posts")) {
    if (ctx.url.includes("/posts/:")) {
      const idPost = Number(ctx.url.split("/:")[1]);
      let post = pacPost.encontraPost(idPost, posts);
      let autorDoPost = pacAutor.procuraAutor(Number(post.autor), autores);

      if (!idPost) {
        console.log(post);
        ctx.status = 400;
        ctx.body = {
          status: "Erro",
          dados: {
            mensagem: "Requisição mal-formatada.",
          },
        };
      } else {
        if (!post || posts.length === 0) {
          ctx.status = 404;
          ctx.body = {
            status: "Erro",
            dados: {
              mensagem: "Post não encontrado.",
            },
          };
        } else {
          if (!autorDoPost) {
            ctx.status = 404;
            ctx.body = {
              status: "Erro",
              dados: {
                mensagem: "Autor não encontrado.",
              },
            };
          } else {
            if (ctx.method === "GET") {
              ctx.status = 200;
              ctx.body = {
                status: "Sucesso",
                dados: {
                  mensagem: "Post encontrado com sucesso",
                  descricao: post,
                },
              };
            }
          }
        }
      }
    } else if (ctx.method === "POST") {
      const id = Number(ctx.request.body.autor);
      const autor = pacAutor.procuraAutor(id, autores);

      if (!id) {
        ctx.status = 400;
        ctx.body = {
          status: "Erro",
          dados: {
            mensagem: "Requisição mal-formatada.",
          },
        };
      } else {
        if (!autor) {
          ctx.status = 404;
          ctx.body = {
            status: "Erro",
            dados: {
              mensagem: "Autor não encontrado.",
            },
          };
        } else {
          posts.push({
            id: pacPost.atribuiId(posts),
            titulo: ctx.request.body.titulo,
            subtitulo: ctx.request.body.subtitulo,
            autor: ctx.request.body.autor,
            postado: true,
            deletado: false,
          });
          ctx.status = 201;
          ctx.body = {
            status: "Sucesso",
            dados: {
              mensagem: "Post criado com sucesso.",
              descricao: posts[posts.length - 1],
            },
          };
        }
      }
    } else if (ctx.method === "GET") {
      const postagens = pacPost.organizaPostagens(posts)
      if(postagens.length === 0) {
        ctx.status = 404;
        ctx.body = {
          status: "Erro",
          dados: {
            mensagem: "Posts não encontrados.",
          },
        };


      } else {
        ctx.status = 200;
        ctx.body = {
          status: "Sucesso",
          dados: {
            mensagem: "Post encontrado com sucesso",
            descricao: postagens
          },
        };

      }

    } else if (ctx.method === "DELETE") {

      
      
    }
  } else {
    ctx.status = 404;
    ctx.body = {
      status: "Erro",
      dados: {
        mensagem: "Autor não encontrado.",
      },
    };
  }

});

server.listen(8081, () => {
  console.log("Server rodando na porta 8081.");
});
