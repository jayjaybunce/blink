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
        console.log('response',response)
        return response.json()

    }catch(e){
        console.log(e)
    }
}

export default {
    getFoldersForUser,
}