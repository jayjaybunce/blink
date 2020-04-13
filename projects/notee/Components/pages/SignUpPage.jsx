import * as React from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import PageHeader from '../PageHeader/PageHeader'

const SignUpPage = props => {
    
    return (
        <>
            <PageHeader
                title='Create your account!'
                description='Please login or create an account to use Notee!'
            />
            <SignUpForm
                navigation={props.navigation} 
                user={props.user}
                handleSignupOrLogin={props.handleSignupOrLogin}
            />
        </>
    )
}

export default SignUpPage