import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}
