import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Home = ({ navigation, logout }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableHighlight
        style={{
          width: 100,
          height: 25,
          marginVertical: 25,
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={logout}>
        <Text>LOGOUT</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Home;
