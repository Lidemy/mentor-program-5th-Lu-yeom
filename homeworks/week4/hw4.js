
// eslint-disable-next-line import/no-unresolved
const request = require('request')

const apiurl = 'https://api.twitch.tv/kraken/games/top'

// eslint-disable-next-line no-undef
const clientID = Luyeom

request({
  method: 'GET',
  url: apiurl,
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}, (error, response, body) => {
  console.log(body)
})
