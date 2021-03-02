

function buscaBinaria(vetor,valorBusca){
    let ini = 0
    let fim = vetor.length - 1
    let meio = Math.floor((fim + ini)/2) //Math.floor() arrendonda para baixo
      while (fim>=ini){
          if (vetor[meio] === valorBusca) return meio
          else if (valorBusca> vetor[meio]) ini = meio +1
          else fim = meio -1

      }
      return -1 // Nao existe
}