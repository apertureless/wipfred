const { config, output } = require('alfy')

const key = process.argv[2]

if (key) {
  config.set('token', key)
}
