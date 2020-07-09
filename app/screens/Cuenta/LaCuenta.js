import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase'
import UserLoger from './UserLoger'
import UserGuest from './UserGuest'
import Loading from '../../Components/Loading'

const LaCuenta = () => {

    const [login, setLogin] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            console.log(user)
            !user ? setLogin(false) : setLogin(true)
        })
    }, []);

    if(login === null) return <Loading isVisible={true} text="Cargando.."/>

  return login ? <UserLoger/> : <UserGuest/>

}

export default LaCuenta
