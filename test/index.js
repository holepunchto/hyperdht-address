const { test } = require('brittle')
const b4a = require('b4a')
const { encode, decode } = require('../')

test('key', async (t) => {
  const key = b4a.alloc(32, 'test')

  const decoded = decode(encode(key))
  t.is(decoded.key.toString('hex'), key.toString('hex'))

  t.pass()
})

test('key + nodes', async (t) => {
  const key = b4a.alloc(32, 'test')

  const decoded = decode(encode(key, [{ host: '0.0.0.0', port: 12345 }]))
  t.is(decoded.key.toString('hex'), key.toString('hex'))
  t.alike(decoded.nodes, [{ host: '0.0.0.0', family: 4, port: 12345 }])

  t.pass()
})
