/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
 export const AuthContext =createContext(null);

 const AuthProvider = ({children}) => {


    const[user,setUser]=useState(null)

    const createUser=(email,password)=>
    {
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signInuser =(email,password)=>
    {
        return signInWithEmailAndPassword(auth,email,password)

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current value of the current user', currentUser);
            setUser(currentUser);
            
        });
        return () => {
            unSubscribe();
        }
    }, [])




    const authinfo={user,createUser,signInuser}

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    AuthProvider:PropTypes.node
    
}

