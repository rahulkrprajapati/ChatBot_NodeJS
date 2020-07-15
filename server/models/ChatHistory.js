const mongoose  = require('mongoose')
const Schema    = mongoose.Schema


const chatHistorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    budget: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    },
    carChecked: {
        type: String,
        required: true,
    },
    delivery: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const ChatHistory = mongoose.model('ChatHistory', chatHistorySchema)
module.exports = ChatHistory