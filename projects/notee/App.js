import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import NetInfo from '@react-native-community/netinfo'
import { createStackNavigator } from '@react-navigation/stack'
import userService from './utils/userService'
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

const Stack = createStackNavigator()


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
  // handleNetworkChange = (netInfo) => {
  //   if(netInfo.isConnected === true && this.state.userIsOnline !== true){
  //     this.setState({
  //       ...this.state,
  //       userIsOnline: true
  //     })
  //     alert('app is online')
  //   }else if(netInfo.isConnected === false && this.state.userIsOnline !== false){
  //     this.setState({
  //       ...this.state,
  //       userIsOnline: false
  //     })
  //     alert('app is offline')
  //   }

  // }
  async componentDidMount(){
    // unsubscribe = NetInfo.addEventListener(state => {
    //   this.handleNetworkChange(state)
    // });
    try{
      const token = await userService.getUser()

      this.setState({
        user: token
      })
    }catch(e){
      
    }
    
    
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
                        {...props}
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


export default App;