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
        console.log('notes found:', notes)
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

module.exports = {
    getNotesForFolder,
    createNote
}