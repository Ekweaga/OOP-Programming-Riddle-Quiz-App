import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
  <>
  <div>
    <div className="bg-white h-[500px] relative z-[10px] ">
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <Image src="/Group 331.png" width={2200} height={300} alt="icon"/>

    </div>

    <div className='flex flex-col items-center justify-center mt-[200px] '>
      <h3>Contact Us</h3>
      <h1 className="text-3xl mt-[20px] font-bold text-[#1D4645]">Get In Touch</h1>
      <p className='text-center md:w-[450px] text-sm mt-[15px] p-2'>Write to us your messages and feedback. We really appreciate your comments and feedback</p>
      <div className='h-[400px] w-[400px] shadow-2xl flex flex-col items-center justify-center gap-[20px] mt-[30px]' >
        <div>
          <label>Name</label><br/>
          <input type="text" className='border-[1px] border-[#ECECEC] w-[280px] h-[40px] px-2'/>
        </div>

        <div>
          <label>Email</label><br/>
          <input type="text" className='border-[1px] border-[#ECECEC] w-[280px] h-[40px] px-2'/>
        </div>

        <div>
          <label>Name</label><br/>
          <input type="text" className='border-[1px] border-[#ECECEC] w-[280px] h-[40px] px-2'/>
        </div>

        <div>
          <button className='text-white bg-[#1D4645] p-2 w-[150px]'>Submit</button>
        </div>

      </div>
    </div>
    </div>



    <div className="bg-[#1D4645] p-4 text-white md:h-[630px] z-[2px]">

      <div className='w-full h-full relative'>
      <div className="absolute top-0 bottom-0 left-0 right-0">
      <Image src="/Group 331.png" width={2200} height={300} alt="icon"/>

    </div>

    <div className='grid grid-cols-2 md:grid-cols-4 md:gap-[40px] mt-[100px] py-[200px] gap-[20px] md:mt-0'>
    <Image src="/Group 1 1.png" width={80} height={100}/>
    <div>
      <h2 className='text-[#B5A595] text-2xl'>Menu</h2>
      <ul className='flex flex-col text-sm gap-[15px] mt-[30px]'>
        <li>About</li>
        <li>Services</li>
        <li>Sign in</li>
        <li>Quiz</li>
      </ul>
    </div>
    <div>
    <h2 className='text-[#B5A595] text-2xl'>Services</h2>
      <ul className='flex flex-col text-sm gap-[15px] mt-[30px]'>
        <li>About</li>
        <li>Services</li>
        <li>Awards</li>
        <li>Incentives</li>
      </ul>
    </div>
    <div><Image src="/social.png" width={100} height={100}/></div>
    </div>

      </div>
    

    </div>
  </div>
  
  </>
  )
}

export default Footer