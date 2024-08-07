import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EkranAyirici from '../components/EkranAyirici'
import Home from '../assets/icons/Home'

const login = () => {
  return (
    <EkranAyirici>
      <Text>Giriş yapma ekranı</Text>
      <Home />
    </EkranAyirici>
  )
}

export default login

const styles = StyleSheet.create({})