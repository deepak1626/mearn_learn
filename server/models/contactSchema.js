const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    
    massage: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
const Contact = new mongoose.model('Contact', contactSchema)
module.exports = Contact