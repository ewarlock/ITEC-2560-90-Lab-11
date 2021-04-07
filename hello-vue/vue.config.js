module.exports = {
    //if any api requests made by vue client, send them to this adds
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}