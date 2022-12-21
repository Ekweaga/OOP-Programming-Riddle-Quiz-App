import React,{useContext} from 'react'
import Image from "next/image"
import {QuizApp} from "../services/context"
import Link from "next/link"

function Welcome() {
  const {quizstate,setQuizState} = useContext(QuizApp)
const categories = ["math","english","science","general"]

  const category = (category:any)=>{
  if(category === "math"){
    setQuizState("math")
  }
  if(category === "english"){
    setQuizState("english")
  }
  if(category === "science"){
    setQuizState("science")
  }
  else if(category === "general"){
    setQuizState("general")
  }
    
   
   


  }
  return (
   <>
   <div className='flex items-center justify-center flex-col'>
    <div className='flex items-center justify-center flex-col mt-[200px]'>
        <h1 className='text-4xl text-[#1D4645] font-bold text-center'> Quizi Raj Riddle's</h1>
        <Image src="/Group 1 1.png" width={150} height={100} alt="icon"/>

        <div>
        <div className='mt-[20px] flex gap-[20px] flex-col '>
    <button className='bg-[#1D4645] text-sm p-2 w-[150px] text-white '><Link href="/Quiz/baj/category">Start Quiz</Link></button>
            <button className='bg-[#E8C5B0] p-2 text-[#1D4645] text-sm '><Link href="/">Go back home</Link></button>
    </div>
        </div>
    </div>

   </div>
   </>
  )
}

export default Welcome
