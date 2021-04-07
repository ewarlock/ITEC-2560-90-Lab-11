let express = require('express')
let router = express.Router()
//require the express library, make a router with Router()

router.get('/', function(req, res, next) {
    //configure get request that fetches data
    //function will run to provide response
    //req/request client has made, res/response server sends, next - information about request
    res.json({'message': 'hello web programmers!'}) //sends json response back, res can also return html or binary or imgs
})

module.exports = router //another file can require this file and access router object