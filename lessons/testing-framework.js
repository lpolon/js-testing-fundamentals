const {sum, subtract} = require('../math')

test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

/*
exemplo da abstração de um testing framework (mocha, jest)
resolve o problema de rodar vários testes de uma vez (try catch) e logar diretamente a linha do erro, sem precisar procurar no callstack.
Identificar rapidamente o que está quebrado.
*/
function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

/*
exemplo da abstração de uma assertion library.
*/
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
