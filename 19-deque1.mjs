import {Deque} from './lib/Deque.mjs'

let deque = new Deque()

deque.insertBack('Margarida')
deque.insertBack('Pateta')
deque.insertBack ('Gastao')
deque.insertBack('Donald')

console.log(deque.print())

deque.insertFront('Tio Patinhas')
console.log(deque.print())

deque.insertFront('Minnie')
console.log(deque.print())

let primeiro = deque.peekFront()
let ultimo = deque.peekBack()
console.log({primeiro, ultimo})
console.log(deque.print())

let atendido = deque.removeFront()
console.log({atendido})
console.log(deque.print())

let desistente = deque.removeBack()
console.log({desistente})
