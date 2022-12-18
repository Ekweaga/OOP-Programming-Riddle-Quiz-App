import { createContext,useState,useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth"

export const AuthUser = createContext();


export const AuthProvider = ({children})=>{
 return (  <AuthUser.Provider value={{}}>
    {children}
    </AuthUser.Provider>)
}

