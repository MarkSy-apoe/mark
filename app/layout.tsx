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
      
      <body className='bg-white dark:bg-slate-900'>
        <nav className='w-full h-24 fixed top-0 flex flex-row justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white dark:bg-slate-900 text-black'>
          
          <div className='w-2/6 md:w-2/6 ml-4'>
            <h1 className='-ml-10 sm:ml-0 font-semibold tracking-wide text-xl dark:text-purple-200 sm:text-3xl sm:text-black dark:sm:text-white md:text-4xl '>Mark <span className='text-purple-800 dark:text-purple-300 text-xl sm:text-3xl md:text-4xl'>Sy-apoe</span></h1>
          </div>
          
          <div className='md:w-3/6 h-24 flex flex-row justify-center items-center text-black dark:text-white text-lg'>
            
            <Link href='/#home'><p className='hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer hidden md:inline'>Home</p></Link>
            <Link href='/#about'><p className='pl-8 hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer hidden md:inline'>About</p></Link>
            <p className='pl-8 hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer hidden md:inline'>Projects</p>
            <p className='pl-8 hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer hidden md:inline'>Blog</p>

          </div>

          <div className='w-2/6 md:w-1/6 flex items-center justify-center'>
            <button className='w-32 hidden h-12 md:inline md:text-md text-black dark:text-white font-semibold border-2 border-black bg-purple-400 rounded-md hover:bg-purple-600 dark:hover:bg-purple-500 hover:shadow-none nbutton'>Download CV</button>
            
            <svg className="w-6 h-6 cursor-pointer text-black dark:text-white md:hidden ml-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" id='togglebutton'>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            
          </div>
         
        </nav>
        <div className='mt-24 w-full fixed inline md:hidden'>
          <div className='pl-12 w-full h-0 gap-4 bg-white dark:bg-slate-900 grid grid-cols-1 backdrop-filter backdrop-blur-lg bg-opacity-20 text-black dark:text-white overflow-hidden' id='navmobile' style={{transition: 0.3 + 's'}}>
            <p className='hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer'>Home</p>
            <p className='hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer'>About</p>
            <p className='hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer'>Projects</p>
            <p className='hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer'>Blog</p>
            <button className='w-32 h-12 text-black dark:text-white font-semibold border-2 border-black bg-purple-400 rounded-md  hover:bg-purple-600 dark:hover:bg-purple-500 hover:shadow-none nbutton'>Download CV</button>
          </div>
          <Script type='text/javascript' src='/_next/static/js/nav.js'></Script>
        </div>
        
        <br></br>
        
        {children}
      </body>
      
    </html>
  )
}
