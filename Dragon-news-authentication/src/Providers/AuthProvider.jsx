import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)

    const createuser= (email,password)=>
    {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>
  {
    return signInWithEmailAndPassword(auth,email,password);



  }

    const logOut=()=>
    {
        return signOut(auth)

    }
    
    useEffect(()=>{

     const unSubscribe=  onAuthStateChanged(auth,currentuser=>
            {
                console.log('user in the auth state changed',currentuser);
                setuser(currentuser)
            })

            return ()=>
            {
                unSubscribe();
            }


    },[])


    const authinfo={
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