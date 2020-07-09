import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {Divider, Image, Header} from 'react-native-elements'
import {stylesLogin} from '../../Styles/Styles'
import {useNavigation} from '@react-navigation/native'
import { HeaderImg } from '../../Layout/HeaderImg'
export const Login = () => {

  return (
    <ScrollView>

    <HeaderImg/>

      <View style={stylesLogin.viewContainer}>
        <Text>Login Form</Text>
        <Text>{createAcount()}</Text>

      </View>
      <Divider style={stylesLogin.divider}/>

    </ScrollView>
  )
}

const createAcount = () => {

  const navigation = useNavigation()
  const irRegistro = () => {
    navigation.navigate('register')
  }
  return (
    <Text style={stylesLogin.textRegister}>
      Aun no tienes una cuenta
      <Text style={stylesLogin.btnTexto} onPress={irRegistro}>
        Registrate
      </Text>

    </Text>
  )
}
