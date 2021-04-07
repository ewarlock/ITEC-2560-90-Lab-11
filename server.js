let express = require('express') //always require express!
let routes = require('./routes/routes') //path to routes
let path = require('path')

let app = express() //create web app

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist'))) //static files, dirname, name of vue project

app.use('/api', routes)

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
}) //use computer specified port or use 3000, console log the port that it's running on

//tell server that files exist
