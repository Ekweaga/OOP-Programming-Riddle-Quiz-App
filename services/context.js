import { createContext,useState,useEffect } from "react";
import { onAuthStateChanged ,getAuth} from "firebase/auth";
import {firebaseapp} from "./firebase"

export const AuthUser = createContext();

export const QuizApp = createContext();

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({})

    const auth = getAuth(firebaseapp)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
               setUser(user)
               
           })
       },[auth])

 return (  <AuthUser.Provider value={{user}}>
    {children}
    </AuthUser.Provider>)
}


export const QuizAppProvider = ({children})=>{
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");
    const [eng,setEng] = useState("");
    const [math,setMath] = useState("")
    const [quizstate,setQuizState] = useState("")
    const [color,setColor] = useState("")
    const [state,setState] = useState("");
    const [totalscore,setTotalScore] = useState(0)

    return (  <QuizApp.Provider value={{quizstate,setQuizState,state,setState,color,setColor,totalscore,setTotalScore}}>
        {children}
        </QuizApp.Provider>)
}
