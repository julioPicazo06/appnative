import React from 'react'
import {StyleSheet} from 'react-native'

export const stylesLogin = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
    paddingTop: 20
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15
  },
  btnTexto: {
    color: '#00a688',
    fontWeight: "bold"
  },
  divider: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30
  }
})

export const registroS = StyleSheet.create({
  viewRegistro : {
    marginLeft : 20,
    marginRight : 20,
    marginTop: 20
  },
  fondo : {
    backgroundColor: "white"
  }
})


export const formularioS = StyleSheet.create({
  formContainer : {
    flex:1 ,
    alignItems: "center",
    justifyContent : "center" ,
    marginTop : 30
  },
  inputForm : {
    width : "100%",
    marginTop : 20,
    borderWidth:1,
    borderColor: "#00a688"
  
  },
  btnRegistro : {
    marginTop:9,
    width: "100%"
  },
  btnColor : {
    backgroundColor : "#00a680",
    padding:11
   
  
  },
  iconStyleRigth : {
    color : "#c1c1c1"
  }
})