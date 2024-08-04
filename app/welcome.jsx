import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EkranAyirici from '../components/EkranAyirici'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

const Welcome = () => {
      const [loaded, error] = useFonts({
            'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
            'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
            'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
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
    <EkranAyirici bg="white">
        <StatusBar style="dark" />
        <View style={styles.container}>
             <View style={styles.backgroundDaire} />
             <View style={styles.backgroundDaire2} />
            <View style={styles.backgroundKare} />
            <View style={styles.backgroundKare2} />
            <Image style={styles.anaLogo} resizeMode='contain' source={require('../assets/images/anaLogo.png')} />
            <View style={{gap:20}}>
                <Text style={styles.serinText}>
                <Text style={styles.hisarText}>SERİN</Text>HİSAR</Text>
                <Text style={styles.welcomeText1}>Serinhisar için{"\n"}büyük yenilik!</Text>
                <Text style={styles.welcomeText2}>İçeride olanı keşfetmek için iki seçeneğin var! {"\n"}Giriş yap ya da Kayıt ol!</Text>
            </View>
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
        alignSelf: 'center',
        height: 165,
        width: 166
    },
    serinText: {
        color: theme.colors.serinText,
        fontSize: hp(7),
        textAlign: 'center',
        fontWeight: 'ExtraBold',
        fontFamily: 'Poppins-ExtraBold',
        textShadowColor: '#000',
        shadowOpacity: 0.1,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        elevation: 5,
    },
    hisarText: {
        color: theme.colors.hisarText,
        fontSize: hp(7),
        textAlign: 'center',
        fontFamily: 'Poppins-ExtraBold'
    },
    welcomeText1: {
        color: theme.colors.maviRenk,
        fontSize: hp(4),
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold'
    },
    welcomeText2: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular'
    }
})