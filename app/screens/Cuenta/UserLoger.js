import React from 'react';
import {View, Text, Button} from 'react-native';
import * as firebase from 'firebase'

const UserLoger = () => {
  const cerrarSesion = () => firebase.auth().signOut()
  return (
    <View>
      <Text>User Loger</Text>

      <Button title="cerrar sesion"
              onPress={cerrarSesion()}
      />
    </View>
  );
}

export default UserLoger;
