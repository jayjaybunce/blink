import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from '@emotion/native'

const Card = styled.View`
    width: 98%;
    ${'' /* box-shadow: 0px 10px 5px #cfcfcf; */}
    color: black;
    height: 40px;
    margin: 0 auto;
    margin-top: 0px;
    padding-left: 10px;
    display: flex;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    background-color: white;
`
const FolderTitle = styled.Text`
    font-size: 30px;



`
const ColorSwatch = styled.View`
    height: 40px;
    
    display: block;
    width: 40px;

    
`
const FolderCard = props => {
    return(
        <Card>
            <FolderTitle>
                {props.title}
            </FolderTitle>
            <ColorSwatch style={{backgroundColor: props.color}}/>
        </Card>
    )
}


export default FolderCard;