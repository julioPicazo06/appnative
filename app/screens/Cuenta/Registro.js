import React, { useRef } from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { registroS} from '../../Styles/Styles'
import { HeaderImg } from '../../Layout/HeaderImg'
import { FormularioRegistro } from '../../Components/Cuenta/FormularioRegistro'

// este componente es para que el menu no salga siempre al hacer focues en un input
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// con este llamamos un toast 
import Toast from 'react-native-easy-toast'

export const Registro = () => {
    const toastRef = useRef();
    return (
        <KeyboardAwareScrollView style={registroS.fondo}>
        <HeaderImg/>
            
        <View style={registroS.viewRegistro}>
            <FormularioRegistro toastRef={toastRef}/>
        </View>
        <Toast ref={toastRef} position="center" opacity={0.9} />
        </KeyboardAwareScrollView>
    )
}




