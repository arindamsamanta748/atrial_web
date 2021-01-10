import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { Container } from 'native-base';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
      <StatusBar barStyle="light-content" hidden={true} />
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Image style={{ width: '100%', height: '100%',resizeMode:'cover'}} source={require('@Assets/images/logo.png')}/>
       </View>
      </Container>
    );
  }
}
