import React, { useState } from 'react'
import DynInput from '../DynInput/DynInput'
import styled, { CSS } from '@emotion/native'
import { TouchableOpacity, Text, View } from 'react-native'
import userService from '../../utils/userService'
const Container = styled.View`
    margin: 30px 20px 0 20px;
    
`

const ViewInline = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const LoginForm = props => {
    const handleSubmit = async (e) => {
        try {
          await userService.login({
              email,
              password
          });
          props.handleSignupOrLogin();
        } catch (err) {
          console.log(err)
          alert('Invalid Credentials!');
        }
      }
    const [ email, setEmail] = useState(null)
    const [ password, setPassword] = useState(null)
    const verifyInput = () =>{
        if(email && password){
            return true
        }else{
            return false
        }
    }
    return (
        <Container style={styles.centeredContainer}>
            <Text style={styles.label}>Email Address</Text>
            <DynInput
                    size='full'
                    inputValue={email}
                    handleChange={setEmail}
            />
            <Text style={styles.label}>Password</Text>
            <DynInput
                textContentType='password'
                secureTextEntry='true'
                name='password'
                size='full'
                inputValue={password}
                handleChange={setPassword}
            />  
            <View style={{height: 50}}>
</View>   
            <TouchableOpacity style={styles.button} disabled={!verifyInput()} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    LOG IN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.logInText} onPress={() => props.navigation.navigate('Signup')}>Sign Up</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = {
    centeredContainer: {
        marginTop: 150,
    },
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
        color: 'white', 
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


export default LoginForm;