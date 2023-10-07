import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const AuthContext =createContext(null);
const googleprovider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const [loading,setloading]=useState(true)


    //google login.
    const googleLogin=()=>
    {
        setloading(true)
        return signInWithPopup(auth,googleprovider)

    }
    
    //signup.
    
    const createUser=(email,password)=>
    {
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //sign in user

    const  signin =(email,password)=>
    {
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password);


    }

    //logout

    const logOut=()=>
    {
        return signOut(auth)

    }

     


    //onauthchangeprovider observer

    useEffect(()=>
    {
        onAuthStateChanged(auth,(user)=>
        {
            setUser(user)

            setloading(false)


        });

    },[])


    //  useEffect(()=>{
        // const unSubscribe=onAuthStateChanged(auth,(user)=>
        // {
        //     setUser(user)

        // });
        
        // return ()=>
        // {
        //     unSubscribe()
        // }
    // },[])

    console.log(user)





    const authentications={
        googleLogin,
        createUser,
        signin,
        logOut,
        user,
        loading,
        

    


    }

    
    return (
        <AuthContext.Provider value={authentications}>

            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;