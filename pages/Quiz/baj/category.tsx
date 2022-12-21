import React,{useContext} from 'react'
import {QuizApp} from "../../../services/context"
import Link from "next/link"

function Category() {
  const {quizstate,setQuizState,state,setState} = useContext(QuizApp)
  const categories = ["math","english","science","general"]
  
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
  return (
   <>
  
   <div  className='h-screen flex flex-col items-center justify-center'>
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
