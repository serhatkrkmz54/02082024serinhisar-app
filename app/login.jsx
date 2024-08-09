import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EkranAyirici from '../components/EkranAyirici'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { wp } from '../helpers/common'
const login = () => {
  const router = useRouter();
  return (
    <EkranAyirici>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router}/>
      </View>
    </EkranAyirici>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    flex:1,
    gap:45,
    paddingHorizontal: wp(5)
  }
})