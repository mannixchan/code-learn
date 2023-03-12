const dir = require('node-dir')
const parseRDF = require('./lib/parse-rdf')

const dirname = process.argv[2]

const options = {
  match: /\.rdf$/,
  exclude: ['pg0.rdf']
}

dir.readFiles(dirname, options, (err, context, next) => {
  if(err) throw err;
  const doc = parseRDF(context)
  console.log(JSON.stringify({index: {_id: `pg${doc.id}`}}))
  console.log(JSON.stringify(doc))
  next()
})

process.stdout.on('error', err => {
  if(err.code === 'EPIPE')
    process.exit();
  throw err;
})