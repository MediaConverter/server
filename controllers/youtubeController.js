const axios = require('axios')

module.exports = {
  search: async (req, res) => {
    try {
      const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${req.query.search}&key=AIzaSyAYvMTTyxFSmgUZkCuUutNUylgThFyQcLc`)
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({
        errors: err
      })
    }
  }
}