import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

interface Props {
  navigation: object;
  onLoginSuccess: () => void;
}

const Login = ({ navigation, onLoginSuccess }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TouchableHighlight
        style={{
          width: 100,
          height: 25,
          marginVertical: 25,
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onLoginSuccess}>
        <Text>LOGIN</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
