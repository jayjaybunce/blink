import React from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import styled from '@emotion/native'

const Card = styled.TouchableOpacity`
    width: 98%;
    ${'' /* box-shadow: 0px 10px 5px #cfcfcf; */}
    color: black;
    height: 60px;
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
    line-height: 60px;



`

const NoteCard = props => {
    return(
        <Card onPress={() => props.navigation.navigate('EditNote', {folder: props.folder, note: props.note, refreshComponent: props.refreshComponent})}>
            <FolderTitle>
                {props.title}
            </FolderTitle>
        </Card>
    )
}

export default NoteCard;