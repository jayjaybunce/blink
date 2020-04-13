const Folder = require('../models/folder')



const getFoldersForUser = async (req,res) => {
    console.log(req.user)
    const folders = await Folder.find({owner: req.user.id})
    console.log('sending folders',folders)
    res.json(folders)
}



module.exports = {
    getFoldersForUser,
}