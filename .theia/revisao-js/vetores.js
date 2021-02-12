let frutas = ['maça', 'laranja', 'pera', 'uva', 'mamão', 'banana']

//Vetor original
console.log(frutas)

//retira o último elemento de um vetor
let ultimaFruta = frutas.pop()

//Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

//remocao do primeiro elemento 
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

//Remoção em posição intermediaria
//1º parametro -> a posição de remoção (contagem começa em 0)
//2º parametro -> a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2,1) //Sempre retornara um vetor

console.log(frutas)
console.log(terceiraFruta)