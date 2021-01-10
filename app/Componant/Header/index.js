import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Header , Body, Title, Icon, Button} from 'native-base';
import NavigationService from '@Service/Navigation';

class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Header style={{backgroundColor: '#598bb7'}}>
          <StatusBar
            backgroundColor="#598bb7"
            barStyle="light-content"
            hidden={false}
          />
          <Body style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <Button
              transparent
              style={{position:'absolute',left:0}}
              onPress={() => {
                NavigationService.back();
              }}>
              <Icon style={{color: '#fff'}} name="md-arrow-back" />
            </Button>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
    );
  }
}

export default CustomHeader;
