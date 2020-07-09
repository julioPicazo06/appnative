import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Buscador from '../screens/Buscador'


const Stack = createStackNavigator()
export const BuscadorStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Buscador"
                component={Buscador}
                options={{
                    title : 'Buscador'
                }}
            
            />

        </Stack.Navigator>
    )
}
