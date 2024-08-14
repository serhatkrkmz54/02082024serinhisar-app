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
import axios from 'axios';

const signUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const rePasswordRef = useRef("");
  const [mesaj, setMesaj] = useState("");
  const [loading, setLoading]= useState(false);
  const LOGIN_ENDPOINT = 'http://10.0.2.2:8090/register';

  const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };
  const onSubmit = () => {
    if(!email || !sifre || !rePasswordRef.current) {
    Alert.alert('HATA', 'Lütfen tüm alanları doldurun!', [{text:'Tamam'}])
    return;
    }
    if (!validateEmail(email)) {
    Alert.alert('HATA', 'Geçerli bir e-posta adresi girin!', [{ text: 'Tamam' }]);
    return;
      }
     if(sifre !== rePasswordRef.current) {
         Alert.alert('HATA', 'Parolalar uyuşmuyor!', [{text:'Tamam'}]);
         return;
     }
      setLoading(true);
      axios.post(LOGIN_ENDPOINT, {
      email: email,
      sifre: sifre,
    })
    .then(response => {
    setLoading(false); 
    Alert.alert('Kayıt Başarılı', 'Giriş sayfasına giderek giriş yapabilirsiniz.', [{ text: 'Tamam' }]);
    setEmail('');
    setSifre('');
  })
  .catch(error => {
      setLoading(false); 
      if (error.response && error.response.status === 409) {
        // HTTP 409 durumu, e-posta zaten kayıtlı olduğu anlamına gelir.
        Alert.alert('Kayıt Hatası', 'Bu e-posta adresi zaten kayıtlı. Başka bir e-posta ile deneyin', [{ text: 'Tamam' }]);
      } else {
        Alert.alert('Kayıt Hatası', 'Lütfen bilgilerinizi kontrol edip tekrar deneyin.');
      }
  });

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
          value={email}
          onChangeText={setEmail}
          />
          <Input 
          icon={<Icon name="password" size={26} strokeWidth={1.6} />}
          placeholder="Parola belirleyin"
          secureTextEntry
          value={sifre}
          placeholderTextColor={'#626262'}
          onChangeText={setSifre}
          />
          <Input 
          icon={<Icon name="repassword" size={26} strokeWidth={1.6} />}
          placeholder="Parolayı tekrar girin"
          secureTextEntry
          placeholderTextColor={'#626262'}
          onChangeText={value=> rePasswordRef.current = value}
          />
          <View style={{marginTop:10}}>
          <Button title={'Kaydı Tamamla'} loading={loading} onPress={onSubmit} hasShadow={true} />
          {mesaj ? <Text>{mesaj}</Text> : null}
          </View>
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