const mongoose = require('mongoose')

const channelSchema = mongoose.Schema({
    name: { type: String, required: true },
    users: [
        {type: String}
    ]
})

const groupSchema = mongoose.Schema({
    name: { type: String, required: true },
    channels: [channelSchema]
})

module.exports = mongoose.model('Group', groupSchema)