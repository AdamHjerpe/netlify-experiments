export function handler (event, context, callback) {
  const { name } = JSON.parse(event.body)

  callback(null, {
    statusCode: 200,
    body: 'Hello ' + name
  })
}
