import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='container mx-auto'>
      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href={"/"}>
          <Image 
            src={"/da-logo.jpeg"} alt="rock image" width={200} height={60}
            className='h-10 w-auto object-contain'
          />
        </Link>

        <div className='flex items-center gap-4'>
          {/* Login and other ctas (what does ctas mean) */}
        </div>
      </nav>
    </header>
  )
}

export default Header