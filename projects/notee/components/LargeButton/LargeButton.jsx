import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from '@emotion/native'


const Button = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    margin: 0 auto;
    background-color: #00e676;
    margin-top: 10px;
    
`
const Title = styled.Text`
    text-align: center;
    color: white;
    font-size: 30px;
    line-height: 50px;
`


const LargeButton = props => {
    return (
        props.secondary === 'true'
        ?
        <Button 
            style={{backgroundColor: 'white'}} 
            onPress={() => props.navigation.navigate(props.navTo)}
        >
            <Title style={{color: 'grey'}}>
                
                {props.title}
            </Title>
        </Button>
        : 
        <Button
            onPress={() => props.navigation.navigate(props.navTo)}
        >
            <Title>
                
                {props.title}
            </Title>
        </Button> 
        
    )
}

export default LargeButton;