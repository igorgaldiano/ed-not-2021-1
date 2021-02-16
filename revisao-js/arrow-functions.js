//Função que eleva um numero ao quadrado
// Se precisar disso em uma situação real, use Math.pow() ou
// o operador **

function quadrado(n){
    return n * n
}
console.log(quadrado(9))

// Características da função acima:
// 1) Apenas um parametro
// 2) Apenas uma linha de codigo, com return
// 3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// Transformando em arrow function
// a) Não precisa em parenteses envolvendo o parâmetro
// b) A palavra function é substituído pelo sinal =>, DEPOIS do parametro
// c) Não são necessárias as chaes com a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))