const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

  drawerBg: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    width : '100%', 
    backgroundColor: '#370b70',
    height: deviceHeight / 6,
    
  },
  drawerImage: {
  
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 5,
    top: Platform.OS === "android" ? deviceHeight / 16 : deviceHeight / 13,
    resizeMode: "cover",
    
       
  },    
  drawerText: {
    position: "absolute",
    // left: Platform.OS === "android" ? deviceWidth / 3.5 : deviceWidth / 3.5,
     top: Platform.OS === "android" ? deviceHeight / 6 : deviceHeight / 6,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
  },
  drawerTextSub: {
    position: "absolute",
    // left: Platform.OS === "android" ? deviceWidth / 3.5 : deviceWidth / 3.5,
     top: Platform.OS === "android" ? deviceHeight / 5 : deviceHeight / 5,
    textAlign: 'center',
    fontSize: 14,
    color: '#FFF',
    // fontFamily: 'Montserrat-SemiBold',
  },
  text: {
    fontWeight:'500',
    fontSize: 14,
    marginLeft: 30,

    color: 'indigo',
    fontFamily: 'Montserrat-Regular',
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 18 : 18,
    fontWeight: "800",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined,
    justifyContent: "center",
  },
  divider: {
    // borderBottomWidth: 1,
    // borderColor: '#CCC',
    paddingBottom: 20,
    marginBottom: 20,
  },
  dividerNd: {
    // borderBottomWidth: 1,
    // borderColor: '#CCC',
    paddingBottom: 20,
    marginBottom: 20,
  },

};
