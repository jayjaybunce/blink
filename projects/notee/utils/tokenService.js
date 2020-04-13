import * as SecureStore from 'expo-secure-store'

const setToken = token => {
    if(token){
        SecureStore.setItemAsync('token', token);
    } else {
        SecureStore.deleteItemAsync('token')
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
    const token = await getToken();
    return (token ? JSON.parse(atob(token.split('.')[1])).user : null);

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
