import React, {useState} from 'react'
import { View, Animated } from 'react-native'
import SignUpForm from '../SignUpForm/SignUpForm'
import PageHeader from '../PageHeader/PageHeader'
import { LinearGradient } from 'expo-linear-gradient'
import KeyboardListener from 'react-native-keyboard-listener'
const SignUpPage = props => {
    const [keyboardOpen, setKeyboardOpen] = useState(false)

    return (
        <>
            <LinearGradient
            colors={['#833ab4','#1debfd','#1dfd79']}
            >
            <KeyboardListener 
                onWillShow={() => setKeyboardOpen(true)}
                onWillHide={() => setKeyboardOpen(false)}
            />
            <View style={keyboardOpen === true ? {marginTop: -120}: null}>
            <PageHeader
                shrink={keyboardOpen}
                title='Create your account!'
                description='Please login or create an account to use Notee!'
            />
            <SignUpForm
                shrink={keyboardOpen}
                navigation={props.navigation} 
                user={props.user}
                handleSignupOrLogin={props.handleSignupOrLogin}
            />
            </View>
            </LinearGradient>
        </>
    )
}

export default SignUpPage