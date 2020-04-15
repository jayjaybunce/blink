import React from 'react'
import styled, { css } from '@emotion/native'
import { Text, View, TouchableOpacity, ScrollView} from 'react-native'
import TopNav from '../TopNav/TopNav'
import { useIsFocused } from '@react-navigation/native'
import NotesList from '../NotesList/NotesList'

const Title = styled.Text`
    font-size: 50px;
    width: 100%;
    color: white;
    text-align: center;
    margin-top: 20px;
`
const ColorBar = styled.View`
    width: 100%;
    height: 20px;
    display: block;
    border-radius: 10px;
    margin: 0 auto;
`
const AddNoteButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 50%;

`
const ButtonText = styled.Text`
    
    font-size: 40px;
    color: white;
    text-align: center;
    overflow: hidden;
    line-height: 50px;

`

const Header = styled.View`
    width: auto;
    max-width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const NotesPage = props => {
        const isFocused = useIsFocused()
        return(
            <View>
                <TopNav
                    user={props.user}
                    navigation={props.navigation}
                />
                <Header>
                    <Title>
                        {props.route.params.folder.title}
                    </Title>
                    <AddNoteButton 
                        onPress={() => props.navigation.navigate('NewNote', {folder: props.route.params.folder})}
                    style={{backgroundColor: props.route.params.folder.color}}>
                        <ButtonText>
                            ＋
                        </ButtonText>
                    </AddNoteButton>
                    </Header>
                <ColorBar style={{backgroundColor: props.route.params.folder.color}}/>
                <NotesList
                    navigation={props.navigation}
                    isFocused={isFocused}
                    folder={props.route.params.folder}
                />
            </View>
        )

}

export default NotesPage;
