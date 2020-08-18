
//Exercícios resolvidos: Questão01
const transformarString = (texto, transformadora) => {
    if(texto.length === 0){
        console.log('Insira um texto maior!');
    }

    let resultado = transformadora(texto);

    resultado += '!\n\nPs.:Código feito por Rafael.';

    return resultado;
}
//transforma A em 4 e O em 0
const transformaLetras = (texto) => {
    novoTexto = '';
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === 'A' || texto[i] === 'a'){
            novoTexto += 4;
        } else if(texto[i] === 'O' || texto[i] === 'o'){
            novoTexto += 0;
        } else if(texto[i] === 'E' || texto[i] === 'e'){
            novoTexto += 3
        } else if(texto[i] === 'I' || texto[i] === 'i'){
            novoTexto += 1
        }else{
            novoTexto += texto[i];
        }
    }
    return novoTexto;
}
const test = transformarString('Era uma vez, um lugarzinho no meio do nada', transformaLetras);
console.log(test);

//Exercícios resolvidos: Questão02
//Retira espaços da string

const retiraEspaco = (texto) => {
    let novoTexto = '';
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === ' '){
            novoTexto += '';/*Quando tiver espaçamento, retirá-lo*/
        }else {
            novoTexto += texto[i];
        }

    }
    return novoTexto;
}

const test2 = transformarString('Eu sei remover espaços', retiraEspaco);
console.log(test2);