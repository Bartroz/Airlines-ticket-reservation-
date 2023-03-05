const sumPlik = require('./sum')
import { sum2, zmienna2 } from './sum2'
import style from './index2.scss'

console.log(sum2(1, 2))
console.log(zmienna2)
console.log('hello world')
console.log('Suma wynosi' + sumPlik.sum(2, 4))
console.log('Zmienna wynosi' + sumPlik.zmienna)

let heading = document.querySelector('#demo')
let sumValue = sumPlik.sum(100, 10)

heading.innerText = `10+10 = ${sumValue}`
