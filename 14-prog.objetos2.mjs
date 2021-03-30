/*
    Uma classe pode ser comparada a uma forma de bolo. Assim como esse utensilio, a classe empresta algumas características aos objetos que serão criados a partir dela, embora outras características dos objetos possam variar.

*/

// Por conveção, os nomes de classes em JS se iniciam com letras Maiúsculas

class FormaGeometrica{
    
    // Deckaracao dos atribuotos  privados
    #base
    #altura 
    #tipo


    // Uma classe pode conter funções. Mas, quando funções fazem parte de uma classe
    // elas são denominadas MÉTODOS.

    //Um método especial é constructor(). Ele é chamado toda vez que se vai criar um novo objeto a partir da classe. No contructor(), podem ser feitas validações que, ao falhar, geram um Error. A existência de um ou mais Errors impede que o objeto seja criado.

    constructor(base, altura, tipo){

        //base deve ser numérica e seu valor maior que zero
        if(isNaN(base) || base<=0)
            throw new Error(' A base deve ser numérica e seu valor maior que zero.')
        
            //altura deve ser numérica e seu maior valor que zero

        if (isNaN(altura) || altura <=0)
             throw new Error(' A base deve ser numérica e seu valor maior que zero.')

            //if (tipo === 'Q' && tipo !== 'T' && tipo !== 'E')

            if(! ['Q', 'T', 'E'].includes(tipo))
                throw new Error(' O tipo deve ser Q, T ou E.')

        // Se chegamos até aqui, podemos prosseguir com a criação do objeto

        // No caso atual, precisamos armazenar as informações de base, altura e tipo em algum lugar, de modo que ao sair do constructor(), essas infomrações não se percam.

        // Para tanto, armazenaremos essas informações em variáveis que pertencerão ao escopo do objeto criado a partir da classe. Essas variaveis especiais são denominadas ATRIBUTOS e diferenciam-se das variáveis comuns pela presença do prefixo this.

        //atributo  recebe valor do parametro de mesmo nome

        /*Atributos publicos  */
        //    Atribuot sprivasdos so podem aser acessados e mofdificados DENTRO da classe 

            this.#base=base
            this.#altura=altura
            this.#tipo=tipo       
            
        
        this.base = base
        this.altura = altura
        this.tipo = tipo

        console.log('INterno:' , this )
      }
}

//Criacao de alguns objetos a partir da classe

let forma1,forma2, forma3
forma1 = new FormaGeometrica(8,4,'Q')
console.log(forma1)

try{
    //tenta executar as linhas contidas
    // Se acontecer alguma dexceção no bloco try, a execução é desviada para o bloco  catch
    forma3= new FormaGeometrica( 'cebola', 'alho' , 'x')
  console.log(forma3)
}
catch(erro){
    // O bloco catch() recebe o erro que fooi gerado no bloco try
    // tratamento de exceção. Nesse caso, simplesmente exibiremos a mensagem de erro.
    console.log('ERRO:'+ erro.message)
}

 forma2 = new FormaGeometrica( 2, 0.5, 'T'  )
 console.log('Externo:', forma2)