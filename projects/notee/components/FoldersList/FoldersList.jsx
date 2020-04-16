import React from 'react'
import folderService from '../../utils/folderService'
import { Text, View } from 'react-native'
import styled from '@emotion/native'
import FolderCard from '../FolderCard/FolderCard'
import Swipeout from 'react-native-swipeout'


const Container = styled.View`
    width: 90%;
    background-color: white;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 10px 5px #cfcfcf;

`

class FoldersList extends React.Component{
    state = {
        folders: []
    }
    handleDelete = async (folderId) => {
        try{
            const res = await folderService.deleteFolder(folderId)
            if(res.status === 200){
                let folders = this.state.folders.filter(folder => folder._id !== folderId)
                this.setState({
                    folders: folders
                })
            }
        }catch(error){

        }
    }
    refreshComponent = async () => {
        const folders = await folderService.getFoldersForUser()
        
        this.setState({
            folders: folders
        })
    }
    handleEdit = (folderId) => {
        this.props.navigation.navigate('EditFolder',folderId)
        
    }
    async componentDidMount(){


            this.refreshComponent()

     
     
    }
    async componentWillReceiveProps(){

            this.refreshComponent()


    }
    render(){
        const swipeoutBtns = [
            {
                text: 'Delete',
                backgroundColor: 'red',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                onPress: (event) =>this.handleSubmit(event)
        
            },
            {
                text: 'Edit',
                backgroundColor: '#42f5f2',
                underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            }
        ]
        return(
            
            <Container>
                    {this.state.folders ? this.state.folders.map((folder,index) => {
                        return(
                            <Swipeout
                                key={index} 
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
                            <FolderCard
                            folder={folder} 
                            title={folder.title}
                            color={folder.color}
                            id={folder._id}
                            key={index}
                            navigation={this.props.navigation}
                            />
                            </Swipeout>
                        )
                    }): null}
                    
                
            </Container>
        )
        }

}

export default FoldersList;