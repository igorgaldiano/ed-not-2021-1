/*
    ESTRUTURA DE DADOS PILHA 

    -Pilha é uma lista linear de acesso restrito, que permite apenas operações de inserção (push) e retirada(pop), ambos ocorrendo no final da estrutura.
    -Como consequencia, a pilha funciona pelo principio LIFO (Last in, First Out - o ultimo a entrar, primeiro a sair).
    -A pricipal aplicação das pilhas são tarefas que envolvem a inversão de uma sequencia de dados. 

*/

export class Stack { //representa a minha pilha

   
   #data

    constructor(){
        //vai incializar um vetor vazio
        
        this.#data = [] //criar um vetor privado (não vai pode ser visto do lado de fora, apenas do lado de dentro)
    }
        //INserção
       push(val){
           this.#data.push(val)
       }

       //Retirada
       pop(){
           return this.#data.pop()
       }
        
       // "Espiadinha": retorna o valor que está no topo da pilha, mas sem retirá-lo de lá

       peek(){
           return this.#data [this.#data.length - 1]
       }


        // A pilha está vazia (true/false) - PROPRIEDADE CALCULADA (só getter)

        get empty(){
            return this.#data.length === 0
        }

        print(){
            return JSON.stringify(this.#data)
        }
    }

    /*let pilha = new Stack()
    pilha.push(5)
    pilha.push(6)
    pilha.push(0)
    pilha.push(2)
    console.log('Peek:', pilha.peek())
    console.log('Peek:', pilha.peek())
    console.log(pilha.empty)
    console.log(pilha.print()) */

