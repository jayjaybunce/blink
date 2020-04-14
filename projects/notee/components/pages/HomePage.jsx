import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LargeButton from '../LargeButton/LargeButton'
import styled, { css } from '@emotion/native'
import { LinearGradient } from 'expo-linear-gradient'
const AppTitle = styled.Text`
    font-size: 50px;
    text-align: center;
    margin-top: 50px;
    color: white;
    
    
`

const FlexContainer = styled.View`
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    height: 100%;
`





const HomePage = props => {
    
    return(
        <LinearGradient
            colors={['#833ab4','#fd1d1d','#fcb045']}
        >
            <FlexContainer>
                <AppTitle>
                    Notee
                </AppTitle>
                <View>
                    <LargeButton
                        navigation={props.navigation}
                        title='SIGN UP'
                        navTo='Signup'
                    />
                    <LargeButton 
                        navigation={props.navigation}
                        title='LOGIN'
                        secondary='true'
                        navTo='Login'

                    />
                </View>
            </FlexContainer>
        </LinearGradient>
    )
}

export default HomePage