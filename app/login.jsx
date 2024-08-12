import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import EkranAyirici from '../components/EkranAyirici'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Input from '../components/Input'
import Icon from '../assets/icons'
import Button from '../components/Button';


const login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading]= useState(false);
  const onSubmit = async () => {
      if(!emailRef.current || !passwordRef.current){
        Alert.alert('Giriş', "Lütfen tüm alanları doldurun.",[{text: 'Tamam'}]);
        return;
      }
  }
  return (
    <EkranAyirici>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router}/>

        <View>
            <Text style={styles.girisYapText}>GİRİŞ YAP</Text>
            <Text style={styles.welcomeText}>Serinhisar Platformuna {'\n'} Hoşgeldiniz!</Text>
        </View>

        <View style={styles.form}>
          <Input 
          icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
          placeholder="E-Mail adresinizi giriniz"
          placeholderTextColor={'#626262'}
          onChangeText={value=> emailRef.current = value}
          />
          <Input 
          icon={<Icon name="password" size={26} strokeWidth={1.6} />}
          placeholder="Parolayı giriniz"
          secureTextEntry
          placeholderTextColor={'#626262'}
          onChangeText={value=> passwordRef.current = value}
          />
          <Text style={styles.forgotPass}>
            Parolamı Unuttum!
          </Text>
          <View style={{marginTop: -20}}>
          <Button title={'Giriş Yap'} loading={loading} onPress={onSubmit} hasShadow={true} /></View>
          <Pressable>
          <Text style={styles.kayitOlText} onPress={()=>router.push("signUp")}>
            Yeni kullanıcı oluştur!
          </Text>
          </Pressable>
        </View>
        <View style={styles.socialMediaFooter}>
          <Text style={styles.platformGirisText}>
            Aşağıdaki platformlar ile de giriş yapabilirsiniz
          </Text>
          <View style={styles.socialMediaButton}>
            <Icon name="facebook" width={36} height={36} strokeWidth={1.1} />
            <Icon name="google" width={35} height={35} strokeWidth={1.1} />
          </View>
        </View>
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
  },
  girisYapText: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.maviRenk,
    textAlign: "center",
    padding: 26,
    fontFamily: 'Poppins-Bold'
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.black,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold"
  },
  form: {
    gap:29
  },
  forgotPass: {
    color: theme.colors.maviRenk,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    textAlign: 'right',
    top: -5
  },
  kayitOlText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#494949',
    fontSize: 14,
    textAlign: 'center'
  },
  socialMediaFooter: {
    flex:2,
    gap:10,
    marginTop: 10
  },
  platformGirisText: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: theme.colors.maviRenk,
    fontSize: 14
  },
  socialMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  }
})