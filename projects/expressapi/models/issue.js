const mongoose = require('mongoose')
const {Schema} = mongoose

const issueSchema = new Schema({
    email: String,
    date: Date,
    appLocation: String,
    description: String
},{
    timestamps: true
})


module.exports = mongoose.model('Issue', issueSchema)