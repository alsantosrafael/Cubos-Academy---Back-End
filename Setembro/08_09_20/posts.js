//Criando funcionalidades para os posts

const atribuiId = (posts) => { 
    let id;
    if(posts.length === 0) {
        id = 1;
    } else { 
        id = (posts[posts.length-1].id + 1)
    }
    return id;
}

const procuraPost = (id, posts) => {
    let postProcurado = null;
    posts.forEach((post, index) => {
        if(post.id === id && !post.deletado && post.publicado) {
            postProcurado = {
                post,
                index
            }
        }
    })
    return postProcurado;
}

const mostraPosts = (posts) => {
    let postsRevelados = []
    posts.forEach(post => {
        if(!post.deletado || !post.publicado) {

            postsRevelados.push(post)
        }
    })
    return postsRevelados
}
const deletaPosts = (id, posts) => {
    posts.forEach(post => {
        if(post.id === id) {
            post.deletado = true;
        }
    })

}

const organizaPostagens = (posts) => {
    let postagensDesorganizadas = mostraPosts(posts).reverse()

    const postagensOrganizadas = postagensDesorganizadas.map(postagem => {
        if(!postagem.deletado || !postagem.publicado) {
            return postagem;
            
        }
    })
    return postagensOrganizadas;

}

const encontraPost = (id, posts) => {
    let postEncontrado = null;

    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id === id) {
            postEncontrado = posts[i]
        }
    }
    return postEncontrado;

}
module.exports = {
    atribuiId: atribuiId,
    procuraPost: procuraPost,
    mostraPosts: mostraPosts,
    organizaPostagens: organizaPostagens,
    encontraPost: encontraPost,
        
    
}