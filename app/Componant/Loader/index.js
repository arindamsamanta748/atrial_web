import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native'


function Loader(props) {
    return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )
}

const styles = StyleSheet.create({
    body:{

    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
})


export default Loader;