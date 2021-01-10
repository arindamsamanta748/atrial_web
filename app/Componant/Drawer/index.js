import React, {Component} from 'react';
import {Image, StyleSheet, Dimensions, ScrollView, ToastAndroid} from 'react-native';
import AuthService from '@Service/Auth';
import {Text, Icon, Container, View, Button} from 'native-base';
import NavigationService from '@Service/Navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import AuthService from '@Service/Auth';

const screenHeight = Math.round(Dimensions.get('window').height);

class MenuLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      userData: [],
      img_url:'http://unifiedvariables.in/dev-two/onile-vegitable-app/uploads/user/profile/',
      img:"https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
      mobile: '',
      email: '',
      user_id: '',
      prifile_id: '',
      user_img: '',
      cover_img: '',
      name: null,
    };
  }

  async componentDidMount() {
    await this.getAccount();
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.getAccount();
    });
  }

  // async getAccount(){
  //   let data = await AuthService.getAccount();
  //   console.log(data)
  //   this.setState({
  //       name: data.name
  //   });

  // }

  //   async componentDidMount() {

  //     await this.getAccount();

  // }


    async getAccount() {
      let data = await AuthService.getAccount();
      console.log("data",data);

      this.setState({
        userdata: data,
        name:data.name,
        user_id:data.user_id,
        user_name: data.user_name,
      });

      let meta = data.user_meta;
      let profile_image;
      // this.setState({
      //   img : "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
        
      // })

      if(meta !=null)
      {
         profile_image = meta.profile_image[0];

         this.setState({
           img : this.state.img_url + profile_image.meta_value,

         })
      }
      else
      {
        this.setState({
          img : "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
          
        })
      }

 

    }

  async logout() {
    // alert()
    ToastAndroid.show('Logout Successfully !!!', ToastAndroid.SHORT);
    await AuthService.logout();
    NavigationService.navigate('Login');
  }

  render() {
    return (
      <Container>
        <View style={styles.mainstyle}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height: 180, justifyContent: 'center'}}>

              <Image
                // blurRadius={1}
                source={require('@Assets/images/cover-bg.jpg')}
                style={{height: 180, resizeMode: 'cover', width: null}}
              />
              <View style={{position:'absolute',top:0,right:0}}>
                <Icon name="cross" type="Entypo" style={{color:'#000',}} onPress={() => {
                  NavigationService.closeDrawer();
                }}/>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  bottom: 50,
                  left: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    borderRadius: 70,
                    height: 70,
                    resizeMode: 'cover',
                    width: 70,
                    borderWidth: 0,
                    borderColor: '#fff',
                  }}
                  source={{uri:this.state.img}}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    marginLeft: 20,
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', color: '#000'}}>
                    {this.state.name}
                  </Text>
                  <Text style={{color: '#000', fontSize: 16}}>{this.state.user_name}</Text>
                  <TouchableOpacity
                  onPress={() => {NavigationService.navigate('Myprofile')}}
                  >
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#7eb749',
                      flexDirection: 'row',
                      alignSelf: 'baseline',
                    }}
                     
                  >
                    Edit Profile 
                  </Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>

            <View style={styles.menuitem}>
              {/* <Icon style={{fontSize:20,color:'#000'}} name="user" type="Entypo"/> */}
              <Image
                style={{width: 27, height: 27, resizeMode: 'contain'}}
                source={require('@Assets/images/io-1.png')}
              />
              <Text
                style={styles.sectionHeadingStyle}
                onPress={() => {NavigationService.navigate('Myprofile')}}
              >
                My Account
              </Text>
            </View>

            <View
              style={styles.menuitem}
              onTouchEnd={() => {
                NavigationService.navigate('Myorder');
              }}>
              {/* <Icon
            onPress={() => {NavigationService.navigate('Profile')}}
             style={{fontSize:20,color:'#000'}} name="profile" type="AntDesign"/> */}
              <Image
                style={{width: 27, height: 27, resizeMode: 'contain'}}
                source={require('@Assets/images/io-2.png')}
              />
              <Text
                style={styles.sectionHeadingStyle}
                onPress={() => {NavigationService.navigate('Myorder')}}
              >
                My Order
              </Text>
            </View>

            <View
              style={styles.menuitem}
              onTouchEnd={() => {
                NavigationService.navigate('Cart');
              }}>
              {/* <Icon
            onPress={() => {NavigationService.navigate('Invite')}}
             style={{fontSize:20,color:'#000'}} name="slideshare" type="Entypo"/> */}
              <Image
                style={{width: 27, height: 27, resizeMode: 'contain'}}
                source={require('@Assets/images/io-3.png')}
              />

              <Text
                style={styles.sectionHeadingStyle}
                onPress={() => {NavigationService.navigate('Cart')}}
              >
                My Cart
              </Text>
            </View>

            <View
              style={styles.menuitem}
              onTouchEnd={() => {
                NavigationService.navigate('Mywishlist');
              }}>
              {/* <Icon
            onPress={() => {NavigationService.navigate('Profile')}}
             style={{fontSize:20,color:'#000'}} name="settings" type="Feather"/> */}
              <Image
                style={{width: 27, height: 27, resizeMode: 'contain'}}
                source={require('@Assets/images/io-4.png')}
              />

              <Text
                style={styles.sectionHeadingStyle}
                onPress={() => {NavigationService.navigate('Mywishlist')}}
              >
                My Wishlist
              </Text>
            </View>

            <View
              style={styles.menuitem}
              onTouchEnd={() => {
                NavigationService.navigate('Contact');
              }}>
              {/* <Icon
            onPress={() => {NavigationService.navigate('Profile')}}
             style={{fontSize:20,color:'#000'}} name="settings" type="Feather"/> */}
              <Image
                style={{width: 27, height: 27, resizeMode: 'contain'}}
                source={require('@Assets/images/io-5.png')}
              />

              <Text
                style={styles.sectionHeadingStyle}
                onPress={() => {NavigationService.navigate('Contact')}}
              >
                Customer Support
              </Text>
            </View>

            {/* <View style={styles.menuitem}
            onTouchEnd={()=>this.logout()}
            onPress={() => {NavigationService.navigate('Register')}}
             >
            <Icon style={{fontSize:20,color:'#000'}} name="log-out" type="Feather"/>
              <Text style={styles.sectionHeadingStyle}>
              Logout
              </Text>
            </View> */}

            <View
              style={{
                marginTop: screenHeight/6,
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                // position:'absolute',
                // bottom:0
              }}>
              <Button
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={()=>this.logout()}
                // onPress={() => {
                //   this.handleLogin();
                // }}
              >
                <Image
                  style={{width: 27, height: 27, resizeMode: 'contain'}}
                  source={require('@Assets/images/logout.png')}
                />
                <Text style={styles.loginText}>Log Out</Text>
              </Button>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center"
  },
  sectionHeadingStyle: {
    marginLeft: 20,
    color: '#000',
    fontSize: 16,
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey',
  },
  navItemStyle: {},
  mainstyle: {
    backgroundColor: '#fff',
    height: screenHeight,
  },
  menuitem: {
    height: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#000',
  },
  footerbutton: {
    backgroundColor: '#fff',
    height: 120,
    // flex:2,
    // marginTop:20,
    // marginHorizontal:20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopWidth:.25,
    // borderTopColor:'#fff',
    paddingBottom: 10,
  },
  button: {
    // marginLeft:10,
    // paddingVertical:5,
    width: '80%',
    backgroundColor: '#e91e63',
    alignSelf: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '60%',
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#7eb749',
  },
  loginText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
    textTransform: 'capitalize',
  },
});

export default MenuLeft;
