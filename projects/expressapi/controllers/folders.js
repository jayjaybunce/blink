const Folder = require('../models/folder')



const getFoldersForUser = async (req,res) => {
    const folders = await Folder.find({owner: req.user})
    res.json(folders)
}

const createFolder = async (req,res) => {
    console.log(req.body)
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
        const response = await Folder.findByIdAndRemove(req.body.id)
        res.status(200).send('Folder Removed')
    }catch(e){
        console.log(e)
    }

    console.log(req.user)
    console.log(req.body)
}


module.exports = {
    getFoldersForUser,
    createFolder,
    deleteFolder
}