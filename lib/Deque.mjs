/**************************************
 *  ESTRUTURA DE DADOS DEQUE
 *  - Deque = Double-Ended Queue (fila de duas pontas)
 *  - Deque é uma lista linear de acesso        restrito, que permite apenas operações de enfileramento (insertFront/insertBack) e desenfileramento(removeFront/removeBack), acontecendo em qualquer uma das estremidades da estrutura.ambos ocorrendo no final da estrutura e a segunda no inicio da estrutura.
    -Como consequencia, a deque NÃO SEGUE o principio FIFO(First in, First Out - o primeiro a entrar, primeiro a sair).
    -A pricipal aplicação das DEQUES são situações em que filas precisam aceitar a inserção de itens prioritários e a desistencia do ultimo item.
  */


    export class Deque {

        #data

        constructor(){
            this.#data = []
        }

        insertFront(val){
            this.#data.unshift(val) 
            //coloca algo no vetor
        }

        insertBack(val){
            this.#data.push(val)
            //adiciona no ultimo elemento do vetor
        }

        get empty(){
            return this.#data.lenght === 0
        }

        removeFront(){
            return this.#data.shift()
            // retira algo da estrutura do vetor
        }

        removeBack(){
            return this.#data.pop()
        }

        peekFront(){
            return this.#data[0]
        }

        peekBack(){
            return this.#data[this.#data.length-1]
        }

        print(){
            return JSON.stringify(this.#data)
               // transformar o vetor em uma string com seus valores dentro, para ser visto por exemplo no console.log
        }
    }