import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
import Script from 'next/script';
import Navcomponent from '../components/Navcomponent'

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
        <Navcomponent />
        
        <br></br>
        
        {children}
      </body>
      
    </html>
  )
}
