import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import { useRouter } from 'expo-router';

const ButtonGroup = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.primaryButton}
        textStyle={styles.primaryText}
        title="Giriş Yap"
        onPress={() => router.push('login')}
      />
      <Button
        buttonStyle={styles.secondaryButton}
        textStyle={styles.secondaryText}
        title="Kayıt Ol"
        hasShadow={false}
        onPress={() => router.push('signUp')}
      />
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  primaryButton: {
    backgroundColor: 'blue',
    marginHorizontal: 15,
    width:160
  },
  primaryText: {
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    width:160
  },
  secondaryText: {
    color: 'black',
  },
});