import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Games from '../screens/Games';
import { useState } from 'react';

const Auth = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const MainNav = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <Auth.Navigator headerMode="none">
        <Auth.Screen name="Login">
          {({ navigation }) => (
            <Login {...navigation} onLoginSuccess={() => setLoggedIn(true)} />
          )}
        </Auth.Screen>
        <Auth.Screen name="Signup" component={Signup} />
      </Auth.Navigator>
    );
  }

  return (
    <Drawer.Navigator
      drawerType="front"
      drawerContent={() => <Games />}
      drawerStyle={{
        width: '90%',
        marginTop: 40,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
      }}>
      <Drawer.Screen name="TabNav" component={TabNav} />
    </Drawer.Navigator>
  );
};

export default MainNav;
