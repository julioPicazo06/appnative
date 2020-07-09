import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LaCuenta from '../screens/Cuenta/LaCuenta'
import { Login } from '../screens/Cuenta/Login'
import { Registro } from '../screens/Cuenta/Registro'

const Stack = createStackNavigator()
export const CuaentaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cuentas"
        component={LaCuenta}
        options={{
        title: 'Cuentas'
      }}/>

      <Stack.Screen
            name="login"
            component={Login}
            options={
              {
                title: 'Iniciar sesion'
              }
            }
      />

      <Stack.Screen 
      name="register"
      component={Registro}
      options={{
          title: 'Registrar'
      }}
      />

    </Stack.Navigator>
  )
}
