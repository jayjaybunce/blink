import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import PageHeader from '../PageHeader/PageHeader'

const LoginPage = props => {
    
    return(
        <>
            <PageHeader
                title='Please Login'
                description='Having an account is the only way to use Notee!'
            />
            <LoginForm
                navigation={props.navigation}
                handleSignupOrLogin={props.handleSignupOrLogin}
            />
        </>
    )
}


export default LoginPage;