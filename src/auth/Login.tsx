import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { AppContext } from '../App';

interface Props {
  navigation: object;
  onLoginSuccess: () => void;
}

const Login = ({ navigation }) => {
  const appCtx = React.useContext(AppContext);
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
        onPress={() => appCtx.login()}>
        <Text>LOGIN</Text>
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
        onPress={() => navigation.navigate('Signup')}>
        <Text>To SIGNUP</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
