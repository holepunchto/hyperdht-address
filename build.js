const Hyperschema = require('hyperschema')

const schema = Hyperschema.from('./spec/hyperschema')
const ns = schema.namespace('hyperdht')

ns.register({
  name: 'address',
  fields: [
    {
      name: 'key',
      type: 'fixed32',
      required: true
    },
    {
      name: 'nodes',
      type: 'ipv4Address',
      array: true
    }
  ]
})

Hyperschema.toDisk(schema)
