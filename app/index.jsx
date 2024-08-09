import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import EkranAyirici from '../components/EkranAyirici';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const index = () => {
    const router = useRouter();
    const [loaded, error] = useFonts({
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <EkranAyirici>
      <Text>Anasayfa</Text>
      <Button title="Welcome" onPress={()=>router.push('welcome')} />
    </EkranAyirici>
  )
}

export default index