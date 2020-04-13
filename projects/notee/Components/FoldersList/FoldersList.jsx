import React from 'react'
import folderService from '../../utils/folderService'
import { Text, View } from 'react-native'


class FoldersList extends React.Component{
    state = {
        folders: null
    }
    async componentDidMount(){
        const folders = await folderService.getFoldersForUser()
        console.log('got folders from backend',folders)
        
        this.setState({
            state: folders
        })
     
    }
    render(){
        console.log(this.state.folders)
        return(
            <View>
                <Text>
                    {this.state.folders ? this.state.folders.map((folder,index) => {
                        return(
                            <View>
                                {folder.title}
                            </View>
                        )
                    }): 'no folders'}
                    
                </Text>
            </View>
        )
        }

}

export default FoldersList;