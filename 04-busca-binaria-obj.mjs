let comps;
function buscaBinaria(vetor,fnComp){
    comps = 0
    let ini = 0
    let fim = vetor.length - 1
    let meio 
      while (fim>=ini){
           meio = Math.floor((fim + ini)/2) //Math.floor() arrendonda para baixo
          
          switch(fnComp(vetor[meio])){
              case 0: // Achou o valor
                comps++
                return meio
             
              case 1: // valor de busca eh MAIOR
                   comps +=2
                   ini = meio + 1
                   break
              default: // valor de busca é MENOR
                comps +=2
                fim = meio - 1
            }
           
        }
      return -1 // Nao existe
  }

// A função de comparação para a busca binária precisa retornar de um de tres valores:
// retorna 0: o valor de busca e o valor no objeto são IGUAIS
// retorna -1: o valor de busca é MENOR que o valor de objeto
// retorno 1: o valor de busca é MAIOR que o valor no objeto

 console.time('Buscando TURIBIO')
   console.log(buscaBinaria(objNomes, (obj, busca = 'TURIBIO') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}),{comps})
console.timeEnd('Buscando TURIBIO')
