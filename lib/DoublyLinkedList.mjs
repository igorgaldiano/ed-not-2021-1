/*
ESTRUTURA DE DADOS LISTA DUPLAMENTE ENCADEADA
- A lista encadeada é uma estrutura de dados formada por unidades
de informação chamadas nodos ou nós.
- Cada nodo da lista encadeada tem TRÊS partes: uma, que armazena a
informação, a segunda, que guarda o endereço do nodo anteior; e a terceira que guarda o endereço do próximo nodo da sequência
- A qualquer momento, temos um conhecimento apenas limitado de onde
se encontram todos os nodos da lista. Sabemos apenas onde está o
primeiro e o último nodo da sequência. Os nodos intermediários precisam
ser encontrados partindo-se do primeiro OU do ultimo nodo e percorrendo a sequência
*/

class Node{
    constructor(val){
        this.data=val // Valor armazenado
        this.prev = null // Ponteiro para o nodo anteior
        this.next = null // Ponteiro para o nodo seguinte
    }

}

export class DoublyLinkedList{
    #head // Primeiro nodo
    #tail // Ultimo nodo
    #count // Quantida de nodos

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

   
    //Dada uma posição, retorna o nodo naquela posição
    #findNode(pos){
        let node = null

        //Posição se encontra na primeira metada da lista
        if(pos < this.#count / 2){
            node = this.#head
            let i
            for(; i < pos;i++) node=node.next
                
        }  //Posição se encontra na segunda metade da lista
        else {
            node = this.#tail
            for(let i= this.#count - 1; i > pos; i--)
                node=node.prev
        }

        return node
    }

    get empty(){
        return this.#count === 0
    }

    insert(pos, val){
        const node = new Node(val)

        // 1º caso: lista vazia
        if(this.empty){
            this.#head = node
            this.#tail = node
        }
        
        // 2º caso: inserção no inicio da lista

        else if(pos === 0) {
            node.next = this.#head
            this.#head.prev = node.next
            this.#head = node
        }

        //3º caso: inserção no final da lista
        else if(pos >=this.#count) {
            this.#tail.next = node
            node.prev = this.#tail
            this.#tail= node
        }

         //4º caso: inserção em posição intermediaria

         else {
             //Encontra o nodo que ocupa atualmente a posição de inserção
             let nodePos = this.#findNode(pos)
             let before = nodePos.prev
             // O nodo anterior à posição passa a apontar para o novo nodo
             before.next = node
             // O novo node aponta de volta para o anterior
             node.prev = before
             //O novo nodo aponta de volta para o anterior
             node.next = nodePos
             // O antigo nodo da posição aponta de volta para o novo nodo
             nodePos.prev = node
        }
        this.#count++
    }

    insertHead(val){ //Atalho para inserção no inicio
        this.insert(0,val)
    }

    insertTail(val){ //Atalho para inserção no final
        this.insert(this.#count,val)
    }

    remove(pos){
        //1º caso: lista vazia ou posicao fora dos limites
        if(this.empty || pos < 0 || pos.#count - 1) return undefined

        let removed
        //2º caso: remoção do inicio
        if(pos === 0){
            removed = this.#head
            this.#head = removed.next
            //Se existir um nodo valido como head
            if (this.#head) this.#head.prev = null

            //Remocao do ultimo nodo:head é null, tail tem quer ser também
            if(this.#count === 1) this.#tail = null
        }
        //3º caso: remoção no final
        else if(pos === this.#count -1){
            removed = this.#tail
            this.#tail = removed.prev
            // Se existir um nodo válido como tail, ele não tera sucessor
            if (this.#tail) this.#tail.next = null
            //Remocao do ultimo nodo: tail é null, head tem quer ser tambem
            if (this.#count === 1) this.#head = null
        }
        this.#count--
        return removed.data
    }

    print(){
        // partindo da primeira posicao de um nodo para o nodo seguinte
        let output = '('
        let node = this.#head
        for(let i = 0; i < this.#count; i++){
            output += `[${i}]: ${node.data}`
            if (node.next) output += '<->'
            node = node.next //node é o proximo dele
        }
 
        return output + `) count: ${this.#count}`
    }

    printReverse(){
        // partindo da primeira posicao de um nodo para o nodo seguinte
        let output = '('
        let node = this.#tail
        for(let i = this.#count -1; i >= 0; i--){
            output += `[${i}]: ${node.data}`
            if (node.prev) output += '<->'
            node = node.prev //node é o proximo dele
        }
 
        return output + `) count: ${this.#count}`
    }
}

const lista = new DoublyLinkedList()
console.log(lista.print())

lista.insert(0, 'Odorico') // Primeiro nod(lista vazia)
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Gercina') //Inserção no final
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(0, 'Temisctocles') //inserçao no inicio
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Deusdete') //inserçao na intermediaria
console.log(lista.print())
console.log(lista.printReverse())
