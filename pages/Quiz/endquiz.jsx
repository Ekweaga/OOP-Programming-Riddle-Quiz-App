import React,{useContext} from 'react'
import { QuizApp } from '../../services/context'
import Image from "next/image"
import Link from "next/link"


function EndQuiz() {
  const {totalscore} = useContext(QuizApp)
  return (
    <div className='flex items-center justify-center flex-col mt-[200px]'>
         <Image src="/Group 1 1.png" width={150} height={100}/>
      <h1 className='text-3xl mt-[20px]'>Total Score</h1>
           <h2 className='font-bold mt-[10px] text-2xl'>{totalscore * 4} / 20</h2>
       
           <div><Link href="/Quiz/baj/category"><button  className='w-[160px] bg-[#1D4645] p-2 text-white mt-[20px]'>Restart Quiz</button></Link></div>
           <div>
           <p><Link href="/" className=" text-sm mt-[30px]">Go back home</Link></p>
         </div>
    </div>

  )
}

export default EndQuiz