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
            <h1 className='-ml-10 sm:ml-0 font-semibold tracking-wide text-xl sm:text-3xl sm:text-black md:text-4xl '>Mark <span className='text-purple-800 text-xl sm:text-3xl md:text-4xl'>Sy-apoe</span></h1>
          </div>
          
          <div className='md:w-3/6 h-24 flex flex-row justify-center items-center text-black text-lg'>
            
            <Link href='/'><p className='hover:text-purple-800 cursor-pointer hidden md:inline'>Home</p></Link>
            <Link href='/#about'><p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>About</p></Link>
            <Link href='https://github.com/KarmaCyberWarrior'><p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>Projects</p></Link>
            <Link href='/skills'><p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>Skills</p></Link>

          </div>

          <div className='w-2/6 md:w-1/6 flex items-center justify-center'>
          <Link href='/resume.pdf'><button className='w-32 hidden h-12 md:inline md:text-md text-black font-semibold border-2 border-black bg-purple-400 rounded-md hover:bg-purple-600 hover:shadow-none nbutton'>Download CV</button></Link>
            
            <svg className="w-6 h-6 cursor-pointer text-black md:hidden ml-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" id='togglebutton'>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            
          </div>
         
        </nav>
        <div className='mt-24 w-full fixed inline md:hidden'>
          <div className='pl-12 w-full h-0 gap-4 bg-white grid grid-cols-1 backdrop-filter backdrop-blur-lg bg-opacity-20 text-black overflow-hidden' id='navmobile' style={{transition: 0.3 + 's'}}>
            <Link href='/'><p className='hover:text-purple-800 cursor-pointer'>Home</p></Link>
            <Link href='/#about'><p className='hover:text-purple-800 cursor-pointer'>About</p></Link>
            <Link href='https://github.com/KarmaCyberWarrior'><p className='hover:text-purple-800 cursor-pointer'>Projects</p></Link>
            <Link href='/skills'><p className='hover:text-purple-800 cursor-pointer'>Skills</p></Link>
            <Link href='/resume.pdf'>
              <button className='w-32 h-12 text-black font-semibold border-2 border-black bg-purple-400 rounded-md  hover:bg-purple-600 hover:shadow-none nbutton'>Download CV</button>
            </Link>
          </div>
          <Script type='text/javascript' src='https://somejs-dusky.vercel.app/nav.js'></Script>
        </div>
        
        <br></br>
        
        {children}
      </body>
      
    </html>
  )
}
