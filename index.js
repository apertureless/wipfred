'use strict'

const alfy = require('alfy')
const path = require('path')
const alfredNotifier = require('alfred-notifier')
const { API_TOKEN, BASE_URL } = require('./constants')

alfredNotifier()

const query = `query {
  viewer {
    todos (completed: false) {
      body
      id
      completed_at
    }
  }
}`

if (API_TOKEN && typeof API_TOKEN === 'string' && API_TOKEN.length > 0) {
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
    const results = alfy
      .inputMatches(data.viewer.todos, 'body')
      .map((todo) => {
      return {
        title: todo.body,
        subtitle: 'Pending todo',
        arg: todo.id,
        icon: {
          type: 'png',
          path: path.resolve(__dirname, './wipfred-todo.png')
        }
      }
    })
    alfy.output(results)
  })
} else {
  alfy.output([{
    title: 'Wip.chat API key not found.',
    subtitle: 'Please type wip and go to API key to set your API key',
    icon: {
      type: 'png',
      path: path.resolve(__dirname, './warning.png')
    }
  }])
}
