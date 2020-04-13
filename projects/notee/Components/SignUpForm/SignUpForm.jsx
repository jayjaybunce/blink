import React, { useState } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import styled, { css } from '@emotion/native'
import DynInput from '../DynInput/DynInput'
import { Icon } from 'react-native-elements'
import userService from '../../utils/userService'

const Container = styled.View`
    margin: 30px 20px 0 20px;
    
`

const ViewInline = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const SignUpForm = props => {
    const [password, setPassword] = useState(null)
    const [passwordConf, setPasswordConf] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const verifyInput = () => {
        if (firstName && lastName && email){
            return true
        }else{
            return false
        }
    }
    const doPasswordsMatch = () =>{
        if(password === null && passwordConf === null || password === '' && passwordConf === ''){

            return false
        }else{
            if(password === passwordConf){
                return true
            }else{
                return false
            }
        }
    }
    const handleSubmit = async (e) => {
        
        console.log('handling submit')
        try {
          await userService.signup(
              {
                  firstName,
                  lastName,
                  email,
                  password,
                  passwordConf
            }
          );
          // Let <App> know a user has signed up!
          props.handleSignupOrLogin();
          // Successfully signed up - show GamePage
          props.history.push('/');
        } catch (err) {
            console.log(err)
          // Invalid user data (probably duplicate email)
        //   props.updateMessage(err.message);
        }
      }
    
    return (
        <Container>
        <Text style={styles.label}>{props.user ? props.user.firstName : 'No user'}</Text>
            <ViewInline>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.label}>Last Name</Text>
                <DynInput
                    placeholder='First Name'
                    autoCapitalize='words'
                    size='half'
                    inputValue={firstName}
                    handleChange={setFirstName}
                />
                
                <DynInput
                    placeholder='Last Name'
                    autoCapitalize='words'
                    size='half'
                    inputValue={lastName}
                    handleChange={setLastName}
                />
            </ViewInline>
            <Text style={styles.label}>Email</Text>
            <DynInput
                placeholder='Email'
                keyboardType='email-address'
                size='full'
                inputValue={email}
                handleChange={setEmail}
            />
            <Text style={styles.label}>Password</Text>
            <DynInput
                placeholder='Password'
                textContentType='password'
                secureTextEntry='true'
                name='password'
                size='full'
                inputValue={password}
                handleChange={setPassword}
            />
            {doPasswordsMatch()?<Icon containerStyle={styles.passwordIcon} name='done' type='material' color='#e0e0e0' size='40'/>:null }
            <Text style={styles.label}>Confirm Password</Text>
            <DynInput
                placeholder='Password'
                textContentType='password'
                secureTextEntry='true'
                size='full'
                name='password'
                inputValue={passwordConf}
                handleChange={setPasswordConf}
            />
            {doPasswordsMatch()?<Icon containerStyle={styles.passwordIcon} name='done' type='material' color='#e0e0e0' size='40'/>:null }
            <Text style={styles.messageText}>
                
            </Text>
            <TouchableOpacity disabled={!doPasswordsMatch() && !verifyInput()} style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.logInText} onPress={() => props.navigation.navigate('Login')}>LOG IN</Text>
            </TouchableOpacity>
        </Container>
    )
}
const styles = {
    messageText: {
        textAlign: 'center',
        color: '#c62828',
        fontSize: 15,
        marginBottom: 5,
        marginTop: 5,
    },
    label: {
        marginTop: 10,
        marginBottom: 5,
        padding: 5,
        display: 'flex',
        width: '50%',
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: '#00e676',
        textAlign: 'center',
        padding: 10,
    },
    buttonDisabled: {
        backgroundColor: 'grey',
        textAlign: 'center',
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    passwordIcon: {
        marginTop: -50,
        marginLeft: 320,
    },
    logInText: {
        marginTop: 20,
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
    }
    
}

export default SignUpForm;