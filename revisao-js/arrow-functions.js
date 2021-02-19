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

//Funcao com mais de um parametro
function potencia(b,e) {//b = base, e = expoente
    return b ** e
}
console.log(potencia(2,8))

//funcao equivalente no formato arrow function

// Quando temos mais de uma parametro, os parenteses em volta dos argumentos voltam a ser obrigatorios 

let potencia2 = (b,e) => b ** e
console.log(potencia2(2,8))

// funcao sem parametro
function megasena(){
    // Esta funcao retorna um numero aleatorio entre 1 e 60
    // math.random() -> retorna um numero aleatorio entre 0(inclusive) e 1 (exclusive)
    // * 60 -> ajusta a faixa de valores entre 0 e 59
    // + 1 -> ajusta a faixa de valores entre 1 e 60
    // Math.floor -> arrendondar para o menor inteiro (tirar as casas decimais)
    return Math.floor(Math.random() * 60 + 1)
}

console.log (megasena(), megasena(),  megasena(),  megasena(),  megasena())

// Quando a função nao tem argumentos, na arrow function é necessário deixar um par de parenteses vazios para marcar seu lugar

const megasena2 = () => Math.floor(Math. random()*60 + 1)

console.log (megasena(), megasena(),  megasena(),  megasena(),  megasena())

// funcao com mais de uma linha de codigo no corpo

function somaVet(vet) {
    let soma = 0
    for (let n of vet) soma +=n
    return soma
}

console.log (somaVet([12, 42, -11, 20, 9, 16]))

const somaVet2 = vet => {
     let soma = 0
     for (let n of vet) soma +=n
     return soma
}

console.log (somaVet([12, 42, -11, 20, 9, 16]))

// conclusao: arrow functions foram concebidas para facilitar a escrita de funcões de apenas uma linha, embora também possam ser usadas para funcoes de multiplas linhas