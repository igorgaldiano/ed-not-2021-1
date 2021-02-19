// Objetos sao estruturas que permitem armazenar diversos valores em uma variavel, permitindo acessa-los por meio de um nome

// Criação de um objeto vazio

let vazio1 = {} // forma 'moderna'
let vazio2 = new Object() // forma 'tradicional'

// criando um objeto já com dados 
let pessoa = {
    nome: 'Orkutilson de Oliveira',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
  //  gostos: ['jogos', 'doces', 'dormir'] // Vetor em uma posição de objeto

  // Nome da propriedade pode ter espaços ou acento.
  // Nesse caso, o nome da propriedade precisa estar entra aspas
  'cidade de origem': 'Franca/SP',
   gostos: ['jogos', 'doces', 'dormir'] // Vetor em uma posicao de objeto
}

console.log(pessoa)
console.table(pessoa)

// Exibindo apenas o valor de uma propriedade
console.log (pessoa.nome)
console.log(pessoa.ocupacao)


// Quando o nome da propriedade tem espaço ou acento, não é possivel usar a sintaxe de ponto. É necessário usar a sintaxe de colchetes;

console.log(pessoa['cidade de origem'])
console.log(pessoa.gostos)

// A sintaxe dos colchotes SEMPRE funciona, mesmo se o nome da propriedade for uma unica palavra sem acento

console.log(pessoa ['nome'])
console.log(pessoa['gostos'][1]) // mostrando só o 2º gosto

// Outra consequencia da sintaxe dos colchetes é a possibilidade de usar nomes de propriedades que estao dentro de variaveis

let x = 'sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

// Criando uma nova propriedade para um objeto já existente basta atribuir um valor a um nome de propriedade ainda nao existente

pessoa.email = 'orkutilson@gmail.com'
pessoa.celular = '(16) 98765-4321'
console.table(pessoa)

// Criando um objeto vazio e só depois adicionando propriedades

// Criando um objeto vazio e só depois adicionando propriedades

let carro ={}
carro.marca = 'Volkwagen'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combustível'] = 'gasolina'
carro.cor = 'bege'

console.table(carro)

// Excluindo uma propriedade de um objeto

delete carro.ano
console.table (carro)

//

