const { config } = require('alfy')

module.exports = {
  API_TOKEN: config.get('token') || false,
  BASE_URL: 'https://wip.chat/graphql'
}
