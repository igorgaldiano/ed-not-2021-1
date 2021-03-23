/*  Escolhe um dos elementos do vetor para ser o pivo (na nossa implementação, o ultimo elemento) e, na primeira passada, divide o vetor, a apartir da posicao final do vetor, um em um subvetor a esquerda contendo apenas valores menores que o pivo e outro subetor à direita , que contem apenas valores maiores que o pivo

Em seguida, recursivamente, repete o processo em cada um dos subvetores ate que todo o vetor seja ordenado
*/
let trocas, comps, pass
function quickSort(vetor, ini=0, fim=vetor.length - 1){
  if(fim>ini){
      pass++
        const pivot = fim
        let div = ini - 1
        //Loop for vai ate a PENULTIMA posição
        for (let i = ini; i< fim; i++){
            if(vetor[i] < vetor[pivot]){
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
        if (vetor[pivot] < vetor[div]){
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }

        comps++

        //Ordena o subvetor à esquerda do pivô
        quickSort (vetor, ini,div-1)

        //Ordena o subvetor à direita do pivô
        quickSort(vetor,div+1, fim)
   }
}
trocas = 0, comps = 0, pass = 0

//let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

let nums = [9,8,7,6,5,4,3,2,1,0]
//let nums = [0,1,2,3,4,5,6,7,8,9]
//quickSort(nums)
//console.log(nums)
//console.log({trocas, comps, pass})

import {nomes} from './includes/100-mil-nomes.mjs'

quickSort(nums)
console.log(nums)
console.log({trocas,pass,comps})

console.log('Antes:', nomes)
console.time('Ordenando nomes...')
quickSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Depois:', nomes)
console.log({trocas,pass,comps, memoria})