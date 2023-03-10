import React,{useEffect,useState,useContext} from 'react'
import {QuizGeneral} from "../../../services/index"

import EndQuiz from "../../Quiz/endquiz"
import { QuizApp } from '../../../services/context'
function General() {
  const {color,setColor,totalscore,setTotalScore} = useContext(QuizApp);
  const General = new QuizGeneral();
  const [index,setIndex] = useState(General.currentIndex)
const [queItem,setqueItem] =useState( General.questions[index])
const [showresults , setShowResults] = useState(General.showres)
const [score,setScore] = useState(General.scoreCount);
const [showcolor,setShowColor] = useState(false)
const changeque = ()=>{
  General.nextQuestions();
  if(General.questions.length - 1 === index){
    setShowResults(true)
  }
  else{
    setIndex(index + 1)
    console.log("click")
    setShowColor(false)
  }
  
}
const correctans = (correct:any)=>{
if(queItem.answer == correct){
  setScore(score + 1)
  setColor("green")
  setShowColor(true)
  console.log(score)
  setTotalScore(totalscore + 1)
  


}
else{
  console.log(score)
  setColor("red")
  setShowColor(true);
}
}
console.log(index)
console.log(queItem)
useEffect(()=>{
setqueItem(General.questions[index])
},[index])

 
  return (
   <>

   {
    showresults ? <EndQuiz/> :( 
     <>
    
    <div className='h-screen flex flex-col items-center justify-center  shadow-lg mt-[00px] '>
    {showcolor ?<div className='flex items-center justify-center w-[200px] p-2'>{color === "green" ? <p className='bg-[green] text-white w-[200px] p-2 flex items-center justify-center text-center'>Correct Answer</p>:<p className='bg-[red] text-white w-[300px] p-2 text-center'>Wrong Answer</p>}</div>:null}
    <div className='flex flex-col items-center justify-center md:w-[600px] shadow-lg md:h-[500px] p-4'>
      <span className='mb-[20px] text-2xl font-extrabold text-[#1D4645]'>{index + 1}</span>
  {
    <>
   <h1 className='text-center font-extrabold text-2xl'>{queItem.prompt}</h1>
   <div className='grid gid-cols-1 md:grid-cols-2 gap-[30px] mt-[30px]'>
    
    {
      queItem.options.map((option:any,index:number)=>{
       return( <button key={index}  className='w-[250px] border-[1px] border-[#1D4645] p-2'
       onClick={()=>correctans(option)}>{option}</button>)
      })
    }
   </div>
   </>  
  
  }
  <div className='mt-[30px]'><button className='bg-[#1D4645] text-white p-2 w-[250px]' onClick={changeque}>Next</button></div>
    </div>
   </div></>)
   }

   </>
  )
}

export default General