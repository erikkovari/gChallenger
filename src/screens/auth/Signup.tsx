import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Signup = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Signup Screen</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Signup;
