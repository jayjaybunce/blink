import React from 'react'
import styled, { css } from '@emotion/native'
import { Text, View, TouchableOpacity} from 'react-native'
import TopNav from '../TopNav/TopNav'
import FoldersList from '../FoldersList/FoldersList'
import { createStackNavigator } from '@react-navigation/stack'


const NoteeHome = props => {
    return (
        <View>
            <TopNav
                user={props.user}
                navigation={props.navigation}
            />
            <FoldersList/>
        </View>
    )
}

export default NoteeHome