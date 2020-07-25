import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Profile Screen</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Profile;
