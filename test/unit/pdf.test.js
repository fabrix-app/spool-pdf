'use strict'
/* global describe, it */
const assert = require('assert')

describe('PDF', () => {
  it('should exist', () => {
    assert(global.app.pdf)
  })
  it('should html to pdf', (done) => {
    global.app.pdf.htmlToPDF('<h1>Hello World</h1>')
      .then(pdf => {
        console.log(pdf)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
