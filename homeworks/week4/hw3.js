// eslint-disable-next-line import/no-unresolved
const request = require('request')

request(
  'https://restcountries.eu/rest/v2/name/{name}', (error, response, body) => {
    if (error) {
      return console.log('存取錯誤', error)
    }
    const data = JSON.parse(body)
    if (data.status === 404) {
      return console.log('cannot find country')
    }

    for (let i = 0; i < data.length; i++) {
      console.log('============')
      console.log(`國家:${data[i].name}`)
      console.log(`首都:${data[i].capital}`)
      console.log(`貨幣:${data[i].currencies[0].code}`)
      console.log(`國碼:${data[i].callingCodes[0]}`)
    }
  })
