const mongoose = require('mongoose')
const {Schema} = mongoose

const noteSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    folder: {
        type: Schema.Types.ObjectId, ref: 'Folder'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)