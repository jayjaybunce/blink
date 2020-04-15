import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import { View } from 'react-native'
import PageHeader from '../PageHeader/PageHeader'
import { LinearGradient } from 'expo-linear-gradient'
const LoginPage = props => {
    
    return(
        <>
            <LinearGradient
            colors={['#833ab4','#1debfd','#1dfd79']}
            >
            <PageHeader
                title='Please Login'
                description='Having an account is the only way to use Notee!'
            />
            <LoginForm
                navigation={props.navigation}
                handleSignupOrLogin={props.handleSignupOrLogin}
            />
            <View style={{height: 250}}>

</View>
            </LinearGradient>
        </>
    )
}


export default LoginPage;