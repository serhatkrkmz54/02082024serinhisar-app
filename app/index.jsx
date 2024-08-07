import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import EkranAyirici from '../components/EkranAyirici';

const index = () => {
    const router = useRouter();
  return (
    <EkranAyirici>
      <Text>Anasayfa</Text>
      <Button title="Welcome" onPress={()=>router.push('welcome')} />
    </EkranAyirici>
  )
}

export default index