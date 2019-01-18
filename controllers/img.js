const axios = require('axios')

module.exports = {
    removeBg : function(req, res){
        console.log(req.file.cloudStoragePublicUrl)
        console.log(process.env.MALABI_APIID)
        console.log(process.env.MALABI_APIKEY)
        axios.post(`https://api.malabi.co/test/images`,{
            "image_url" : req.file.cloudStoragePublicUrl,
            "settings" : {
                "shadow" : "drop",
                "background": "image"
            }
        },{
            headers :{
                "x-api-id" : process.env.MALABI_APIID,
                "x-api-key" : process.env.MALABI_APIKEY 
            }
        })
        .then(({data}) => {
            console.log(data)
            res.status(200).json({
                image : data
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message : 'Interal server error',
                error : err
            })  
        })
    }
}