import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { theme } from '../constants/theme'

const BackButton = ({size=28, router}) => {
  return (
    <Pressable onPress={()=> router.back()} style={styles.backButton} >
      <Icon name="arrowLeft" strokeWidth={2.8} size={size} color={theme.colors.secondary} />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backButton: {
        alignSelf: 'flex-start',
        padding:5,
        borderRadius: 19,
        backgroundColor: 'rgba(0,0,0,0.07)'
    }
})