import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styled, { css } from '@emotion/native'
const CircleButton = styled.TouchableOpacity`
    height: 50;
    width: 50;
    border-radius: 25px;
    ${'' /* background-color: rgba(255, 255, 255, 0.46); */}
    background-color: white;
    margin-right: 7px;
    ${'' /* border: 0.2px solid grey; */}
    

`
const UserLetter = styled.Text`
    color: black;
    text-align: center;
    font-size: 25;
    line-height: 47
`


const Container = styled.View`
    display: flex;
    flex-direction: row;
    

`


const AccountButton = props => {

    return(
        <Container>
            
            <CircleButton 
                style={{
                    backgroundColor: '#29cc5c'
                }}
                onPress={() => props.navigation.navigate('NewFolder')}
            >
                <UserLetter style={{
                    color: 'white'
                }}>
                ＋
                </UserLetter>
            </CircleButton>
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
                ▷
                </UserLetter>
            </CircleButton>
        </Container>
    )
}


export default AccountButton;