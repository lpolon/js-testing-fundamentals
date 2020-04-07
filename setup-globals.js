/*
jest abraça a ideia de que essas funções serão chamadas de toda a parte e as dispoibiliza globalmente, chamando mocha, jest..
seria o equivalente a:

node --require ./setup-globals.js lossons/globals.js
*/

async function test(title, callback) {
  try {
    await callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

global.test = test
global.expect = expect
