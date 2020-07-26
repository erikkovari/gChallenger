import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';

const Auth = createStackNavigator();

const AuthNav = () => {
  return (
    <Auth.Navigator headerMode="none">
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Signup" component={Signup} />
    </Auth.Navigator>
  );
};

export default AuthNav;
