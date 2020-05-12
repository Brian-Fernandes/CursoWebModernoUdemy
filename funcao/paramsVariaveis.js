function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())

console.log(soma(1))
// Se estiver alguma string ele concatena com o resto 
console.log(soma(1.2, 2.3 , 5,1.2, 2.3 , 5,1.2, 2.3 , 5,))