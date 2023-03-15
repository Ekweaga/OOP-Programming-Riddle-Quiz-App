import React,{useContext,useState,useEffect} from 'react'
import {AuthUser, QuizApp} from "../../../services/context"
import Link from "next/link"
import {setDoc,doc,onSnapshot} from "firebase/firestore"
import { firebaseapp } from '../../../services/firebase'
import {getFirestore} from "firebase/firestore"
import Image from "next/image"

import { useRouter } from 'next/router'


function Category() {
  const {quizstate,setQuizState,state,setState} = useContext(QuizApp)
  const categories = ["math","english","science","general"]
  const [userInfo,setUserInfo] = useState<any>({})

  const {user} = useContext(AuthUser)
  const router = useRouter()

  const projectfirestore = getFirestore(firebaseapp)

  type UserInfo = {
      name:string,
      email:string,
      imageUrl:string
  }

  const getUserInfo = ()=>{
    try{
 onSnapshot(doc(projectfirestore, "singleUser", `${user?.email}`), (doc) => {
    
  
      setUserInfo(doc.data()?.saveUserInfo)
    
  });
    } 
   catch(err:any){
    console.log(err.message)
  }

  }
  
    const category = (item:string)=>{
    if(item == "math"){
      setQuizState("math")
    }
    if(item == "english"){
      setQuizState("english")
  
     
    
      
    }
    if(item == "science"){
      setQuizState("science")
    }
    else if(item == "general"){
      setQuizState("general")
    }}

    useEffect(()=>{
      getUserInfo();
    },[user])

    if(!user){
      router.push("views/Login")
      return;
    }
  return (
   <>
  
   <div  className='h-screen flex flex-col items-center justify-center'>
    <div>
     
       
              <div>
                <img src={userInfo?.imageUrl} width={30} height={30} className="rounded-full" alt="UserImage"/>
                <h1>{userInfo?.name}</h1>

              </div>
     
    </div>
    <div className='flex flex-col items-center justify-center h-[500px] shadow-lg md:w-[600px] mt-[0px] p-4'>
    <h2 className='text-2xl mb-[20px]'>Choose one category</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
      <button className='w-[250px] border-[1px] border-[#1D4645] p-2 ' onClick={()=>category("english")}><Link href="/Quiz">English</Link></button>
      <button className='w-[250px] border-[1px] border-[#1D4645] p-2 ' onClick={()=>category("math")}><Link href="/Quiz">Mathematics</Link></button>
      <button className='w-[250px] border-[1px] border-[#1D4645] p-2 ' onClick={()=>category("science")}><Link href="/Quiz">Science</Link></button>
      <button className='w-[250px] border-[1px] border-[#1D4645] p-2 ' onClick={()=>category("general")}><Link href="/Quiz">General Affairs</Link></button>
    </div>
    </div>
   
   </div>

   </>
  )
}

export default Category
