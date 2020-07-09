import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import RestaurantsStack from './RestaurantsStack'
import {BuscadorStack} from './BuscadorStack'
import {CuaentaStack} from './CuaentaStack'
import {FavoritosStack} from './FavoritosStack'
import {Icon} from 'react-native-elements'
import TopStack from './TopStack'

const tab = createBottomTabNavigator()

export default Navigation = () => {

  const opcionesPantalla = (route, color) => {
    let nombreIcono
    switch (route.name) {
      case 'Restaurantes': nombreIcono = "compass-outline"
        break

        case 'Favoritos' : nombreIcono = "heart-outline"  
        break

        case 'CuentaM' : nombreIcono = "home-outline"
         break

         case 'Buscador' : nombreIcono = "magnify"
         break
         case 'topS' : nombreIcono = "star-outline"

      default:
        break
    }

    return (<Icon type="material-community" name={nombreIcono} size={22} color={color}/>)
  }

  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Restaurantes"
        tabBarOptions={{
        inactiveTintColor: "#464646",
        activeTintColor: "#00a680"
      }}
        screenOptions={({route}) => ({
        tabBarIcon: ({color}) => opcionesPantalla(route, color)
      })}>
        <tab.Screen
          name="Restaurantes"
          component={RestaurantsStack}
          options={{
          title: 'Restaurantes'
        }}></tab.Screen>

        <tab.Screen
          name="Favoritos"
          component={FavoritosStack}
          options={{
          title: 'Favs'
        }}></tab.Screen>

        <tab.Screen
          name="CuentaM"
          component={CuaentaStack}
          options={{
          title: 'Cuentam'
        }}></tab.Screen>

        <tab.Screen
          name="topS"
          component={TopStack}
          options={{
            title:'restaurantes tops'
          }}
          
        />

        <tab.Screen
          name="Buscador"
          component={BuscadorStack}
          options={{
          title: 'Buscador'
        }}/>

      </tab.Navigator>
    </NavigationContainer>
  )
}
