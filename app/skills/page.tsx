import Image from 'next/image'
import Link from 'next/link'

export default function Skills() {
  return (
    <main className='mt-44 ml-6 md:ml-12 text-neutral-800' id='content' style={{transition: 0.3 + 's'}}>
        <div className='grid xl:grid-cols-2 gap-[23rem]'>
            <div>
                <h1 className='text-4xl font-semibold'>Skillset.</h1>
                <p className='text-xl font-semibold mt-4'>As an experienced developer and penetration tester, over the years i&apos;ve worked with several technologies, tools, languages and operating systems.</p>

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
    </main>
  )
}
