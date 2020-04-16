import React from 'react'
import noteService from '../../utils/noteService'
import { View, Text, ScrollView, } from 'react-native'
import styled from '@emotion/native'
import NoteCard from '../NoteCard/NoteCard'
import Swipeout from 'react-native-swipeout'


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
    onFocused = async () => {
        const notes = await noteService.getNotesForFolder(this.props.folder._id)
        this.setState({
            notes: notes
        })
    }
    componentDidMount(){
        this.refreshComponent()
        this._unsubscribe = this.props.navigation.addListener('focus', this.onFocused)

    }
    componentWillUnmount(){
        this._unsubscribe
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
                { this.state.notes ? this.state.notes.map((note, index)=> {
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
                                            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
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
                : null}

                </ScrollView>
            </Container>
            
        )
    }
}

export default NotesList