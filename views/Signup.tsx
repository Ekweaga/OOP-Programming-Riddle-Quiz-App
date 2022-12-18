import React,{useState} from 'react'
import Link from "next/link"

function SignUp() {
    const [email,setEmail] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [file,setFile] = useState<any>()
  return (
    <>
    <div className='flex items-center justify-center '>
  
     <div className='  h-[500px] w-[350px] mt-[100px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#070c21cc] shadow-3xl' >
   
       <p className='mt-[15px]'>Create an account here</p>
       <div className='text-red-800 '></div>
       <form className='flex flex-col gap-[30px] items-center justify-center mt-[15px]'>
         <div>
           <input type="text" placeholder='your name' className='bg-transparent text-white border-[1px] border-[#14f2fe] w-[300px] px-2 h-[40px]' value={name} onChange={(e)=>setName(e.target.value)}/>
 
         </div>
         <div>
         <input type="email" placeholder='Email' className='bg-transparent text-white border-[1px] border-[#14f2fe] w-[300px] px-2 h-[40px]' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </div>
 
         <div>
         <input type="password" placeholder='your password' className='bg-transparent text-white border-[1px] border-[#14f2fe] w-[300px] px-2 h-[40px]' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </div>

         <div>
          <input type="file"/>
         </div>
         <div>
         <button className="bg-[#54CED5] text-white w-[280px] rounded-full p-2 font-bold">Submit</button>
         </div>
         <div>
           <p>Already have an account ? <Link href="/auth/login"  className='text-[#14f2fe] font-bold'>Login</Link></p>
         </div>
         <div>
           <p><Link href="/">Go back home</Link></p>
         </div>
       </form>
 
     </div>
    </div>
   </>
  )
}

export default SignUp
