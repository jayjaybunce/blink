import React from 'react'
import styled ,{ css } from '@emotion/native'
import { LinearGradient } from 'expo-linear-gradient'
import AccountButton from '../AccountButton/AccountButton'

const Header = styled.View`
    width: 100%;
    ${'' /* background-color: rgba(255, 255, 255, 0.09); */}
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    
`


const PreHeader = styled.View`
    height: 30px;
    background-color: rgba(255, 255, 255, 0.09);
    ${'' /* background-color:red; */}
`
const Title = styled.Text`
    color: white;
    font-size: 35px;
    text-align: center;
`

const TopNav = props => {
    return(
        
             <LinearGradient
            colors={['#833ab4','#fd1d1d','#fcb045']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            
            >
            <PreHeader/>
            <Header>
            <Title>
                Notee
            </Title>
            <AccountButton
                user={props.user}
                navigation={props.navigation}
            />
            </Header>
            </LinearGradient>
        
        
    )
}

export default TopNav;