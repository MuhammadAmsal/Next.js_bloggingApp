import React from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import { Lilita_One } from "next/font/google";
const font = Lilita_One({ subsets: ["latin"],weight:"400"});
function Navbar() {
  return (
    <div className='mx-auto max-w-5xl px-6' >
      <div className='flex justify-between items-center h-16 w-full' >
      <Link href="/" >
      <div className={`${font.className} text-3xl dark:text-amber-50`} >Dev<span className='text-purple-500' >Book</span></div>
      </Link>
      <ThemeSwitch/>
    </div>
    </div>
  )
}

export default Navbar
