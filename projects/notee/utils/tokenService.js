import * as SecureStore from 'expo-secure-store'
import {decode as atob, encode as btoa} from 'base-64'

const setToken = async (token) => {
    if(token){
        try{
            await SecureStore.setItemAsync('token', token);
        }catch(error){

        }
    } else {
        let result = await SecureStore.deleteItemAsync('token')
        return result
    }
    
}

const getToken = async () => {
    const token = await SecureStore.getItemAsync('token')
    if (token) {
        try{
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.exp < Date.now() / 1000){
                SecureStore.deleteItemAsync('token');
                token = null;
            }
        }catch(e){
        }
    }

    return token;
}

const getUserFromToken = async () => {
    try{
        const token = await getToken();
        return token ? JSON.parse(atob(token.split('.')[1])).user : null;

    }catch(error){
        // console.log('getuserfromtoken', error)
        console.log(JSON.stringify(error))
    }

}

const removeToken = () => {
    SecureStore.deleteItemAsync('token')
}

export default {
    setToken,
    getToken,
    removeToken,
    getUserFromToken
}
