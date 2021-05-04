export class Queue{

    #data
    #head
    #tail

    constructor(){
        this.#data = {} // Objeto vazio (armazenamento)
        this.#head = 0  //Inicio da fila
        this.#tail = -1 //final da fila
       // console.log(this.#data, this.#head, this.#tail)
    }

    enqueue(val){
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data,this.#head, this.#tail)
    }

    dequeue(){
        // Se a fila já estiver vazia, retorna undefined para não
        //afetar o posicionamento de #head

        let temp = this.#data[this.#head] // salva o elemento no inicio da fila
        delete this.#data[this.#head
        ] //aoaga o elemento no inicio da fila
        this.#head++
       // console.log(this.#data,this.#head, this.#tail)
        return temp
    }

    peek(){
        return this.#data[this.#head]
    }


    get empty(){
        // a fila está vazia quando 
        
        return this.#tail - this.#head + 1 === 0
    }
}

/*
let fila = new Queue()

fila.enqueue('Leila')
fila.enqueue('Adalberto')
fila.enqueue('Cleber')
fila.enqueue('Paula')

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue

*/