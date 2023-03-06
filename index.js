import { evaluate, derivative, isUnit, isComplex } from 'mathjs'
import prompt from 'prompt'

prompt.start()

prompt.get(['expression'], (err, result) => {
  const { expression } = result
  console.log(expression)
  const ddx = 'derivative of '
  if (expression.startsWith(ddx)) {
    console.log(derivative(expression.substring(ddx), 'x'))
  } else {
    const answer = evaluate(expression)
    if (isUnit(answer)) {
      console.log(answer.valueOf())
    } else if (isComplex(answer)) {
      console.log(`${answer.re} ${answer.im < 0 ? '-' : '+'} ${Math.abs(answer.im)}i`)
    } else {
      console.log(answer)
    }
  }
})