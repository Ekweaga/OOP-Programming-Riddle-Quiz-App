import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {

  const blogs = [
    {
  
    desc:"Even the all-powerful pointing has no control about",
    icon:"/unsplash_hpjSkU2UYSU.png",
  
  },
  {
    desc:"Almost unorthographic life on earth however small one",
    icon:"/unsplash_SYTO3xs06fU.png",
   
  },
  {
   
    desc:"Even the all-powerful pointing has no control about",
    icon:"/unsplash_vh3IjuOIwlU.png"
  },

]
  return (
    <>
    <Head><title>Quizi Baj</title></Head>
    

    <Navbar/>

<header>
  <div className='flex gap-[0px] md:justify-around p-[30px] flex-col md:flex-row items-center justify-center'>

  <div className='md:mt-[100px] md:ml-[150px] mt-[50px]'>
    <h1 className="text-[#1D4645] font-bold text-5xl md:w-[350px] leading-[60px]">Play Online Quiz & Win Cash Daily!</h1>
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
    <Image src="/Group 338.png" width={800} height={300} alt="icon" className='-ml-[50px] md:ml-0'/>
  </div>

  </div>
 
</header>

<div className="howToPlay">
<div className='bg-[#1D4645]  text-white p-[30px] flex flex-col'>
  <h1 className='text-left font-bold text-3xl md:mb-[10px] md:ml-[40px] '>How To Play</h1>
  <div className="flex items-center justify-center ">


  <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[0px]'>
  <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black mt-[120px]'>
    <Image src="/step1.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 1</h4>
          <p>Enter email and password to register</p>
        </div>
    </div>


    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black mt-[40px]'>
    <Image src="/step2.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 2</h4>
          <p>Verify your email address</p>
        </div>
    </div>


    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black'>
    <Image src="/step3.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 3</h4>
          <p>Enter your info to play quiz</p>
        </div>
    </div>

  </div>
  </div>
 
</div>


<div className="flex items-center justify-center">
  <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[50px]'>
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
          <p>A question will have four options</p>
        </div>
    </div>


    <div   className='bg-white w-[300px] h-[300px] rounded-md p-4 shadow-2xl text-black'>
    <Image src="/step6.png" width={240} height={50} alt="icon"/>
    <div className="mt-[30px]"
        >
          <h4 className='font-bold mb-[15px] text-[#1D4645]'>Step 4</h4>
          <p>Click on the right option</p>
        </div>
    </div>





  </div>
</div>


</div>


<div className="mt-[100px] md:w-[70%] mx-auto w-[100%] ">
  <div className="flex justify-between mb-[30px] flex-col md:flex-row gap-[15px] p-3 ">
    <h2 className='font-bold text-3xl text-[#1D4645]'>Let's Sharp Your <br/>Preparation</h2>
    <div><button className='border-[1px] border-[#1D4645] p-2 text-[#1D4645] rounded-md'>EXPLORE ALL</button></div>
  </div>

  <div >
    <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className="bg-[#1D4645] w-[350px] h-[350px] text-white flex flex-col items-center p-4 justify-center gap-[15px]">
          <h1 className="text-2xl font-bold">Baj Model Test</h1>
          <p className='text-sm text-center'>Quiz baj test comes with three different categories(Maths,English and General knowledge) each tests contains 10 questions. One questions attract two marks each i.e 
            total of 20 marks per category
          </p>

        </div>
        <Image src="/Rectangle 3.svg" width={300} height={100} alt="icon"/>
        <div className="bg-[#FFF2E6] w-[350px] h-[350px] md:ml-[40px] shadow-lg flex flex-col items-center justify-center">
        <Image src="/Bitmap.svg" width={150} height={100} alt="icon"/>
        <h1 className="font-bold text-2xl ">Primary Exam</h1>
        </div>
    </div>

    <div  className='flex gap-[20px] flex-col md:flex-row items-center justify-center'>
    <div className="bg-[#1D4645] w-[350px] h-[350px] text-white flex flex-col items-center justify-center shadow-lg">
    <Image src="/p.png" width={150} height={100} alt="icon"/>
        <h1 className="font-bold text-2xl ">Bank Exam</h1>

</div>

<div className="bg-[#FFF2E6] w-[350px] h-[350px] shadow-lg flex flex-col items-center justify-center">
        <Image src="/Bitmap (1).png" width={150} height={100} alt="icon"/>
        <h1 className="font-bold text-2xl ">Railway Exam</h1>
        </div>
        <div className="bg-[#1D4645] w-[350px] h-[350px] text-white flex flex-col items-center justify-center shadow-lg">
        <Image src="/3.png" width={150} height={100} alt="icon"/>
        <h1 className="font-bold text-2xl ">Bank Exam</h1>

</div>

      </div>

  </div>

  </div>



<div className='explore md:w-[70%] mx-auto mt-[100px] w-[80%]'>
<div className="flex justify-between mb-[30px] flex-col md:flex-row  gap-[10px]">
    <h2 className='font-bold text-3xl text-[#1D4645]'>Explore Our Quiz <br/>Categories</h2>
    <div><button className='border-[1px] border-[#1D4645] p-2 text-[#1D4645] rounded-md'>EXPLORE ALL</button></div>
  </div>

  <div className='flex gap-[20px] flex-col md:flex-row'>
    <div className='w-[300px] h-[250px] bg-[#FFF2E6] p-4'>
      <div className='bg-white rounded-full w-[50px] p-4 mb-[30px]'>
      <Image src="/Oval.png" width={100} height={100} alt="icon"/>
      </div>
   
        <h1 className="font-bold text-sm mb-[20px]">Math</h1>
        <p className='text-sm'>Sky was cloudless and of a deep dark blue spectacle before us was indeed</p>
    </div>
    <div className='md:w-[250px] md:h-[200px] bg-[#FFF2E6] md:mt-[140px] p-4 h-[250px]'>

    <div className='bg-white rounded-full w-[50px] p-4 mb-[20px]'>
      <Image src="/Oval (1).png" width={100} height={100} alt="icon"/>
      </div>
   
        <h1 className="font-bold text-sm mb-[20px]">English</h1>
        <p className='text-sm '>Sky was cloudless and of a deep dark blue spectacle before us was indeed</p>

</div>
  </div>

  <div className='md:ml-[100px] flex gap-[20px] flex-col md:flex-row'>
  <div className='md:w-[200px] h-[250px] bg-white shadow-lg md:-mt-[60px] p-4 rounded-md mt-[15px]'>

<div className='bg-white rounded-full w-[50px] p-4 mb-[20px]'>
  <Image src="/Oval (1).png" width={100} height={100} alt="icon"/>
  </div>

    <h1 className="font-bold text-sm mb-[20px]">Science</h1>
    <p className='text-sm '>Sky was cloudless and of a deep dark blue spectacle before us was indeed</p>

</div>


<div className='md:w-[200px] h-[250px] bg-[#FFF2E6] mt-[40px] p-4 rounded-md'>

<div className='bg-white rounded-full w-[50px] p-4 mb-[20px]'>
  <Image src="/Oval (1).png" width={100} height={100} alt="icon"/>
  </div>

    <h1 className="font-bold text-sm mb-[20px]">Bangla</h1>
    <p className='text-sm '>Sky was cloudless and of a deep dark blue spectacle before us was indeed</p>

</div>



<div className='w-[300px] h-[250px] bg-white shadow-lg mt-[90px] p-4 rounded-md'>

<div className='bg-white rounded-full w-[50px] p-4 mb-[20px]'>
  <Image src="/Oval (1).png" width={100} height={100} alt="icon"/>
  </div>

    <h1 className="font-bold text-sm mb-[20px]">General Knowledge</h1>
    <p className='text-sm '>Sky was cloudless and of a deep dark blue spectacle before us was indeed</p>

</div>

  </div>
</div>





  <div className="bg-[#1D4645] p-4 mt-[100px] z-1 text-white relative">
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <Image src="/Group 331.png" width={2200} height={300} alt="icon"/>

    </div>

    <div className='mt-[100px] p-4'>
      <div className='flex justify-between md:w-[70%] mx-auto mt-[10px] flex-col md:flex-row'>
        <div>
        <div className='border-[1px] border-white rounded-md w-[120px] p-2 h-[30px] mb-[20px]'></div>
        <h1 className='font-bold text-5xl'>Winner<br/> player</h1>
        <p className='md:w-[350px] leading-[30px] text-sm mt-[30px]'>Quiz baj test comes with three different categories(Maths,English and General knowledge) each tests contains 10 questions. One questions attract</p>
        </div>

        <div>
          <div className='flex'>
            <div className='bg-[#0C2323] w-[200px] h-[150px] text-white flex flex-col items-center justify-center'>
              <h2 className='text-5xl font-bold'>Weekly</h2><p>Winner</p>
            </div>
            <Image src="/unsplash_3JmfENcL24M.png" width={300} height={200} alt="icon"/>
          </div>
          <div className='flex '>
          <Image src="/unsplash_GRyMXAQdtp8.png" width={300} height={200} alt="icon"/>
          <div className='bg-[#0C2323] w-[200px] h-[150px] text-white flex flex-col items-center justify-center p-4'>
              <h2 className='text-4xl font-bold'>Monthly</h2><p>Winner</p>
            </div>
          
          </div>
        </div>
        
      </div>



      <div className='blog md:w-[70%] mx-auto mt-[10px]'>
        <div>
        <div>
       
        <h1 className='font-bold text-4xl'>Check Latest<br/> Articles</h1>
   
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[20px]">
          {
            blogs.map((blog:any,index:number)=>{
                return (
                  <div key={index}>
                    <Image src={blog.icon} width={250} height={200} alt="icon"/>
                    <div><h2 className="font-bold text-sm mt-[20px]">{blog.desc}</h2></div>
                  </div>
                )
            })
          }
        </div>


      </div>
    </div>

  </div>

  <Footer/>

    
    </>
  )
}
