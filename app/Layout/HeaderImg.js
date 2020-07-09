import React from 'react'
import { Image} from 'react-native'
import {stylesLogin} from '../Styles/Styles'

export const HeaderImg = () => {
    return (
        <Image 
            source={require('../../assets/img/5-tenedores-letras-icono-logo.png')}
            resizeMode="contain"
            style={stylesLogin.logo}
        />
    )
}


