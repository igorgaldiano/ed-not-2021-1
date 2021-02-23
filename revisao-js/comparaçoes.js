//Numeros

let a =10, b=8, c=10
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('---------------------------')

//Strings
a = 'CATIFUNDA'
b = 'FELISBINO'
c = 'CATIFUNDA'

console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('---------------------------')

// Boolean
a =true
b=false
c=true
console.log(a > b)
console.log(a < b)
console.log(a == c)
console.log(a != c)

console.log('---------------------------')

//Vetores
a = [10,20,30,40,50]
b = [-3,-2,-1]
c = [10,20,30,40,50]

console.log(a>b)
console.log(a<b)
console.log(a==c)
console.log(a !=c)

// comparaçoes diretas de vetores dão resultados inconsistentes
// Não é possivel comprar diretamente dois vetores

console.log('---------------------------')

//Objetos
a = { marca: 'Fiat', modelo: '147', ano: 1979}
b = { marca: 'Chevrolet', modelo:'Chevette', ano: 1982}
c = { marca: 'Fiat', modelo: '147', ano: 1979}

console.log(a>b)
console.log(a<b)
console.log(a==c)
console.log(a!=c)

// Objetos também não podem ser diretamente comparados entre si

//Conclusão: apenas os seguintes tipos de dados sao diretamente comparaveis
// - number
// - string
// - boolean