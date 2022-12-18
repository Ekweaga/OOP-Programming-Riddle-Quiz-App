import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Signup from '../views/Signup'
import Navbar from "../components/Navbar"

export default function Home() {

  const howToPlay = [
    {
    title:"Step 1",
    desc:"Enter your email and password",
    icon:"/step1.png",
    top:"70px"
  },
  {
    title:"Step 2",
    desc:"Verify your email address",
    icon:"/step2.png",
    top:"30px"
  },
  {
    title:"Step 3",
    desc:"Enter your info and start quiz",
    icon:"/step3.png"
  },

]
  return (
    <>
    <Head><title>Quizi Baj</title></Head>
    

    <Navbar/>

<header>
  <div className='flex gap-[0px] justify-around p-[30px] '>

  <div className='mt-[100px] ml-[150px]'>
    <h1 className="text-[#1D4645] font-bold text-5xl w-[350px] leading-[60px]">Play Online Quiz & Win Cash Daily!</h1>
    <p className='text-sm mt-[20px]'>Win up to 1000 monthly from QuizBaj </p>
    <div className='mt-[20px] flex gap-[20px] '>
    <button className='bg-[#1D4645] text-sm p-2 w-[150px] text-white '>SIGN IN</button>
            <button className='bg-[#E8C5B0] p-2 text-[#1D4645] text-sm '>REGISTER NOW</button>
    </div>
    <div className="flex flex-col mt-[25px]"><h2>NUMBERS OF ACTIVE USES RIGHT NOW</h2>
    <h4 className='text-center text-3xl font-bold text-[#1D4645]'>20,000+</h4>
    </div>
  </div>
  <div>
    <Image src="/Group 338.png" width={700} height={300} alt="icon"/>
  </div>

  </div>
 
</header>

<div className="howToPlay">
<div className='bg-[#1D4645]  text-white p-[30px] flex flex-col'>
  <h1 className='text-left font-bold text-3xl mb-[30px]'>How To Play</h1>
  <div className="flex items-center justify-center">


  <div className='grid grid-cols-3 gap-[20px] mt-[0px]'>
  <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black mt-[120px]'>
    <Image src="/step1.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 1</h4>
          <p>Click on the subject</p>
        </div>
    </div>


    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black mt-[40px]'>
    <Image src="/step2.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 2</h4>
          <p>Click on the subject</p>
        </div>
    </div>


    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black'>
    <Image src="/step3.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 3</h4>
          <p>Click on the subject</p>
        </div>
    </div>

  </div>
  </div>
 
</div>


<div className="flex items-center justify-center">
  <div className='grid grid-cols-3 gap-[20px] mt-[50px]'>
    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black mt-[80px]'>
    <Image src="/step4.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 4</h4>
          <p>Click on the subject</p>
        </div>
    </div>


    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black mt-[40px]'>
    <Image src="/step5.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 4</h4>
          <p>Click on the subject</p>
        </div>
    </div>


    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black'>
    <Image src="/step6.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 4</h4>
          <p>Click on the subject</p>
        </div>
    </div>





  </div>
</div>


</div>


<div className="mt-[100px] w-[70%] mx-auto">
  <div className="flex justify-between mb-[30px]">
    <h2 className='font-bold text-3xl text-[#1D4645]'>Let's Sharp Your <br/>Preparation</h2>
    <div><button className='border-[1px] border-[#1D4645] p-2 text-[#1D4645] rounded-md'>EXPLORE ALL</button></div>
  </div>

  <div >
    <div className='flex'>
        <div className="bg-[#1D4645] w-[350px] h-[350px] text-white">

        </div>
        <Image src="/Rectangle 3.svg" width={300} height={100} alt="icon"/>
        <div className="bg-[#FFF2E6] w-[350px] h-[350px] ml-[40px] shadow-lg flex flex-col items-center justify-center">
        <Image src="/Bitmap.svg" width={150} height={100} alt="icon"/>
        <h1 className="font-bold text-2xl ">Primary Exam</h1>
        </div>
    </div>

    <div  className='flex'>
    <div className="bg-[#1D4645] w-[350px] h-[350px] text-white">

</div>

<div className="bg-[#FFF2E6] w-[350px] h-[350px] shadow-lg flex flex-col items-center justify-center">
        <Image src="/Bitmap (1).png" width={150} height={100} alt="icon"/>
        <h1 className="font-bold text-2xl ">Primary Exam</h1>
        </div>
        <div className="bg-[#1D4645] w-[350px] h-[350px] text-white">

</div>

      </div>

  </div>

  </div>









  <div className="bg-[#1D4645] h-[500px] mt-[100px]">

  </div>

    
    </>
  )
}
