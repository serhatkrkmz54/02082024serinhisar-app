import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import ArrowLeft from './ArrowLeft'
import { theme } from '../../constants/theme'


const icons= {
    home : Home,
    arrowLeft: ArrowLeft

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