import React from 'react'
import noteService from '../../utils/noteService'
import { View, Text, ScrollView, } from 'react-native'
import styled from '@emotion/native'
import NoteCard from '../NoteCard/NoteCard'
import Swipeout from 'react-native-swipeout'
import { onSessionWasInterrupted } from 'expo/build/AR'


const Container = styled.View`
    width: 90%;
    background-color: white;
    height: 100%;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;
    padding-top:20px;
    padding-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0px 10px 5px #cfcfcf;

`

class NotesList extends React.Component{
    state = {
        offset: 0,
        notes: []

    }
    refreshComponent = async () => {
        const notes = await noteService.getNotesForFolder(this.props.folder._id)
        this.setState({
            notes: notes
        })
    }
    wait = async (ms) =>{
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }
    onFocused = async () => {
        await this.wait(1000)
        const notes = await noteService.getNotesForFolder(this.props.folder._id)
            this.setState({
                notes: notes
            })
        
    }
    componentDidMount(){
        this.unsubscribe = this.props.navigation.addListener('focus', this.onFocused)
        this.refreshComponent()

    }
    componentWillUnmount(){
        this.props.navigation.removeListener('focus')
    }

    handleDelete = async (folderId, noteId) => {
        try{
            const response = await noteService.deleteNote(folderId, noteId)
            if(response.ok){
                const notes = this.state.notes.filter(note => note._id !== noteId)
                this.setState({
                    notes: notes
                })
            }
        }catch(error){
            // console.log('NotesList handle delete', error)
        }
    }
    render(){
        return(
            <Container style={{height: '75%'}}>
            <ScrollView >
                { this.state.notes.length > 0 ? this.state.notes.map((note, index)=> {
                    return(
                        <Swipeout 
                                sensitivity={10}
                                autoClose={true}
                                buttonWidth={60}
                                key={index}
                                right={
                                    [
                                        {
                                            text: 'Delete',
                                            backgroundColor: 'red',
                                            onPress: () =>this.handleDelete(note.folder,note._id)
                                    
                                        },
                                    ]
                                } 
                                backgroundColor='transparent' 
                                style={{
                                    height: 80,  
                                    shadowColor: '#000',
                                    shadowOffset: { 
                                        width: 0, 
                                        height: 1 
                                        },
                                    shadowOpacity: 0.5,
                                    shadowRadius: 3, }}
                            >
                        <NoteCard
                            navigation={this.props.navigation}
                            folder={this.props.folder}
                            note={note}
                            key={index}
                            title={note.title}
                            refreshComponent={this.refreshComponent}
                        />
                        </Swipeout>
                    )
                })
                : <Text style={{padding: 10, fontSize:16, textAlign: 'center'}}>Click the + button next to {this.props.folder.title} to add a note.</Text>}

                </ScrollView>
            </Container>
            
        )
    }
}

export default NotesList