import tokenService from './tokenService'

const BASE_URL = 'http://192.168.0.34:3000/noteeapi/api/users/'
// const BASE_URL = 'http://notee-backend.herokuapp.com/noteeapi/api/users/'

const signup = user => {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()

        throw new Error('Email already taken!')
    })
    .then(({token}) => tokenService.setToken(token))
}

const getUser = async () => {
    try{
        let token = await tokenService.getUserFromToken()
        return token

    }catch(e){
        console.log({error: e})
    }
}

const logout = () => {
    tokenService.removeToken()
}

const login = creds => {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
    })
    .then(res => {
        if (res.ok){
            return res.json()
        } 
        throw new Error('Bad Credentials')
    })
    .then(({token}) => tokenService.setToken(token))
    
}


export default {
    signup,
    getUser,
    logout,
    login
}