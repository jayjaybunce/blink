import React from 'react'
import styled, { css } from '@emotion/native'
import { Text, View, TouchableOpacity} from 'react-native'
import TopNav from '../TopNav/TopNav'
import FoldersList from '../FoldersList/FoldersList'
import { createStackNavigator } from '@react-navigation/stack'
import { useIsFocused } from '@react-navigation/native'




const NoteeHome = props => {
    const isFocused = useIsFocused()
    return (
        
        <View>
            <TopNav
                user={props.user}
                navigation={props.navigation}
            />
            <Text>Your Folders</Text>
            <FoldersList 
            isFocused={isFocused}/>
        </View>
    )
}

export default NoteeHome