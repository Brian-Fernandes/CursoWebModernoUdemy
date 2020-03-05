const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Elemento com indice 4 não existe


valores[4] = 10 // Adicionando o valor 10 no quarto indice
console.log(valores.length) // Length - mostrando quantos elementos existe no array

valores.push({id:3}, false, null,'teste') // Adicionando novos elementos
console.log(valores.pop()) // Pop - Retira do array o último valor 