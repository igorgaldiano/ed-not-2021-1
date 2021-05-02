/*
    Uma classe pode ser comparada a uma forma de bolo. Assim como esse utensílio,
    a classe empresta algumas características aos objetos que serão criados a partir
    dela, embora outras características dos objetos possam variar.
*/

// Por convenção, nomes de classes em JS se iniciam com Letras Maiúsculas
class FormaGeometrica {

   // Declaração dos atributos privados (necessário declará-los antes do constructor)
        #base
        #altura
        #tipo

  // Uma classe pode conter funções. Mas, quando funções fazem parte de uma classe, elas são denominadas MÉTODOS.

  // Um método especial é o constructor(). Ele é chamado toda vez que se vai criar um novo objeto a partir da classe. No constructor(), podem ser feitas validações que, ao falhar, geram um Error. A existência de um ou mais Errors impede que o objeto seja criado.

  constructor(base, altura, tipo) {
    
    /*
    // validações 
    // base deve ser numérica e seu valor maior que zero

    if (isNaN(base)|| base<=0)
        throw new Error('A base deve ser numérica e seu valor maior que zero.')

    //altura deve ser numérica e seu valor maior que zero
    if (isNaN(altura)|| altura<=0)
    throw new Error('A base deve ser numérica e seu valor maior que zero.')   

    //if(tipo !=='Q' && tipo !== 'T' && tipo !== 'E')
    if(!['Q', 'T', 'E'].includes(tipo))
        throw new Error('O tipo deve ser Q,T ou E.')

        */

        // Invocar os setters das propriedades

        this.base = base
        this.altura = altura
        this.tipo = tipo

    // Se chegamos ate aqui, podemos prosseguir com a criação do objeto.

    //No caso atual, precisamos armazenar as informações da base, altura e tipo em algum lugar, de modo que, ao sair do constructor(), essas informações não se percam

    //Para tanto, armazenaremos essas informações em variaveis que pertencerão ao escopo do objeto criado a partir da classe. Essas variaveis especiais sao denominadas ATRIBUTOS e diferenciam-se das variáveis comuns pela presença do prefixo this.

    //atributo recebe valor do parametro do mesmo nome
    // ATRIBUTOS PUBLICOS: podem ser acessados e modificados também FORA da classe

    /*
    this.base = base
    this.altura = altura
    this.tipo = tipo

      //this é a variavel do objeto da vez

    */
    /*
    //ATRIBUTOS PRIVADOS: só podem ser acessados e modificados DENTRO da classe(uso da cerquilha - #)

    this.#base = base
    this.#altura = altura
    this.#tipo = tipo

    */
    
   // Selando objeto. Isso impede que novos atributos publicos 
   // sejam adicionados ao objeto após a sua criação

   Object.seal(this)
  
 }

    /*
    getters: métodos especiais que permitem expor o valor dos atributos privados
    de forma SOMENTE-LEITURA, sem permitir a sua modificação.

    */
    
    get base(){
        return this.#base
    }

    get altura(){
        return this.#altura
    }

    get tipo(){
        return this.#tipo
    }

    /********************************************************
    * PROPRIEDADE CALCULADA NAO RETORNA UM VALOR ARMAZENADO EM UM 
    * ATRIBUTO PRIVADO. EM VEZ DISSO, CALCULA 'AO VIVO UM VALOR E 
    * O RETORNA
    */

    get area(){
        switch(this.tipo){
            case 'Q':
                return this.base * this.altura
        
            case 'T':
                return this.base * forma.altura / 2
    
           default:
                 return (this.base /2) * (this.altura / 2) * Math.PI
    
            
        } 
    }  

    /*
     setters: permitem que o mundo externo possa alterar o valor de
    atributos privados, caso o novo valor esteja de acordo com as
    regras de negócio.

    */

    set base(valor){
        //base deve ser numérica e seu valor maior que zero
        if(isNaN(valor) || valor<=0)
        throw new Error ('A base deve ser numérica e seu valor maior que zero.')

        this.#base=valor // O atributo #base recebe o novo valor validado
    }

    set altura(valor){
        if(isNaN(valor) || valor<=0)
        throw new Error ('A altura deve ser numérica e seu valor maior que zero.')

        this.#altura=valor

    }

    set tipo(valor){
        //if(tipo !=='Q' && tipo !== 'T' && tipo !== 'E')
    if(!['Q', 'T', 'E'].includes(valor))
    throw new Error('O tipo deve ser Q,T ou E.')
        this.#tipo=valor

    }

    //Funcoes, dentro de classe, passam a ser denominadas METODOS e perdem a palavra funcao

    calcularArea(){
        switch(this.tipo){
            case 'Q':
                return this.base * this.altura
        
            case 'T':
                return this.base * forma.altura / 2
    
           default:
                 return (this.base /2) * (this.altura / 2) * Math.PI
    
            
        } 
    }  

    
}



let forma1,forma2, forma3

//Criacao de alguns objetos a partir da classe
try{
forma1 = new FormaGeometrica(8,4,'Q')
console.log (forma1)
// Resultado: FormaGeometrica { base: 8, altura: 4, tipo: 'Q' }
}

catch(erro){
console.log('Erro:', erro.message) 
}


try{  // Tenta executar as linhas contidas
     // Se acontecer alguma exceção no bloco try, a execução é desviada para o bloco catch
  forma3= new FormaGeometrica('Cebola','Alho', 'X')
  console.log (forma3)

}

catch(erro){
 // O bloco catch() recebe o erro que foi gerado no bloco try
  // Tratamento de exceção. Neste caso, simplesmente exibiremos a mensagem de erro

    console.log('Erro:', erro.message)

}

try{
forma2 = new FormaGeometrica(2,0.5,'Q')
console.log ('Externo:',forma2)
}

catch(erro){
    console.log('Erro:', erro.message)
}

//Alterando o valor de um atributo de objeto DEPOIS de sua criação
//forma1.base='abobrinha'
forma1.base = 10 //Funcionar
forma1.altura= 8.5
console.log('forma1',{
    base:forma1.base, //acesso ao getter base
    altura: forma1.altura, //acesso ao getter altura
    tipo:forma1.tipo, //acesso ao getter tipo
})

//forma1.base = 'fadsfafa'//Nao funcionar

//let x = new FormaGeometrica(3,4,'P')

console.log('calcularArea() de forma1(método):',forma1.calcularArea())
console.log('area de forma1 (propriedade calculada)',forma1.area)


