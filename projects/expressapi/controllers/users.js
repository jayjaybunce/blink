const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const Folder = require('../models/folder')

module.exports = {
    signup,
    login
}



async function signup(req, res){
    const user = new User(req.body);
    try{
        await user.save();
        let miscFolder = new Folder({owner: user._id, title: 'Misc', color: '#34dbeb'})
        let workFolder = new Folder({owner: user._id, title: 'Work', color: '#7500e3'})
        let todoFolder = new Folder({owner: user._id, title: 'To-Do', color: '#90e300'})
        miscFolder.save()
        workFolder.save()
        todoFolder.save()
        const token = createJWT(user);
        res.json({token});
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}


async function login(req,res){
    
    try{
        const user = await User.findOne({email: req.body.email})
        if (!user) return res.status(401).json({err: 'bad credentials'})
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch){
                const token = createJWT(user)
                console.log(token)
                res.json({token})
            }else{
                return res.status(401).json({err: 'bad credentials'})
            }
        });
    }catch (err) {
        return res.status(401).json(err)
    }
}


// Helper function that will create a Json Web Token by adding the destructured user object as the payload as well as the secret and a time to expire in
function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}