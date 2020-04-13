import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styled, { css } from '@emotion/native'
const CircleButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    ${'' /* background-color: rgba(255, 255, 255, 0.46); */}
    background-color: white;
    margin-right: 5px;
    ${'' /* border: 0.2px solid grey; */}
    

`
const UserLetter = styled.Text`
    color: black;
    text-align: center;
    font-size: 25px;
    line-height: 47px
`


const Container = styled.View`
    display: flex;
    flex-direction: row;
    

`


const AccountButton = props => {
    return(
        <Container>
            <CircleButton>
                <UserLetter>
                    {props.user ? props.user.firstName[0] + props.user.lastName[0]: 'Loading user'}
                    
                </UserLetter>
            </CircleButton>
            <CircleButton 
                style={{
                    backgroundColor: 'transparent',
                }}
                onPress={() =>props.navigation.navigate('Account')}
            >
                <UserLetter style={{
                    color: 'white',
                    fontSize: '35'
                }}>
                &nbsp;&nbsp;▷
                </UserLetter>
            </CircleButton>
        </Container>
    )
}


export default AccountButton;