import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import ArrowLeft from './ArrowLeft'
import { theme } from '../../constants/theme'
import Mail from './Mail'
import Password from './Password'
import Facebook from '../icons/SocialMedia/Facebook'
import Google from '../icons/SocialMedia/Google'
import RePassword from './RePassword'


const icons= {
    home : Home,
    arrowLeft: ArrowLeft,
    mail: Mail,
    password: Password,
    facebook: Facebook,
    google: Google,
    repassword: RePassword

}
const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];

  return (
    <IconComponent
        heigth={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color = {theme.colors.secondary}
        {...props} />
  )
}

export default Icon

const styles = StyleSheet.create({})