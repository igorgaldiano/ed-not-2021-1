/*
ESTRUTURA DE DADOS LISTA ENCADEADA
- A lista encadeada é uma estrutura de dados formada por unidades
de informação chamadas nodos ou nós.
- Cada nodo da lista encadeada tem duas partes: uma, que armazena a
informação e outra que guarda o endereço do próximo nodo da sequência
- A qualquer momento, temos um conhecimento apenas limitado de onde
se encontram todos os nodos da lista. Sabemos apenas onde está o
primeiro e o último nodo da sequência. Os nodos intermediários precisam
ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node{
    constructor(val){
        this.data = val // Armazenamento de valor
        this.next = null //Pornteiro para o proximo nodo
    }

}

export class LinkedList{
    #head  //Nodo inicial da lista
    #tail   // Nodo final da lista
    #count  //Quantidade de nodos na lista

    constructor(){
        this.#head = null //Não tem nada no inicio
        this.#tail = null //Não tem nada no fim
        this.#count = 0

        //console.log({head:this.#head,tail:this.#tail, count:this.#count})
    }

    get empty(){
        return this. #count === 0
    }

    //Inserção em uma posição arbitrária
    insert(pos,val){

        // Cria no nodo para abrigar o valor e o endereço
        // do proximo nodo
        let inserted = new Node(val)

        // 1º caso: inserção em lista vazia
        if(this.empty){
            this.#head = inserted
            this.#tail = inserted
        }

        //2º caso: inserção no inicio na lista

        else if(pos === 0){
            // O sucessor do nodo inseriro é o atual head
            inserted.next = this.#head
            //O novo head passa a ser o nodo inserido
            this.#head = inserted
        }

         //3º caso: inserção no final da lista
          else if (pos>=this.#count){
            //O sucessor do tail passa a ser o nodo inserido
            this.#tail.next = inserted
            // O nodo inserido passa a ser o novo tail
            this.#tail = inserted
        }
        
          //4º caso: posição intermediária

          else{

            //VisuAlgo - visualising data structu

            /* vertex pre = head
            for (k=0; k<i-1;k++)
            pre=pre.next
            Vertex aft = pre.next
            Vertex vtx = new Vertex(v)
            vtx.next = aft
            pre.next = vtx

            */

            let before = this.#head
            //Percorre a lista ate encontrar o nodo da posição ANTERIOR à de inserção
            for(let i=0; i<pos-1;i++) before = before.next
            //Nodo que irá ficar DEPOIS do inserido

            let after = before.next
            // O proprio do nodo inserido passa a ser o nodo after
             inserted.next = after
             // O proximo do nodo before passa a ser o nodo inserido
             before.next = inserted
          }

       this.#count++

     //  console.log({head:this.#head, tail:this.#tail, count:this.#count})
   }

   insertHead(val){
       this.insert(0,val)
   }

   insertTail(val){
       this.insert(this.#count,val)
   }

   remove(pos){

       // 1º caso: a lista está vazia ou a posição informada é menor que zero ou maior que count -1
        if(this.empty || pos < 0 || pos > this.#count - 1) return undefined

        let removed
        
        // 2º caso: remoção do início da lista
        if(pos === 0){
            removed = this.#head
            this.#head = this.#head.next // Ou: removed.next

            // Atualizando o #tail em caso de remoção do último nodo
        }
             // 3º caso: remoção do fim da lista
           if(this.#count === 1){ this.#tail = this.#head.next 

           }
             // 3º caso: remoção do fim da lista  
             else {
                 let before = this.#head
                 for(let i=0;i<pos-1;i++)
                    before=before.next
                    removed=before.next
                    let after=removed.next
                    before.next=after

                    //Atualizando o #tail no caso de remoção do último nodo
                    if(pos===this.#count-1)this.#tail=before

              }
          
               this.#count--

               return removed.data
        
         }

         removeHead(){
             return this.remove(0)

         }

         // Retorna a posição de um valor dentro da lista, ou -1 caso não exista

         IndexOf(val){
               // 1º caso: lista vazia
               if(this.empty) return -1

               //2ºcaso: o valor está no inicio da lista
               if(this.#head.data ===val) return 0

               //3º caso: demais posições
               let search = this.#head
               for(let i=0;i<this.#count;i++){
                   if (search.data===val)return i
               }

               //Acabou o loop sem retornar, é porque não existe
               return -1

         }




   print(){
       // partindo da primeira posicao de um nodo para o nodo seguinte
       let output = '('
       let node = this.#head
       for(let i = 0; i < this.#count; i++){
           output += `[${i}]: ${node.data}`
           if (node.next) output += '->'
           node = node.next //node é o proximo dele
       }

       return output + `) count: ${this.#count}`


   }
      
        
}      
    let lista = new LinkedList()
    console.log(lista.print())
    
    lista.insert(0,76)
    console.log(lista.print())

    lista.insert(0,22)
    console.log(lista.print())

    lista.insert(2,8)
    console.log(lista.print())

    lista.insert(1,47)
    console.log(lista.print())

    lista.insert(2,29)
    console.log(lista.print())

    lista.insertHead(51)
    console.log(lista.print())

    lista.insertTail(14)
    console.log(lista.print())

    let removed =lista.remove(0)
    console.log({removed})
    console.log(lista.print())

    removed =lista.remove(5)
    console.log({removed})
    console.log(lista.print())

    lista.insertTail(33)
    console.log(lista.print())

