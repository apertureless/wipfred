const alfy = require('alfy')
const { API_TOKEN, BASE_URL } = require('./constants')

const todo = process.argv[2]
const createdAt = new Date().toISOString()

const query = `mutation createTodo {
  createTodo(input: { body: ${JSON.stringify(todo)} completed_at: ${JSON.stringify(createdAt)} }) {
    id
    body
  }
}`

alfy.fetch(BASE_URL, {
  json: true,
  method: 'POST',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  },
  body: { query },
}).then((json) => {
  const { data } = json
  if (!data) {
    return alfy.log(json.errors ? json.errors : 'Unknown GraphQL Error')
  }
})

