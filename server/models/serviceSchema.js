const mongoose = require('mongoose')

const serviseSchema = new mongoose.Schema({
    service_name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})

const Service = new mongoose.model('Service', serviseSchema)
module.exports = Service