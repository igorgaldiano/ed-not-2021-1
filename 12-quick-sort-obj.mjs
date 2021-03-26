let trocas, comps, pass
function quickSort(vetor, fnComp, ini=0, fim=vetor.length - 1){
  if(fim>ini){ // Condição de saída das chamadas recursivas
      pass++
        const pivot = fim
        let div = ini - 1
        //Loop for vai ate a PENULTIMA posição
        for (let i = ini; i< fim; i++){
          //  if(vetor[i] < vetor[pivot]){
          if(fnComp(vetor[pivot], vetor[i])){  
          comps++
                div++
                if(i!=div){
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                    trocas++
                }
                
            }
        }
        div++
        //Colocamos o pivo em seu lugar definitivo
       // if (vetor[pivot] < vetor[div]){
        if(fnComp(vetor[div], vetor[pivot])){      
       [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }

        comps++

        //Ordena o subvetor à esquerda do pivô
        quickSort (vetor, fnComp, ini,div-1)

        //Ordena o subvetor à direita do pivô
        quickSort(vetor,fnComp, div+1, fim)
   }
}

import {candidatos} from './includes/candidatos-2018.mjs'
trocas = 0, pass = 0, comps = 0


console.time('Ordenando candidatos...')
//Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
//quickSort(candidatos, (obj1,obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

//Ordenação por SG_UE, depois por DS_CARGO e, finalmente, por NR_CANDIDATO



quickSort(candidatos )
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({trocas,pass,comps, memoria})

