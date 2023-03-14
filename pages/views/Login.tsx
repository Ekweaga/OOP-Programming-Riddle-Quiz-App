import React,{useState} from 'react'
import Link from "next/link"
import { signInWithEmailAndPassword } from 'firebase/auth'

import { getStorage, ref, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
import {getAuth} from  "firebase/auth";
import {setDoc,doc} from "firebase/firestore"
import {firebaseapp} from "../../services/firebase"
import { AuthUser } from '../../services/context';
import {useRouter} from "next/router"


function Login() {
  const [email,setEmail] = useState<string>("")
  const [name,setName] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [file,setFile] = useState<any>()
  const [loading,setLoading] = useState<boolean>(false)
  const projectfirestore = getFirestore(firebaseapp)
  const [progress,setProgress] = useState<any>(null)

  const [url,setUrl] = useState<string>('')
  const router = useRouter()

  const [success,setSuccess] = useState<string>('')

    const auth = getAuth(firebaseapp)

    const projectstorage = getStorage(firebaseapp)
  const  loginInUser = async (e:any)=>{
    e.preventDefault();
   // setLoading(true)

    if(email === "" || password === "" || name === ""){
      setError("Fields are empty")
    
  
      //setLoading(false)
    }
    else if(password.length < 6){
      setError("Password characters must be greater than 6")
     // setLoading(false)
    }
   else{
    try{
       // setLoading(true)
      await signInWithEmailAndPassword(auth,email,password).then((response)=>{
        console.log(response.user.refreshToken)})

        router.push("/")
      
      }
        catch{

        }
      }
    }
  
  return (
  <>
    <div className='flex items-center justify-center text-white'>
    <div className='  h-[500px] w-[350px] mt-[100px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#1D4645] shadow-2xl' >
      <h1 className='font-bold text-2xl mb-[10px]'>Welcome back!</h1>
      <p>Please login to continue</p>
      <form className='flex flex-col gap-[30px] items-center justify-center mt-[15px]' onSubmit={loginInUser}>
        <div>
          <input type="email" placeholder='Email' className='bg-transparent text-white border-[1px] border-white w-[300px] px-2 h-[40px]' value={email} onChange={(e)=>setEmail(e.target.value)}/>

        </div>

        <div>
        <input type="password" placeholder='your password' className='bg-transparent text-white border-[1px] border-white w-[300px] px-2 h-[40px]' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
        <button className="bg-[#E8C5B0] text-black w-[280px] rounded-full p-2">Get Started</button>
        </div>
        <div className="text-white text-sm">
          <p>Dont have an account ? <Link href="/views/Signup" className='text-[#14f2fe] font-bold'>SignUp</Link></p>
        </div>
        <div className="text-white text-sm">
          <p><Link href="/">Go back home</Link></p>
        </div>
      </form>

    </div>
   </div>
  </>
  )
}

export default Login