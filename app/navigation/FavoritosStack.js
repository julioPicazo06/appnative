import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Favoritos from '../screens/Favoritos'

const Stack = createStackNavigator()
export const FavoritosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="fav"
        component={Favoritos}
        options={{
        title: 'Favoritos'
      }}/>
    </Stack.Navigator>
  )
}
