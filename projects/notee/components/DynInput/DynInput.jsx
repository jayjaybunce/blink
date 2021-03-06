import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import styled, { css } from '@emotion/native'
import { Icon } from 'react-native-elements'


const DynInput = props => {
    return (
        <>
            
            <TextInput 
                style={
                    [
                        styles.input,
                        props.size === 'full'? styles.fullWidthInput: styles.halfWidthInput,
                        props.validInput === true ? styles.borderGreen : styles.borderWhite,
                        props.blackBorder === true ? styles.borderBlack : null,

                    ]
                }
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                textContentType={props.textContentType}
                autoCapitalize={props.autoCapitalize}
                secureTextEntry={props.secureTextEntry}
                value={props.inputValue}
                name={props.name}
                onChangeText={text => props.handleChange(text)}
            >
                
            
            </TextInput>
            
        </>
    )
}

const styles = StyleSheet.create({
    fullWidthInput: {
        width: '100%',        
    },
    halfWidthInput: {
        width: '50%',
        

    },
    input: {
        padding: 5,
        borderBottomWidth: 1,
        height: 50,
        

    },
    borderGreen: {
        borderBottomColor: '#00ff9d'
    },
    borderWhite: {
        borderBottomColor: 'white'
    },
    borderBlack:{
        borderBottomColor: 'black'
    }
})


export default DynInput;