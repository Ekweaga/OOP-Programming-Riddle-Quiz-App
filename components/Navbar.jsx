import React from 'react'
import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
  <>

  <nav className='flex justify-between md:p-2 items-center '>
    <Image src="/Group 1 1.png" width={80} height={100}/>

    <div className='p-2 block'>
        <ul className='flex gap-[10px]'>
            <button className='w-[100px] bg-[#1D4645] p-2 text-white'><Link href="/views/Login">Sign In</Link></button>
            <button className='w-[100px]  border-[#1D4645] p-2 '><Link href="/views/Signup">Sign Up</Link></button>
            
        </ul>
    </div>
  </nav>

  </>
  )
}

export default Navbar
