const axios = require('axios')

module.exports = {
  convertToGif: function (req, res) {
    let newGif = { fetchUrl, noMd5, cut, caption } = req.body
    axios({
      method: "POST",
      url: 'https://api.gfycat.com/v1/gfycats',
      data: newGif,
    })
    .then( ({data}) => {
      res.status(200).json(data)
    })
    .catch( error => {
      res.status(400).json(error)
    })
  },

  getGif: function (req, res) {
    let gifname = req.params.gifname

    axios({
      method: "GET",
      url: `https://api.gfycat.com/v1/gfycats/${gifname}`
    })
    .then( ({data}) => {
      res.status(200).json(data.gfyItem)
    })
    .catch( error => {
      res.status(400).json(error)
    })
  }
}