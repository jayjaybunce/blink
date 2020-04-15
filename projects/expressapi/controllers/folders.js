const Folder = require('../models/folder')
const Note = require('../models/note')
const getFoldersForUser = async (req,res) => {
    const folders = await Folder.find({owner: req.user})
    res.json(folders)
}

const createFolder = async (req,res) => {
    try{
        const folder = await Folder.create({owner: req.user, title: req.body.title, color: req.body.color} )
        folder.save()
        res.status(200).send('Folder created')
    }catch(e){
        console.log(e)
    }
}

const deleteFolder = async (req,res) => {
    try{
        const request = await Note.deleteMany({folder: req.body.id})
        if(request.ok === 1){
            const response = await Folder.findByIdAndRemove(req.body.id)
            res.status(200).send('Folder Removed')
            
        }
    }catch(e){
        console.log(e)
    }
}

const updateFolder = async (req,res) => {
    try{
        const properties = {title: req.body.title, color: req.body.color}
        const response = await Folder.findOneAndUpdate({_id: req.body._id}, properties)
        res.status(200).send('Folder updated')
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getFoldersForUser,
    createFolder,
    deleteFolder,
    updateFolder
}