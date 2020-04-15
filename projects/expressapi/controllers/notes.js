const Note = require('../models/note')

const getTitle = (noteContent) => {
    let title = []
    for(let i = 0; i < 20; i++){
        title.push(noteContent[i])
    }
    return title.join('')
}

const getNotesForFolder = async (req,res) => {
    try{
        const notes = await Note.find({folder: req.params.id})
        res.status(200).json(notes)
    }catch(error){
        console.log('getnotesforfolder', error)
    }
}

const createNote = async (req, res) => {
    const noteProps = {
        owner: req.user._id,
        folder: req.params.id,
        title: getTitle(req.body.content),
        content: req.body.content,
    }
    try{
        const note = await Note.create(noteProps)
        res.status(200)        
    }catch(error){
        res.status(400)
        console.log(error)
    }
}

const updateNote = async (req,res) => {
    try{
        const response = await Note.findOneAndUpdate({_id: req.body._id}, req.body)
        res.status(200).send('Note updated')
    }catch(error){
        console.log('updateNote', error)
    }
}

const deleteNote = async (req, res) => {
    try {
        const response = await Note.findByIdAndRemove(req.params.nId)
        res.status(200).send('Note Removed')
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getNotesForFolder,
    createNote,
    updateNote,
    deleteNote
}