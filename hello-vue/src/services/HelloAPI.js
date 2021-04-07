import axios from 'axios'

let base = 'api'

//axios call get request to /api, will automatically convert response to json
//export default means provide function with name getHelloMessage
export default {
    getHelloMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }
}