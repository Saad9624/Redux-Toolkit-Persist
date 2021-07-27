import React from 'react';
import {View,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/screens/login';

class App extends React.Component{

  componentDidMount(){
    SplashScreen.hide()

  }
  render(){
    return(
      <Login/>
    )
  }

}

export default App;