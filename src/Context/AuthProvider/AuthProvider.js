import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../Firebase/Firebase.Config';

export const AuthContext= createContext();

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]= useState(true)

   

    const providerLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut=()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const userProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
           setLoading(false)
           
        })
        return ()=> {
            unsubscribe ()
        }
    },[])

    const authInfo={user, loading, userProfile, providerLogin , logOut, createUser, userSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;