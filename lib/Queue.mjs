/*
    ESTRUTURA DE DADOS FILA

    -Fila é uma lista linear de acesso restrito, que permite apenas operações de enfileramento (enqueue) e desenfileramento(dequeue), ambos ocorrendo no final da estrutura e a segunda no inicio da estrutura.
    -Como consequencia, a pilha funciona pelo principio FIFO(First in, First Out - o primeiro a entrar, primeiro a sair).
    -A pricipal aplicação das pilhas são tarefas que envolvem processamento de tarefas por ordem de chegada.
*/

export class Queue{
    #data

    constructor(){
        this.#data = [] //Vetor vazio
    }

    //Inserção na fila (enfileiramento)

    enqueue(val){
        this.#data.push(val)
        //insere no final da fila
    }

    //Remocao da fila (desenfileramento)
    dequeue(){
        return this.#data.shift()
        // remoção do inicio da filta
    }

    //"Espiadinha (no inicio)"
    peek(){
        return this.#data[0]
        // o primeiro elemento sempre estará na posição 0 (1º 
       // posição no vetor)
    }

    get empty(){
        return this.#data.length === 0 //caso acabar a filta
    }

    print(){
     return JSON.stringify(this.#data)
        // transformar o vetor em uma string com seus valores dentro, para ser visto por exemplo no console.log
    }
}

