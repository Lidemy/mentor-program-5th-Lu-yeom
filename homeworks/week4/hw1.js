// eslint-disable-next-line import/no-unresolved
const request = require('request')
const process = require('process')

console.log(process.argv)
request(
  request(
    request.get('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
      const json = JSON.parse(body)
      console.log(json)
      let data
      try {
        data = JSON.parse(body)
      } catch (err) {
        console.log('抓取錯誤', error)
        return
      }
      for (let i = 0; i < data.length; i++) {
        console.log(`${data[i].id}${data[i].name}`)
      }
    })
  )
)
