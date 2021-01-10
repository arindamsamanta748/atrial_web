import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {
  Header,
  Body,
  Title,
  Icon,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'native-base';
import NavigationService from '@Service/Navigation';
// const {width, height} = Dimensions.get('window');

class CustomFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateBotom = async active => {
    alert(active);
  };

  render() {
    return (
      <View
        style={{
          height: 60,
          width: width,
          backgroundColor: '#fff',
          // position: 'absolute',
          zIndex: 999,
          //   paddingVertical:10,
          elevation: 8,
          // bottom:0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          // alignItems:'center'
        }}>
        <View style={styles.botomIcon}>
          <TouchableOpacity onPress={this.navigateBotom.bind(this, 'Cart')}>
            <Icon
              name="shoppingcart"
              type="AntDesign"
              style={{fontSize: 23, color: '#ccc'}}
            />
          </TouchableOpacity>
          <Text style={{color: '#ccc'}}>Cart</Text>
        </View>

        <View style={styles.botomIcon}>
          <TouchableOpacity onPress={this.navigateBotom.bind(this, 'Wishlist')}>
            <Icon
              name="hearto"
              type="AntDesign"
              style={{fontSize: 23, color: '#ccc'}}
            />
          </TouchableOpacity>
          <Text style={{color: '#ccc'}}>Wishlist</Text>
        </View>

        <View style={styles.botomIcon}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 60,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 30,
              elevation: 8,
            }}>
            <TouchableOpacity onPress={this.navigateBotom.bind(this, 'Home')}>
              <Icon name="home" type="AntDesign" style={{color: '#7eb749'}} />
            </TouchableOpacity>
          </View>
          <View style={{position: 'absolute', bottom: 10}}>
            <Text>Home</Text>
          </View>
        </View>

        <View style={styles.botomIcon}>
          <TouchableOpacity onPress={this.navigateBotom.bind(this, 'Feedback')}>
            <Icon
              name="copy1"
              type="AntDesign"
              style={{fontSize: 23, color: '#ccc'}}
            />
          </TouchableOpacity>
          <Text style={{color: '#ccc'}}>Feedback</Text>
        </View>

        <View style={styles.botomIcon}>
          <TouchableOpacity onPress={this.navigateBotom.bind(this, 'Me')}>
            <Icon
              name="user"
              type="AntDesign"
              style={{fontSize: 23, color: '#ccc'}}
            />
          </TouchableOpacity>
          <Text style={{color: '#ccc'}}>Me</Text>
        </View>
      </View>
    );
  }
}

export default CustomFooter;

const styles = StyleSheet.create({
  botomIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // backgroundColor: '#000',
    width: width / 5,
  },
});
