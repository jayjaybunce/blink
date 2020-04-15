import React from 'react'
import { Text, TouchableOpacity, View, TextInput, Keyboard, ScrollView} from 'react-native'
import styled from '@emotion/native'
import { LinearGradient } from 'expo-linear-gradient'
import KeyboardListener from 'react-native-keyboard-listener'
import noteService from '../../utils/noteService'
const Container = styled.View`
    width: 95%
    height: 95%
    background-color: white;
    padding: 5px;
`
const NoteField = styled.TextInput`
    width: 100%;
    height: 100%;
    font-size: 20px;
    ${'' /* background-color: red; */}
    vertical-align: top;
    padding: 10px;
    overflow: scroll;

`
const Header = styled.View`
    height: 50px

`
const ToolBar = styled.View`
    height: 35px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;


`
const SaveButton = styled.TouchableOpacity`
    width: 75%;
    height: 100%;
    background-color: #2899fc;
`
const DeleteButton = styled.TouchableOpacity`
    width: 25%;
    height: 100%;
    background-color: #ff3c26;
    color: white;
    
`
const ButtonText = styled.Text`
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    font-weight: bold;
    color: white;
`

class EditNoteForm extends React.Component{
    state = {
        folder: this.props.route.params.folder,
        keyboardOpen: false,
        content: this.props.route.params.note.content
            
        
    }
    
    async componentWillUnmount(){
        if(this.state.content !== '' && this.state.content !== null){
            const note = {
                ...this.props.route.params.note,
                content: this.state.content
            }
            try{
                const response = await noteService.updateNote(this.state.folder._id, note)
                
            }catch(error){
                
            }
        }
    }
    handleChange = e => {
       
        this.setState({
            content: e
        })
    }

    render(){
        return(
            <>
            <LinearGradient
            colors={['#833ab4','#1debfd','#1dfd79']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            
            >
            <Header/>
            </LinearGradient>
            <Container>
            <KeyboardListener 
                onWillShow={() => this.setState({ keyboardOpen: true})}
                onWillHide={() => this.setState({ keyboardOpen: false})}
            />
                <ScrollView style={this.state.keyboardOpen ? {height: '60%'} : {height: '100%'}}>
                <NoteField 
                placeholder='Start your note here!'
                numberOfLines={100}
                multiline={true} value={this.state.content} onChangeText={this.handleChange}>
                    
                </NoteField>
                </ScrollView>
            </Container>
            </>
        )
    }
}

export default EditNoteForm;