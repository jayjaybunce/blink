import tokenService from './tokenService'

const BASE_URL = 'http://192.168.0.34:3000/noteeapi/api/folders/'

const getNotesForFolder = async (folderId) => {
    const token = await tokenService.getToken()
    try{
        const response = await fetch(BASE_URL + folderId, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
        return response.json()
    }catch(error){
        console.log('getnotesforfolder', error)
    }
}

const createNote = async (folderId, note) => {
    const token = await tokenService.getToken()
    try{
        const response = await fetch(BASE_URL + folderId, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({content: note})
        })
        return response
    }catch(error){
        console.log('create note', error)
    }
    
}

export default {
    getNotesForFolder,
    createNote
}