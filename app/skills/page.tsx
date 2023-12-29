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

        <div className='grid justify-items-center ml-1/4 xl:grid-cols-3 mt-36 gap-8'>
            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>HTML</h1>
                <p className='mt-12 text-lg lg:text-xl'>Foundation of web development.<br></br>
Defines the structure and content of web pages.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>CSS</h1>
                <p className='mt-12 text-lg lg:text-xl'>Styles and enhances the presentation of HTML.<br></br>
Controls layout, colors, and design.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>JavaScript</h1>
                <p className='mt-12 text-lg lg:text-xl'>Adds interactivity and dynamic behavior to websites.<br></br>
Client-side scripting language.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>TypeScript</h1>
                <p className='mt-12 text-lg lg:text-xl'>Superset of JavaScript with static typing.<br></br>
Enhances code maintainability and scalability.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Nextjs</h1>
                <p className='mt-12 text-lg lg:text-xl'>React framework for building optimized web applications.<br></br>
Streamlines server-side rendering and routing.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Python</h1>
                <p className='mt-12 text-lg lg:text-xl'>Versatile programming language.<br></br>
Used for web development, scripting, data analysis, and more.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Bash</h1>
                <p className='mt-12 text-lg lg:text-xl'>Command-line scripting language for Unix-like systems.<br></br>
Automates tasks and facilitates system administration.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Linux</h1>
                <p className='mt-12 text-lg lg:text-xl'>Open-source operating system kernel.<br></br>
Widely used for server environments and development.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Cyber-security</h1>
                <p className='mt-12 text-lg lg:text-xl'>Focuses on protecting computer systems from attacks.<br></br>
Involves risk management, network security, and more.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>MetaSploit</h1>
                <p className='mt-12 text-lg lg:text-xl'>Penetration testing framework.<br></br>
Identifies and mitigates vulnerabilities in computer systems.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Django</h1>
                <p className='mt-12 text-lg lg:text-xl'>High-level Python web framework.<br></br>
Facilitates rapid development of robust web applications.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Git</h1>
                <p className='mt-12 text-lg lg:text-xl'>Version control system.<br></br>
Manages and tracks changes in code collaboratively.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Database and SQL</h1>
                <p className='mt-12 text-lg lg:text-xl'>Manages structured data using a relational database.<br></br>
SQL &apos;Structured Query Language&apos; for querying and manipulating data.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>AWS</h1>
                <p className='mt-12 text-lg lg:text-xl'>Cloud computing platform.<br></br>
Offers a range of services like computing power, storage, and databases.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Tailwind CSS</h1>
                <p className='mt-12 text-lg lg:text-xl'>Utility-first CSS framework.<br></br>
Simplifies styling and improves maintainability.</p>
            </div>

            <div className='w-[15rem] sm:w-[20rem] md:w-[25rem] h-[20rem] border border-black rounded-md break-words px-4 font-semibold group cursor-pointer hover:text-white hover:bg-purple-700'>
                <h1 className='ml-8 mt-12 text-xl lg:text-3xl'>Bootstrap</h1>
                <p className='mt-12 text-lg lg:text-xl'>Front-end framework.<br></br>
Provides pre-designed components for responsive web development.</p>
            </div>
        </div>
        <br></br>
    </main>
  )
}
