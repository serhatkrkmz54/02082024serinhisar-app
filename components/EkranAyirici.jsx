import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const EkranAyirici = ({children}) => {
    const {top} = useSafeAreaInsets();
    const paddingTop = top>0? top+5: 30;
  return (
    <View style= {{flex:1, paddingTop}}>
      {/* Arkaplan daire ve kare çizimleri burada işleniyor. */}
      <View style={styles.backgroundDaire} />
      <View style={styles.backgroundDaire2} />
      <View style={styles.backgroundKare} />
      <View style={styles.backgroundKare2} />
      {/* Bitiş */}
      {children}
    </View>
  )
};
const styles = StyleSheet.create({
    backgroundDaire: {
    position: 'absolute',
    top: -90,
    right: -90,
    width: 350,
    height: 350,
    borderRadius: 350,
    backgroundColor: 'rgba(237, 240, 250, 0.8)',
  },
  backgroundDaire2: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 400,
    height: 400,
    borderRadius: 500,
    borderWidth: 5,
    borderColor: 'rgba(237, 240, 250, 0.8)',
  },
  backgroundKare: {
    position: 'absolute',
    bottom: -90,
    left: -200,
    width: 350,
    height: 350,
    borderWidth: 5,
    borderColor: 'rgba(237, 240, 250, 0.8)',
  },
  backgroundKare2: {
    position: 'absolute',
    bottom: -120,
    left: -90,
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: 'rgba(237, 240, 250, 0.8)',
    transform: [{ rotate: '25deg' }],
  },
})

export default EkranAyirici