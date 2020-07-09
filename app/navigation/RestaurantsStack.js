import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {TodosLosRestaurantes} from '../screens/TodosLosRestaurantes'

const Stack = createStackNavigator()
export default RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurantss"
        component={TodosLosRestaurantes}
        options={{
        title: "Restaurantes"
      }}/>
    </Stack.Navigator>
  )
}
