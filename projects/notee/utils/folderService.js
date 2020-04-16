import tokenService from "./tokenService"
const BASE_URL = 'http://192.168.0.34:3000/noteeapi/api/folders/'


const getFoldersForUser = async () => {
    const token = await tokenService.getToken()
    try{
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        return response.json()

    }catch(e){
        // console.log(e)
    }
}


const createFolder = async (folderData) => {
    const token = await tokenService.getToken()
    try{
        const response = await fetch(BASE_URL, {
           method: 'POST' ,
           headers: {
               'Content-type': 'application/json',
               'Authorization': 'Bearer ' + token
           },
           body: JSON.stringify(folderData)
        })
        return response
    }catch(error){
        // console.log(error)
    }
}


const deleteFolder = async(folderId) => {
    const token = await tokenService.getToken()
    try {
        const response = await fetch(BASE_URL,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({id: folderId})
        })
        return response
    }catch(error){
        // console.log('error in delete folder', error)
    }
}

const updateFolder = async(folderData) => {
    const token = await tokenService.getToken()
    try {
        const response = await fetch(BASE_URL, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(folderData)
        })
        return response;
    }catch(error){
        // console.log(error)
    }
}
export default {
    getFoldersForUser,
    createFolder,
    deleteFolder,
    updateFolder
}