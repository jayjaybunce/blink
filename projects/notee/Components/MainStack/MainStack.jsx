import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import NoteeHome from '../pages/NoteeHome';
import AccountPage from '../pages/AccountPage'

const MainStack = props => {
    return(
        props.user ? 
            <Stack.Navigator
        
            screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#EDEDFB'}
            }}
            >
                <Stack.Screen name='Notee'>
                    {
                    props=>
                    <NoteeHome
                        {...props}
                        user={props.user}
                        handleLogout={props.handleLogout}
                        
                    />
                    }
                    </Stack.Screen>
                    <Stack.Screen name='Account'>
                        {
                        props=>
                        <AccountPage
                            {...props}
                            user={props.user}
                            handleLogout={props.handleLogout}
                        />
                        }
                    </Stack.Screen>
          
            </Stack.Navigator>
        :
            <Stack.Navigator
                screenOptions={{headerShown: false}}
            > 
                <Stack.Screen name='Home'>
                {
                    props=> 
                    <HomePage
                    {...props}
                    user={props.user}
                    />
                }
                </Stack.Screen>
                <Stack.Screen name='Signup'>
                {
                    props=> 
                    <SignUpPage 
                        {...props} // SPREAD OPERATER NECESSARY TO PASS NAV PROPS
                        user={props.user}
                        handleSignupOrLogin={props.handleSignupOrLogin}
                    />
                }
                </Stack.Screen>
                <Stack.Screen name='Login'>
                {
                props=>
                <LoginPage
                    {...props}
                    handleSignupOrLogin={props.handleSignupOrLogin}
                />
                }
                </Stack.Screen>
      </Stack.Navigator>
    )
}

export default MainStack;