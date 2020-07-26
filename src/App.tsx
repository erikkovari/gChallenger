import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNav from './Navigation';

export const AppContext = React.createContext({});

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const auth = {
    login: () => setLoggedIn(true),
    signup: () => {
      console.log('signing up');
      setLoggedIn(true);
    },
    logout: () => setLoggedIn(false),
  };
  return (
    <AppContext.Provider value={{ ...auth }}>
      <NavigationContainer>
        <MainNav {...{ loggedIn }} />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
