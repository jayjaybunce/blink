import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styled from '@emotion/native'
import AccountButton from '../AccountButton/AccountButton'
import misc from '../../utils/misc'
const Header = styled.View`
    width: 100%;
    ${'' /* background-color: rgba(255, 255, 255, 0.09); */}
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    
`
const Button = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    margin: 0 auto;
    background-color: #00e676;
    margin-top: 10px;
    
`
const ButtonTitle = styled.Text`
    text-align: center;
    color: white;
    font-size: 30px;
    line-height: 50px;
`


const PreHeader = styled.View`
    height: 30px;
    background-color: rgba(255, 255, 255, 0.09);
    ${'' /* background-color:red; */}
`
const Title = styled.Text`
    color: white;
    font-size: 30px;
    text-align: center;
`
const Container = styled.View`
    width: 90%;
    background-color: white;
    height: 50%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 10px 5px #cfcfcf;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const InfoText = styled.Text`
    margin-top: 20px;
    padding: 5px

`


const AccountPage = props => {
    // console.log(props)
    
    return(
        <>
            <LinearGradient
                colors={['#833ab4','#1debfd','#1dfd79']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}    
            >
                <PreHeader/>
                <Header>
                    <Title>
                        {props.user.firstName} {props.user.lastName}
                    </Title>
                    <AccountButton
                        user={props.user}
                    />
                </Header>
                </LinearGradient>
            <Container>
                <Title style={{color: 'black', textAlign: 'left'}}>
                    {props.user.firstName} {props.user.lastName}
                </Title>
                <View>
                    <InfoText>
                        Account Created {misc.formatDate(props.user.createdAt)}
                    </InfoText>
                    <InfoText>
                        Email Address: {props.user.email}
                    </InfoText>
                </View>
                <Button onPress={props.handleLogout}>
                    <ButtonTitle>
                        Logout
                    </ButtonTitle>
                </Button>
            </Container>
        </>
    )
}

export default AccountPage;