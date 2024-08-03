import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EkranAyirici from '../components/EkranAyirici'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'

const Welcome = () => {
  return (
    <EkranAyirici bg="white">
        <StatusBar style="dark" />
        <View style={styles.container}>
             <View style={styles.backgroundDaire} />
             <View style={styles.backgroundDaire2} />
            <View style={styles.backgroundKare} />
            <View style={styles.backgroundKare2} />
            <Image style={styles.anaLogo} resizeMode='contain' source={require('../assets/images/anaLogo.png')} />
        </View>
    </EkranAyirici>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingHorizontal: wp(4) 
    },
    backgroundDaire: {
        position: 'absolute',
        top: -90,
        right: -90,
        width: 350,
        height: 350,
        borderRadius: 350,
        backgroundColor: 'rgba(248, 249, 255, 0.8)'
    },
    backgroundDaire2: {
        position: 'absolute',
        top: -40,
        right: -40,
        width: 400,
        height: 400,
        borderRadius: 500,
        borderWidth: 5,
        borderColor: 'rgba(248, 249, 255, 0.8)',
    },
    backgroundKare: {
        position: 'absolute',
        bottom: -90,
        left: -200,
        width: 350,
        height: 350,
        borderWidth: 5,
        borderColor: 'rgba(248, 249, 255, 0.8)',
    },
    backgroundKare2: {
        position: 'absolute',
        bottom: -120,
        left: -90,
        width: 300,
        height: 300,
        borderWidth: 5,
        borderColor: 'rgba(248, 249, 255, 0.8)',
        transform: [{ rotate: '25deg' }],
    },
    anaLogo: {
        position: 'absolute',
        top:43,
    }
})