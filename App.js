import React, {Component} from 'react';
import {Root, Icon} from 'native-base';
import { BackHandler, ToastAndroid,Linking,Alert} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from '@Service/Navigation';
import AuthService from '@Service/Auth';
import Loader from './app/Componant/Loader';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './app/Screens/index';

const AuthStack = createAppContainer(
  createStackNavigator(
    {
      Index: {
        screen: HomeScreen,
      },
    },
    {
      headerMode: 'none',
      initialRouteName: 'Index',
    },
  ),
);

class AppLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeAppStatus:false
    }
    this.handleBackButton = this.handleBackButton.bind(this);
    this._logData();
  }

  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('NewScreen');
  }
  
  handleBackButton = () => {
   Alert.alert(
       'Do You Want To Exit App',
       'Exiting the application?', [{
           text: 'Cancel',
           onPress: () => console.log('Cancel Pressed'),
           style: 'cancel'
       }, {
           text: 'OK',
           onPress: () => BackHandler.exitApp()
       }, ], {
           cancelable: false
       }
    )
    return true;
  } 
  

  
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }
  _logData = async () => {
    let data = await AuthService.getAccount();
    // this.props.navigation.navigate(data != null ? 'App' : 'Auth');
    this.props.navigation.navigate('Auth');
  };

  render() {
    return <Loader />;
  }
}

const Collect = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AppLoading,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default class App extends Component {
  render() {
    return (
      <Root>
        <Collect
          ref={(r) => {
            NavigationService.setTopLevelNavigator(r);
          }}
        />
      </Root>
    );
  }
}
