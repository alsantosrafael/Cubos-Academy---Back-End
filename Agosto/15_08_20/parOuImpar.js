const isEven = (numero) => {

    if (typeof(numero) === 'number'){
        if(numero % 2 === 0){
            return true;
        } else{
            return false;
        }
    } else{
        console.log('Não é número... Tente novamente.')
        return 0
    }

}

const a = isEven('oi')
console.log(a)