import React from 'react'
import noteService from '../../utils/noteService'
import { View, Text, ScrollView, } from 'react-native'
import styled from '@emotion/native'
import folderService from '../../utils/folderService'
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
        notes: null,
        offset: 0
    }
    async componentDidMount(){
        const notes = await noteService.getNotesForFolder(this.props.folder._id)
        this.setState({
            notes: notes
        })
    }
    async componentWillReceiveProps(){
        const notes = await noteService.getNotesForFolder(this.props.folder._id)
        this.setState({
            notes: notes
        })
    }

    render(){
        return(
            <Container>
            <ScrollView >
                { this.state.notes ? this.state.notes.map((note, index)=> {
                    return(
                        <Swipeout 
                                sensitivity={10}
                                autoClose={true}
                                buttonWidth={60}
                                right={
                                    [
                                        {
                                            text: 'Delete',
                                            backgroundColor: 'red',
                                            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                                            onPress: () =>this.handleDelete(folder._id)
                                    
                                        },
                                        {
                                            text: 'Edit',
                                            backgroundColor: '#42f5f2',
                                            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                                            onPress: () =>this.handleEdit({title: folder.title, color: folder.color, id: folder._id})
                                        }
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
                            key={index}
                            title={note.title}
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