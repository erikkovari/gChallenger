import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { AppContext } from '../App';

const Signup = ({ navigation }) => {
  const appCtx = React.useContext(AppContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <TouchableHighlight
        style={{
          width: 100,
          height: 25,
          marginVertical: 25,
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => appCtx.signup()}>
        <Text>SIGNUP</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={{
          width: 100,
          height: 25,
          marginVertical: 25,
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text>To Login</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Signup;
