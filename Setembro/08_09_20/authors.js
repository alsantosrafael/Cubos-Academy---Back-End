// Criando funcionalidades para os autores

const atribuiId = (autores) => { 
    let id;
    if(autores.length === 0) {
        id = 1
    } else { 
        id = (autores[autores.length-1].id + 1)
    }
    return id;
}

const procuraAutor = (id, autores) => {
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


module.exports = {
    atribuiId: atribuiId,
    procuraAutor: procuraAutor
}