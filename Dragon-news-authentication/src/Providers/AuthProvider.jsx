import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true);


    const createuser= (email,password)=>
    {
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>
  {
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password);



  }

    const logOut=()=>
    {
        setloading(true)
        return signOut(auth)

    }
    
    useEffect(()=>{

     const unSubscribe=  onAuthStateChanged(auth,currentuser=>
            {
                console.log('user in the auth state changed',currentuser);
                setuser(currentuser)
                setloading(false)
            })

            return ()=>
            {
                unSubscribe();
            }


    },[])


    const authinfo={
        loading,
        user,
        createuser,
        logOut,
        signIn,
        
    }

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {
                    children
                }

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;