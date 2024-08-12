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


const signUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const rePasswordRef = useRef("");
  const [loading, setLoading]= useState(false);
  const onSubmit = async () => {
      if(!emailRef.current || !passwordRef.current || !rePasswordRef.current){
        Alert.alert('Kayıt Ol', "Lütfen tüm alanları doldurun.",[{text: 'Tamam'}]);
        return;
      }
  }
  return (
    <EkranAyirici>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router}/>

        <View>
            <Text style={styles.girisYapText}>HESAP OLUŞTUR</Text>
            <Text style={styles.welcomeText}>Hesabınız yoksa platforma katılmak için hesap oluşturabilirsiniz!</Text>
        </View>

        <View style={styles.form}>
          <Input 
          icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
          placeholder="E-Mail adresi belirleyin"
          placeholderTextColor={'#626262'}
          onChangeText={value=> emailRef.current = value}
          />
          <Input 
          icon={<Icon name="password" size={26} strokeWidth={1.6} />}
          placeholder="Parola belirleyin"
          secureTextEntry
          placeholderTextColor={'#626262'}
          onChangeText={value=> passwordRef.current = value}
          />
          <Input 
          icon={<Icon name="repassword" size={26} strokeWidth={1.6} />}
          placeholder="Parolayı tekrar girin"
          secureTextEntry
          placeholderTextColor={'#626262'}
          onChangeText={value=> rePasswordRef.current = value}
          />
          <View style={{marginTop:10}}>
          <Button title={'Kaydı Tamamla'} loading={loading} onPress={onSubmit} hasShadow={true} /></View>
        </View>
        <View style={styles.socialMediaFooter}>
        <Pressable>
          <Text style={styles.platformGirisText} onPress={()=>router.push("login")}>
            Hesabıma giriş yapmak istiyorum
          </Text>
        </Pressable>
        </View>
      </View>
    </EkranAyirici>
  )
}

export default signUp

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
    fontSize: 14,
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