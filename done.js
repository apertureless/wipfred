const alfy = require('alfy')

const { API_TOKEN, BASE_URL } = require('./constants')

const id = process.argv[2]

const query = `mutation completeTodo {
  completeTodo(id: ${id}) {
    id
    body
    completed_at
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
