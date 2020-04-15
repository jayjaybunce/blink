import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PageHeader from './components/PageHeader/PageHeader'
import SignUpForm from './components/SignUpForm/SignUpForm'
import userService from './utils/userService'
import MainStack from './components/MainStack/MainStack';
import SignUpPage from './components/pages/SignUpPage'
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'
import NoteeHome from './components/pages/NoteeHome';
import AccountPage from './components/pages/AccountPage'
import NewFolder from './components/NewFolder/NewFolder';
import EditFolder from './components/EditFolder/EditFolder';
import NotesPage from './components/pages/NotesPage';
import NewNoteForm from './components/NewNoteForm/NewNoteForm';
import EditNoteForm from './components/EditNoteForm/EditNoteForm';
const RootStack = createStackNavigator();
const Stack = createStackNavigator()
// const ModalStack = createStackNavigator();


class App extends React.Component{
  state = {
    user: null,
    
  }
  handleSignupOrLogin = async () => {
    let user = await userService.getUser()
    this.setState({
      user: user
    })
    
  }
  handleLogout = async () => {
    await userService.logout()
    this.setState({
      user: null
    })
    
  }
  async componentDidMount(){
    const token = await userService.getUser()
    
    this.setState({
      user: token
    })
    
  }
  render(){
    return (
      <NavigationContainer>
         {this.state.user ? 
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
                        user={this.state.user}
                        handleLogout={this.handleLogout}
                        
                    />
                    }
                    </Stack.Screen>
                    <Stack.Screen name='Account'>
                        {
                        props=>
                        <AccountPage
                            {...props}
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        />
                        }
                    </Stack.Screen>
                    <Stack.Screen name='NewFolder'>
                      {
                        props=>
                          <NewFolder
                            {...props}
                            handleLogout={this.handleLogout}
                            user={this.state.user}

                          />
                        
                      }
                    </Stack.Screen>
                    <Stack.Screen name='EditFolder'>
                      {
                        props=>
                          <EditFolder
                            {...props}
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                          />
                      }
                    </Stack.Screen>
                    <Stack.Screen name='NotesPage'>
                      {
                        props=>
                          <NotesPage
                            {...props}
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                          />
                      }
                    
                    </Stack.Screen>
                    <Stack.Screen name='NewNote'>
                      {
                        props=>
                        <NewNoteForm
                          {...props}
                        />
                      }
                    </Stack.Screen>
                    <Stack.Screen name='EditNote'>
                      {
                        props=>
                        <EditNoteForm
                          {...props}
                          user={this.state.user}
                          handleLogout={this.handleLogout}
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
                    user={this.state.user}
                    />
                }
                </Stack.Screen>
                <Stack.Screen name='Signup'>
                {
                    props=> 
                    <SignUpPage 
                        {...props} // SPREAD OPERATER NECESSARY TO PASS NAV PROPS
                        user={this.state.user}
                        handleSignupOrLogin={this.handleSignupOrLogin}
                    />
                }
                </Stack.Screen>
                <Stack.Screen name='Login'>
                {
                props=>
                <LoginPage
                    {...props}
                    handleSignupOrLogin={this.handleSignupOrLogin}
                />
                }
                </Stack.Screen>
      </Stack.Navigator>
         }
      </NavigationContainer>
    )
  }
  
  
}


// <RootStack.Navigator mode="modal"
// screenOptions={{
//   headerShown: false,
// }}
// >
// <RootStack.Screen name='Main'>
//   {
//     props=> 
//     <MainStack
//       {...props}
//       user={this.state.user}
//       handleLogout={this.handleLogout}
//       handleSignupOrLogin={this.handleSignupOrLogin}
//     />
//   }
// </RootStack.Screen>
// </RootStack.Navigator>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default App;