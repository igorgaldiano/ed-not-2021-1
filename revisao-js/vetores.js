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

//Inserindo no final do vetor
frutas.push('amora') //Pode inserir mais de um elemento ao mesmo tempo
// p. ex.:
// frutas.push('amora','jaca)
console.log(frutas)

//Inserir no inicio do vetor
frutas.unshift('jabuticaba') // Também pode inserir mais de um elemento ao mesmo tempo, p.ex: frutas.unshift('jabutica','mexerica')
console.log(frutas)

//Inserção no meio do vetor
// Parâmetros do splice() para inserção
// 1º -> posição para inserção
// 2º -> nº de elementos a serem excluídos (para inserção, usa-se 0)
// 3º em diante -> elemento(s) que será(ão) inserido(s)

frutas.splice(2,1,'pêssego')
//tambem funciona para inserir varios elementos ao mesmo tempo, p.ex
//frutas.splice(2,0,'pessego','jaca','nectarina)
console.log(frutas)

//USando splice() para substituição 
//Parametros:
// 1º -> posição para substituição
// 2º -> quantida de elementos que serao excluidos (para substituição)
// 3º -> o elemento que será incluido no lugar

frutas.splice(4,1,'amora') // substituição na 5ª posição
console.log(frutas)

frutas.splice(3,0,'pera')
console.log(frutas)

//inserção multipla com splice()
frutas.splice(1,0,'nectarina', 'jaca')
console.table(frutas)


/*****************************
 * Percursos de Vetor
 */

 console.log('-------------------------------------------')

 // 1) Percurso com for tradicional
 // a) A contagem começa em zero (0 - primeiro elemento)
 // b) Ocorre enquanto o contador for MENOR que o numero de elementos do vetor
 // c) length termina com TH (lingua mole)
 // d) É o método mais flexivel pois, se necessário, é possível fazer um percurso parcial (começar em algum elemento que não é o primeiro e terminar antes do final)
 for (let i = 0; i < frutas.length; i++){
     console.log(i,frutas[i])
 }
 
 console.log('-------------------------------------------')
 //2) for tradicional, em ordem inversa
 // a) O contador inicia-se em length-1
 // b) A condição é contador MAIOR OU IGUAL a zero (0 - primeiro elemento)
 for(let i = frutas.length - 1; i>=0; i--){
  console.log(i,frutas[i])
 }
  


console.log('-------------------------------------------')

//3) Percurso com for..of
// a) Sempre percorre o vetor inteiro, na ordem natural
// variaveis:
// f-> variavel que recorrerá cada elemento do vetor
// valido de variavel)
// frutas -> é o vetor a ser percorrido

for(let f of frutas){
    console.log(f)
}


console.log('-------------------------------------------')
// 4) Percurso com forEach()
// forEach() recebe como parâmetro uma função que recebe como parametro cada elemento do vetor
//cada elemento do vetor
// O nome do parâmetro da função pode ser qualquer nome válido de identificação
frutas.forEach(function(elemento){
    console.log(elemento)
})

console.log('---------------------------------')