import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  Platform,
} from 'react-native';
import {Container, Icon, Button, Card, CardItem, Header} from 'native-base';
import NavigationService from '@Service/Navigation';
import Loader from '@Component/Loader';
import {WebView} from 'react-native-webview';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

const {width, height} = Dimensions.get('window');
export default class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      loading: false,
      user_details: {},
      user_id: '',
      data: '',
      img_url: '',
      visible: true,
    };
  }

  async componentDidMount() {
      setTimeout(()=>{
       this.setState({loading: false});
      },1000)
  }

  hideSpinner() {
    this.setState({visible: false, loading: false});
  }

  async displaySpinner() {
    alert();
    if (this.state.loading == true) {
      
      await this.setState({loading: false});
    }
  }

  render() {
    const {data} = this.state.data;
    return (
      <Container>
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
          hidden={false}
        />

        {this.state.loading ? (
          <Loader />
        ) : (
          <View
            style={{
              flex: 1,
              marginTop: Platform.OS === 'ios' ? 30 : 0
            }}>
            <WebView
              source={{uri: 'https://westernaf.com'}}
              startInLoadingState={true}
              showsVerticalScrollIndicator={false}
              //   renderLoading={() => {
              //     this.displaySpinner();
              //   }}
              onLoadStart={()=>{
                // this.displaySpinner();
              }}
            />
          </View>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  p: {
    // fontFamily: 'Montserrat-Regular',
    marginTop: 0,
    marginBottom: -50,
    textAlign: 'justify',
    lineHeight: 22,
    color: '#494e49',
    textAlign: 'justify',
    fontSize: 16,
  },
  h2: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: -50,
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
  h3: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: -50,
    fontSize: 18,
    // textAlign:'center'
  },
  h4: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: -50,
    fontSize: 16,
    // textAlign:'center'
  },
  h5: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: -50,
    fontSize: 16,
    // textAlign:'center'
  },
});
