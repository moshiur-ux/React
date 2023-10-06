import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const AuthContext =createContext(null);
const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)


    //google login.
    const googleLogin=()=>
    {
        return signInWithPopup(auth,googleprovider)

    }
    
    //signup.
    
    const createUser=(email,password)=>
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //sign in user

    const  signin =(email,password)=>
    {
        return signInWithEmailAndPassword(auth,email,password);


    }


    //onauthchangeprovider observer

    useEffect(()=>
    {
        onAuthStateChanged(auth,(user)=>
        {
            setUser(user)


        });

    },[])
    console.log(user)





    const authentications={
        googleLogin,
        createUser,
        signin,

    


    }

    
    return (
        <AuthContext.Provider value={authentications}>

            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;