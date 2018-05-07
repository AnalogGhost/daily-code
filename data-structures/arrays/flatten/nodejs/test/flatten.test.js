const { assert } = require('chai')
const flatten = require('../src/flatten')

describe(`Is flatten a function?`, () => {
  it(`typeof flatten should be a function`, () => {
    assert.isFunction(flatten)
  })
})

describe(`Flatten should throw exception for invalid arguments`, () => {
  it(`Should throw exceptipn when no arguments passed in`, () => {
    assert.throws(() => flatten(), Error, `Invalid Argument`)
  })
  it(`Should throw exceptipn when argument isn't an array`, () => {
    assert.throws(() => flatten('a'), Error, `Invalid Argument`)
    assert.throws(() => flatten(true), Error, `Invalid Argument`)
    assert.throws(() => flatten({}), Error, `Invalid Argument`)
  })
})

describe(`Flatten should throw exception if any array elements are not a number or an array`,() => {
  assert.throws(() => flatten([1,2,'three',4,5]), Error, `All elements in Array must be numbers or arrays.`)
})

describe(`Flatten should properly flatten arrays`, () => {
  it('Should return an already flattened array properly', () => {
    assert.deepEqual(flatten([1,2,3,4,5]),[1,2,3,4,5])
  })
  it(`Should return [1,2,3,4,5] for argument [[1,2],3,[4,5]]`,() => {
    assert.deepEqual(flatten([[1,2],3,[4,5]]),[1,2,3,4,5])
  })
})