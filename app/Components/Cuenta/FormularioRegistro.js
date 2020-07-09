import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {formularioS} from '../../Styles/Styles'
import {Input, Button, Icon} from 'react-native-elements'
import {validateEmail} from '../../util/Validator'
import {size, isEmpty} from 'lodash'
import * as firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'

export const FormularioRegistro = (props) => {
  const { toastRef } = props
  const navigation = useNavigation()
  console.log(toastRef)

  const [show,setShow] = useState(true)
  const [showRepeat,setShowRepeat] = useState(true)
  const [formState,setFormState] = useState(formDataDefault())
  const cambiarEstado = () => setShow(!show)
  const cambiarEstadoRepeat = () => setShowRepeat(!showRepeat)

  const onSubmmit = () => {
    console.log(formState)

    // console.log(validateEmail(formState.email))

    let vacio = isEmpty(formState.email) || isEmpty(formState.password) || isEmpty(formState.passwordRepeat)
    if (vacio) {
      toastRef.current.show("todos los campos son obligatorios" )
    } else if (!validateEmail(formState.email)) {
      toastRef.current.show('El email no es correcto')
    } else if (formState.password !== formState.passwordRepeat) {
      toastRef.current.show('Los passwords no coinciden')
    } else if (size(formState.password) < 6){
      toastRef.current.show('la contrase')
    }else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formState.email, formState.password)
        .then(res => { 
          
            // navigation.navigate("Cuentas")
            console.log('==============')
            console.log(res);
            console.log('=============');
            
        }
          )
        .catch(err => toastRef.current.show('El usuario ya existe'))
    }
  }

  const onChange = (e, type) => {

    const {text} = e.nativeEvent
    setFormState({
      ...formState,
      [type]: text
    })

  }

  return (
    <View style={formularioS.formContainer}>
      <Input
        placeholder="correo electronico"
        containerStyle={formularioS.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={< Icon type = "material-community" name = "at" iconStyle = {
        formularioS.iconStyleRigth
      }
      onPress = {
        () => console.log('aqui todo')
      } />}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={formularioS.inputForm}
        password={true}
        onChange={(e) => onChange(e, "password")}
        secureTextEntry={show? true: false}
        rightIcon={< Icon type = "material-community" name = {show? "eye-outline": "eye-off-outline"}
         iconStyle = {formularioS.iconStyleRigth}
         onPress = {() => cambiarEstado()} />}/>

      <Input
        placeholder="Repetir Contraseña"
        containerStyle={formularioS.inputForm}
        password={true}
        secureTextEntry={showRepeat ? true: false}
        onChange={(e) => onChange(e, "passwordRepeat")}
        rightIcon={< Icon type = "material-community" name = {showRepeat ? "eye-outline" : "eye-off-outline" }
        iconStyle = {formularioS.iconStyleRigth}
        onPress = {() => cambiarEstadoRepeat()} />}/>
      <View style={formularioS.btnRegistro}>
        <Button
          title="registrarse"
          containerStyle={formularioS.btnRegistro}
          onPress={() => onSubmmit()}
          buttonStyle={formularioS.btnColor}/>

      </View>

    </View>
  )
}

// funcion para crear un objeto contenedor
const formDataDefault = () => ({email: '', password: '', passwordRepeat: ''})
