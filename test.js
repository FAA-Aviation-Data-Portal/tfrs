/* global describe, it */

const assert = require('chai').assert
const tfrs = require('./index')

describe('tfrs', () => {
  it('should exist', () => {
    assert(tfrs !== undefined)
  })
  it('should expose a list function', () => {
    assert(tfrs.list !== undefined)
  })
  it('should expose a fetch function', () => {
    assert(tfrs.fetch !== undefined)
  })
})
