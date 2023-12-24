import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Mark Sy-apoe || Certified Penetration Tester',
  description: 'Mark: The origin. Certified with compTIA pentest+.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      
      <body className='bg-white'>
        <nav className='w-full h-24 fixed top-0 flex flex-row justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white text-black'>
          
          <div className='w-2/6 md:w-2/6 ml-4'>
            <h1 className='font-semibold tracking-wide text-2xl text-purple-800 sm:text-3xl sm:text-black md:text-4xl '>Mark <span className='text-purple-800 hidden sm:inline'>Sy-apoe</span></h1>
          </div>
          
          <div className='md:w-3/6 h-24 flex flex-row justify-center items-center text-black text-lg'>
            
            <p className='hover:text-purple-800 cursor-pointer hidden md:inline'>Home</p>
            <p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>About</p>
            <p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>Projects</p>
            <p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>Blog</p>

          </div>

          <div className='w-2/6 md:w-1/6 flex items-center justify-center'>
            <button className='w-32 hidden h-12 sm:inline md:text-md text-black font-semibold border-2 border-black bg-purple-400 rounded-md hover:bg-purple-600 hover:shadow-none nbutton'>Download CV</button>
            
            <svg className="w-6 h-6 cursor-pointer md:hidden ml-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" id='togglebutton'>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            
          </div>
         
        </nav>
        <div className='mt-24 fixed inline'>
          <div className='ml-12 mt-4 w-full h-0 gap-4 grid grid-cols-1 text-black overflow-hidden' id='navmobile' style={{transition: 0.3 + 's'}}>
            <p className='hover:text-purple-800 cursor-pointer'>Home</p>
            <p className='hover:text-purple-800 cursor-pointer'>About</p>
            <p className='hover:text-purple-800 cursor-pointer'>Projects</p>
            <p className='hover:text-purple-800 cursor-pointer'>Blog</p>
            <button className='w-32 h-12 text-black font-semibold border-2 border-black bg-purple-400 rounded-md  hover:bg-purple-600 hover:shadow-none nbutton'>Download CV</button>
          </div>
        </div>
        <Script type='text/javascript' src='_next/static/scripts/nav.js'></Script>
        
        {children}
      </body>
      
    </html>
  )
}
