 let trocas,pass, comps
function selectionSort(vetor, fnComp){
   trocas = 0, pass = 0, comps = 0
   function encontrarMenor(inicio){
       let menor=inicio
       //Este loop vai ate a ultima posicao
       for (let j=inicio+1;j<vetor.length;j++){
           //if(vetor[j] < vetor[menor]) menor = j
           //Na passagem para função de comparacao, a ordem dos objetos precisaser invertidos
           if(fnComp(vetor[menor],vetor[j])) menor=j
           comps++
        }
       return menor
   }
    // Percurso do vetor até a penultima posição 
    for (let i=0; i<=vetor.length - 2; i++){
       pass++
        let menor = encontrarMenor(i+1)

         //if(vetor[menor] < vetor[i] {
             //Parametros em ordem invertida
         
            if(fnComp(vetor[menor],vetor[i])){
              [vetor[menor],vetor[i]] = [vetor[i],vetor[menor]]
              trocas++
          }
          comps++
    }
}

//Funcao de comparacao retorna true caso o PRIMEIRO objeto seja MAIOR que o SEGUNDO

import {candidatos} from './includes/candidatos-2018.mjs'


console.log('Antes', candidatos)
console.time('Ordenando candidatos...')
//Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
selectionSort(candidatos, (obj1,obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({trocas,pass,comps})