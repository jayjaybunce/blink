const mongoose = require('mongoose')
const { Schema } = mongoose

const folderSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    color: {
        type: String
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Folder', folderSchema)