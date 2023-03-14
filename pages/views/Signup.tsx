import React,{useContext, useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import { getStorage, ref, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";
import {getFirestore} from "firebase/firestore"
import {getAuth} from  "firebase/auth";
import {setDoc,doc} from "firebase/firestore"
import {firebaseapp} from "../../services/firebase"
import { AuthUser } from '../../services/context';
import {useRouter} from "next/router"
import {createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

function SignUp() {
    const [email,setEmail] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [file,setFile] = useState<any>()
    const [loading,setLoading] = useState<boolean>(false)
    const projectfirestore = getFirestore(firebaseapp)
    const [progress,setProgress] = useState<any>(null)
    const {user} = useContext(AuthUser)
    const [url,setUrl] = useState<string>('')
    const router = useRouter()

    const [success,setSuccess] = useState<string>('')

    const auth = getAuth(firebaseapp)

    const projectstorage = getStorage(firebaseapp)

    const  signupUser = async (e:any)=>{
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
        await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
          console.log(response.user.refreshToken)
        //  localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
        console.log(response)
     setDoc(
          doc(projectfirestore, "users",response.user.uid),{
            Name:name,
            Email:email,
            id:response.user.uid,
            userImage:url
          });
          
        });
      setDoc(doc(projectfirestore,'singleUser', `${email}`),{
        saveUserInfo:{
          name:name,
          email:email,
          imageUrl:url
        }
       })
      
     //  setLoading(false)
       setSuccess("Your Account is created successfully")
          setEmail('')
          setPassword('')
       setTimeout(()=>{
       router.push('/views/Login')
       },1000)
     }
     catch(err:any){
     setError(err.message)
     console.log(err)
    // setLoading(false)
     }
     }
  
  }

    const Upload = (e:any)=>{
      setLoading(true);
      const file = e.target.files[0]
      const storageref = ref(projectstorage,`images/${user?.email}-${file.name}`);
      const uploadTask = uploadBytesResumable(storageref, file);
      
      uploadTask.on("state_changed", (snapshot)=>{
        const uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(uploadprogress)
      },  (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setUrl(downloadURL)
          setLoading(false)
        });
      }
      )
    }
  return (
    <>
    <div className='flex items-center justify-center '>
  
     <div className='  h-[580px] w-[350px] mt-[50px] rounded-md  p-4 flex items-center justify-center flex-col bg-[#1D4645] shadow-3xl' >
     <Image src="/Group 1 1.png" width={80} height={100} alt="Quizi Baj" className='-mt-[100px]'/>
       <p className='mt-[15px] text-white'>Create an account here</p>
       <div className='text-red-800 '></div>
       <form className='flex flex-col gap-[30px] items-center justify-center mt-[15px]'>
         <div>
           <input type="text" placeholder='your name' className='bg-transparent text-white border-[1px] border-white w-[300px] px-2 h-[40px]' value={name} onChange={(e)=>setName(e.target.value)}/>
 
         </div>
         <div>
         <input type="email" placeholder='Email' className='bg-transparent text-white border-[1px] border-white w-[300px] px-2 h-[40px]' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </div>
 
         <div>
         <input type="password" placeholder='your password' className='bg-transparent text-white border-[1px] border-white w-[300px] px-2 h-[40px]' value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </div>

         <div>
          <input type="file" id="file" className='hidden' onChange={Upload}/>
          <label htmlFor="file" className='bg-black text-white p-2 -ml-[150px]'>Upload Photo</label>
         </div>
         <div>
         <button className="bg-[#E8C5B0] text-black w-[280px] rounded-full p-2 font-bold" onClick={signupUser}>Submit</button>
         </div>
         <div className="text-white text-sm">
           <p>Already have an account ? <Link href="/views/Login"  className='text-[#14f2fe] font-bold'>Login</Link></p>
         </div>
         <div>
           <p><Link href="/" className="text-white text-sm">Go back home</Link></p>
         </div>
       </form>
 
     </div>
    </div>
   </>
  )
}

export default SignUp
