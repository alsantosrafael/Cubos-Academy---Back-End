const isOdd = (numero) => {
    if(typeof(numero) !== 'number'){
        console.log('Isso não é um número... Tente novamente.')
        return false
    } else{
        if(numero % 2 !== 0){
            return true;
        } else{
            return false;
        }
    }
}

const isEven = (numero) => {
    if(typeof numero !== 'number'){
        console.log('Isso não é um número... Tente novamente.');
        return false;
    } else {
        if(numero % 2 === 0){
            return true;
        } else {
            return false;
        }

    }
}
//Exportando nossa biblioteca/modulo
module.exports = {
    isOdd: isOdd,
    isEven: isEven,
};