const fs = require('fs')
const expect = require('chai').expect
const parseRDF = require('../lib/parse-rdf')
const rdf = fs.readFileSync(`${__dirname}/pg132.rdf`)
console.log(__dirname);
describe('parseRDF', () => {
  it('should be a function', () => {
    expect(parseRDF).to.be.a('function')
  })
  it('should parse RDF content', () => {
      const book = parseRDF(rdf)
      expect(book).to.be.an('object')
      expect(book).to.have.a.property('id', 132);
      expect(book).to.have.a.property('title', 'The Art of War')
    }
  )
})
