const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


module.exports = {
    signup,
    login
}

async function signup(req, res){
    // Create an instance of the User model based off the information send on the request.body object !! ENSURE STATE VARS MATCH
    
    const user = new User(req.body);
    // Try to save the user asynchronously
    try{
        await user.save();
        // As long as the save goes through, create a token based off the newly created user and send back a token on the response
        const token = createJWT(user);
        res.json({token});
    }catch(err){
        // In case of any save errors or issues creating a JWT, send a status 400 and the error back on the response object
        console.log(err)
        res.status(400).json(err);
    }
}


async function login(req,res){
    
    try{
        // Try to find a user based on the only unique field - email
        const user = await User.findOne({email: req.body.email})
        
        // If a user with that email doesnt exist, send a status code of 401 and json: {"err": "bad credentials"}
        if (!user) return res.status(401).json({err: 'bad credentials'})
        // If a user with that email does exist, use the comparePassword method defined on the user model
        user.comparePassword(req.body.password, (err, isMatch) => {
            // If the password matches, create a token and send it back to the client on the response
            if (isMatch){
                const token = createJWT(user)
                res.json({token})
            // If the password doesn't matche, send back a 401 status code and json: {"err": "bad credentials"}
            }else{
                return res.status(401).json({err: 'bad credentials'})
            }
        });
    // Catch all erros and send the mback on the response
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