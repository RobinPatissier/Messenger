/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import {
  GluestackUIProvider,
  Text,
  Center,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Register from './screen/auth/register';
import Login from './screen/auth/login';
import auth from '@react-native-firebase/auth';
import AuthStack from './routes/AuthStack';
import HomeStack from './routes/HomeStack';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <GluestackUIProvider config={config}>
       <NavigationContainer>
        <AuthStack/>
       </NavigationContainer>
      </GluestackUIProvider>
    );
  }

  return (
    <GluestackUIProvider config={config}>
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
   </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
