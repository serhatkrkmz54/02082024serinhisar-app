import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';
import Loading from './Loading';

const Button = ({
    buttonStyle,
    textStyle,
    title = '',
    onPress = () => {},
    loading = false,
    hasShadow = true,
}) => {
  const shadowStyle = {
    shadowColor: '#CBD6FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  };
  if(loading) {
    return(
      <View style={[styles.button,buttonStyle,{backgroundColor:'white'}]}>
        <Loading/>
      </View>
    )
  };
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.maviRenk,
    height: hp(6.6),
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderCurve: 'continuous',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
});