import React from 'react';
import { View, Text , StyleSheet , ScrollView, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const UserGuest = () => {

   const navigation = useNavigation()

  return (
   <ScrollView centerContent={true}
                style={styles.viewBody}>
    <Image source={require("../../../assets/img/user-guest.jpg")}
            style={styles.imagen}
    />

    <Text style={styles.titulo}>Ingresa a tu perfil</Text>
    <Text  style={styles.contenido}>
            Texto de descripcion Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Minima neque ratione expedita porro, nobis, sunt facere eaque aspernatur accusamus,
             hic soluta? Voluptatem voluptates pariatur ipsa accusantium ut facere corporis eius. 
    </Text>
    <View style={styles.viewBtn}>
        <Button 
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
            title="ver tu perfil"
            onPress={()=> navigation.navigate("login")} />
    </View>
   </ScrollView>
  )
}

    const styles = StyleSheet.create({
        viewBody: {
            marginLeft : 30,
            marginRight : 30
        },
        imagen : {
            height : 300 ,
            width : "100%",
            marginBottom : 40
        },
        titulo : {
            fontWeight : 'bold',
            fontSize : 19,
            marginBottom:10,
            textAlign:'center'
        },
        contenido : {
           textAlign : "justify",
           color : "grey" 
        },
        viewBtn : {
            flex : 1 ,
            alignItems: "center"
        },
        btnStyle : {
            backgroundColor : "#00a680"
        },
        btnContainer : {width: '100%' , marginTop : 10}
    })


export default UserGuest;
