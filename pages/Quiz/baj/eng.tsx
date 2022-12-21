import React,{useEffect,useState} from 'react'
import {QuizEnglish} from "../../../services/index"
import {Quizmodel} from "../../../models/index"

function Eng() {

  const English = new QuizEnglish()
const index = English.currentIndex;
const queItem = English.questions[index]

console.log(index)

useEffect(()=>{
  
})

 
  return (
   <>
 <div className='h-screen flex flex-col items-center justify-center  shadow-lg mt-[00px] '>
  <div className='flex flex-col items-center justify-center md:w-[600px] shadow-lg md:h-[500px] p-4'>
    <span className='mb-[20px] text-2xl font-extrabold text-[#1D4645]'>{index + 1}</span>
{
  <>
 <h1 className='text-center font-extrabold text-2xl'>{queItem.prompt}</h1>
 <div className='grid gid-cols-1 md:grid-cols-2 gap-[30px] mt-[30px]'>
  
  {
    queItem.options.map((option:any,index:number)=>{
     return( <button key={index}  className='w-[250px] border-[1px] border-[#1D4645] p-2 '>{option}</button>)
    })
  }
 </div>
 </>  

}
<div className='mt-[30px]'><button className='bg-[#1D4645] text-white p-2 w-[250px]' onClick={English.nextQuestions}>Next</button></div>
  </div>
 </div>
   </>
  )
}

export default Eng