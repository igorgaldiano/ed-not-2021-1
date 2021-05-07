export class Deque {

    #data // Armazenamento
    #head // Inicio do deque
    #tail // Final do deque

    constructor(){
        this.#data = {} // Objeto vazio
        //armazenamento
        this.#head = 0  
        this.#tail =-1
        console.log(this.#data, this.#head, this.#tail)
    }

    insertFront(val){
        this.#head--
        this.#data[this.#head] = val
        console.log(this.#data, this.#head, this.#tail)
    }

    insertBack(val){
        this.#tail++
        this.#data[this.#tail] = val
        console.log(this.#data, this.#head, this.#tail)
    }

    get empty(){
        return this.#tail - this.#head + 1 === 0
    }

    removeFront(){
        if(this.empty) return undefined
        let temp = this.#data[this.#head]
        delete this.#data[this.#head]
        this.#head++
        console.log(this.#data,this.#head, this.#tail)
        return temp
    }

    removeBack(){
        if(this.empty) return undefined
        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail]
        this.#tail--
        console.log(this.#data,this.#head, this.#tail)
        return temp
    }

    peekFront(){
        return this.#data[this.#head]
    }

    //o head vai dizer quem é o primeiro da fila

    peekBack(){
        return this.#data[this.#tail]
    }

    print(){
        return JSON.stringify(this.#data)
    }


}

// 
let deque = new Deque()
deque.insertBack('Cascao')
deque.insertBack('Cebolinha')
deque.insertBack('Magali')
deque.insertFront('Monica')
deque.insertFront('Chico Bento')

//A monica apesar ta na posicao -1 (a fila ta começando na -1 e a Magali na ultima posicao)

//insertFront = "fura fila"
//removeBack = "desistencia"

let atendido = deque.removeFront()
console.log({atendido})




let primeiro = deque.peekFront()
let ultimo = deque.peekBack()
deque.insertBack('Franjinha')

console.log({primeiro,ultimo})