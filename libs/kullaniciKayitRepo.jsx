import axios from 'axios';
import { Alert } from 'react-native';

const REGISTER_ENDPOINT = 'http://127.0.0.1:8080/register';

const kullaniciKayitRepo = async (email, sifre) => {
    try{
        axios.post(REGISTER_ENDPOINT,{
            email: email,
            sifre: sifre
        })
    .then(response => {
        console.log("Kayıt Başarılı!", response.data);
    })
    }
    catch(error) {
        console.error("Kayıt isteği sırasında hata: ",error);
        Alert.alert('Kayıt Problemi!','Kayıt olmada problem var!');
    }
};

export default kullaniciKayitRepo;