// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Função com retorno

function soma(a, b = 0) { //atributo b está como default 0
    return a + b
}

console.log(soma( 2, 3)) // 5 
console.log(soma(2)) // 2 pois o atributo b pega o default 