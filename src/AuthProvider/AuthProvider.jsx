import { auth } from '@/Firebase/Firebase.config';
import axios from 'axios';
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
            const creationDate = currentUser.metadata.creationTime
            const date = new Date(creationDate);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
       
const userInfo ={
    name:currentUser.displayName,
    email:currentUser.email,
    joinOn : formattedDate,
    photo:currentUser.photoURL,
    isAdmin:false
}
  
    axios.post(`http://localhost:1000/users`,{
        userInfo
    })
    .then(res=>
   {     console.log(res.data)
        if(res.data.insertedId){
            window.location.reload()
        }
    }
    
        )
    .catch(err=>console.log(err))
  


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