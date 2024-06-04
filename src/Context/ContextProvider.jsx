import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [user, setUser]=useState([])
    useEffect(() => {
        const unsubscribe = () =>{
            onAuthStateChanged(auth, (user)=>{
                // console.log(user);
                setUser(user)
            })
        }
        return ()=>{
            unsubscribe()
        }
    }, [])
    const info = { user }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
};

export default ContextProvider;