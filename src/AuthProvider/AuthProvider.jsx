import { auth } from '@/Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';



export const AuthContext = createContext()
const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(true)
   const provider = new GoogleAuthProvider()
const signWithEmail=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginWithEmail=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const updateUser=(name)=>{
return updateProfile(auth.currentUser,{
    displayName:name
})
}
const loginWithGoogle=()=>{
    setLoading(true)
return signInWithPopup(auth,provider)
}
const logout=()=>{
   return signOut(auth)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        if(currentUser){
            setLoading(false)
            setUser(currentUser)

        }else{
            setUser(null)
        }
    })
    return () => unsubscribe();
},[])
    const authInfo={
       loading,
       logout,
       user,
       updateUser,
       signWithEmail,
       loginWithGoogle,
       loginWithEmail
    }
    return (
      <AuthContext.Provider value={authInfo}>
{children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;