import React from 'react'
import Image from "next/image"

function Navbar() {
  return (
  <>

  <nav className='flex justify-between p-4 items-center'>
    <Image src="/Group 1 1.png" width={80} height={100}/>

    <div>
        <ul>
            <button>Sign In</button>
            <button>Sign Up</button>
            
        </ul>
    </div>
  </nav>

  </>
  )
}

export default Navbar
