import * as React from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import PageHeader from '../PageHeader/PageHeader'
import { LinearGradient } from 'expo-linear-gradient'
const SignUpPage = props => {
    
    return (
        <>
            <LinearGradient
            colors={['#833ab4','#1debfd','#1dfd79']}
            >
            <PageHeader
                
                title='Create your account!'
                description='Please login or create an account to use Notee!'
            />
            <SignUpForm
                navigation={props.navigation} 
                user={props.user}
                handleSignupOrLogin={props.handleSignupOrLogin}
            />
            </LinearGradient>
        </>
    )
}

export default SignUpPage