import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const Context = ({children}) => {
    const [loading , setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const sighnIn =(email, password)=>{
        setLoading(true);

       return signInWithEmailAndPassword(auth, email, password);
    }
    const creatUser =(email, password) => {
        setLoading(true);
      return  createUserWithEmailAndPassword(auth , email, password);
    }

    const logout =()=>{
        setLoading(true);
        return signOut(auth);

    }

    const updateUser = (userInfo)=>{
            return updateProfile(auth.currentUser,userInfo)
    }




    const googlePopup = ()=>{
     setLoading(true);
      return  signInWithPopup(auth, provider);

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });

        return ()=> unsubscribe();
    },[])

    const authInfo ={
        sighnIn,
        creatUser,
        googlePopup, 
        user,
        logout,
        updateUser, 
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default Context;