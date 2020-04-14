import React from 'react'
import { Text, View } from 'react-native'
import styled, { css } from '@emotion/native'


const Header=styled.View`
    margin: 50px 0 0 0;
`
const Title=styled.Text`
    text-align: center;
    font-size: 30px;
    color: white;
`

const Description=styled.Text`
    text-align: center;
    font-size: 12px;
    color: white;
    margin: 10px 20px 0 20px;

`
const PageHeader = props => {
    return (
        <Header>
            <Title>
                {props.title}
            </Title>
            <Description>
                {props.description}
            </Description>
        </Header>
    )
}


export default PageHeader;