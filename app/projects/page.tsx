import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function projects() {
  return (
    <main className='mt-44 ml-6 md:ml-12 text-neutral-800'>
        <div className='grid xl:grid-cols-2 gap-[23rem]'>
            <div>
                <h1 className='text-4xl font-semibold'>Projects.</h1>
                <p className='text-xl font-semibold mt-4'>As an experienced developer and penetration tester, over the years i&apos;ve worked on both open and closed source projects. You can find my projects on my github. Here are some live ones</p>

                <button className='mt-20 w-52 h-16 bg-purple-400 border-2 border-black rounded-md text-black font-semibold nbutton hover:bg-purple-600 hover:shadow-none'>Let&apos;s go!</button>
            </div>

            <div className='hidden xl:inline'>
                <div className='w-[20rem] h-[20rem] bg-purple-400 ncard'>
                    <Image
                    src="/mojithinking.svg"
                    width={300}
                    height={300}
                    alt='Memoji'
                    />
                </div>
            </div>
        </div>

        <div className='grid justify-items-center xl:grid-cols-3 mt-36 gap-8'>
            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>HTML</h1>
                <p className='mt-12 text-lg lg:text-xl'>Foundation of web development.<br></br>
Defines the structure and content of web pages.</p>
            </div>
        </div>
    </main>
  )
}
