import Init from '../lib/_init_'
import { expect } from 'chai'

describe('Init', () => {
  it('return true', () => {
    const app = new Init()
    expect(app.init()).to.equal(true)
  })
})
