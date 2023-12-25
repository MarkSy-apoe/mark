import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='mt-44 ml-6 md:ml-12 text-neutral-800 dark:text-white' id='content' style={{transition: 0.3 + 's'}}>
      <div className='grid xl:grid-cols-2 gap-[23rem]' id='home'>
        <div>
          <h1 className='text-xl md:text-4xl font-semibold' id='typewrite'></h1>
          <p className='mt-8 text-lg md:text-xl md:font-semibold'>Hello, i'm Mark Sy-apoe.<br></br>I'm a certified penetration tester and a fullstack web developer.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 w-[17rem] sm:w-[41rem] md:w-[45rem] mt-8 font-semibold gap-5'>
            <div className='w-[17rem] sm:w-[18rem] md:w-[20rem] break-words md:text-xl text-lg'>
              <p>A skilled software developer with 5yrs+ experience, with a great affinity for security and secure coding.</p>
            </div>

            <div className='w-[17rem] sm:w-[18rem] md:w-[20rem] break-words md:text-xl text-lg'>
              <p>Highly talented penetration tester and exploit developer with 2yrs+ experience.</p>
            </div>         
          </div>

          <Link href='/#about'><button className='mt-12 w-52 h-16 bg-purple-400 border-2 border-black rounded-md text-black dark:text-white font-semibold nbutton hover:bg-purple-600 dark:hover:bg-purple-500 hover:shadow-none'>Know more about me</button></Link>       
        </div>

        <div className='hidden xl:inline'>
          <div className='w-[20rem] h-[20rem] bg-purple-400 ncard'>
            <Image
              src="/mojilike.svg"
              width={300}
              height={300}
              alt='Memoji'
            />
          </div>
        </div>
      </div>


      <div className='mt-32 w-full md:flex md:flex-row grid grid-cols-1' id='about'>
        <div className='mt-24'>
          <img src='https://media.giphy.com/media/3ornk57KwDXf81rjWM/giphy.gif' className='w-[30rem] h-[23rem]' alt='Memoji'/>
        </div>

        <div className='w-full md:w-[40rem] break-words md:ml-12'>
          <div className='w-32 h-12 bg-purple-400 flex items-center justify-center nbutton mt-4'>
            <h1 className='text-2xl font-semibold'>About Me</h1>
          </div>
          <p className='mt-4 text-lg'>Welcome to my digital realm! I'm Mark, a passionate Fullstack Web Developer with a knack for seamlessly blending creativity and technical expertise.<br></br><br></br> Currently navigating the final level of my Information and Management Technology journey at university, I've honed my skills in crafting robust web solutions, delving into network administration, and exploring the intricate world of penetration testing.<br></br><br></br>

My digital canvas extends beyond coding, as I find joy in crafting captivating digital art that mirrors my imaginative spirit. When not immersed in lines of code, you'll likely find me strategizing and engaging in intense battles in TCG games like Yu-Gi-Oh—a realm where strategy and creativity converge.<br></br><br></br>

In the ever-evolving landscape of technology, I am driven by a relentless curiosity and a passion for continuous learning. Join me on this journey where the digital meets the creative, and together, we'll build immersive and innovative experiences.</p>
<Link href='/#about'><button className='mt-8 w-52 h-16 bg-purple-400 border-2 border-black rounded-md text-black dark:text-white font-semibold nbutton hover:bg-purple-600 dark:hover:bg-purple-500 hover:shadow-none text-xl'>My Skillset</button></Link>
        </div>
      </div>

      <div className='mt-32 -ml-6 md:-ml-12 w-full flex justify-center'>
       <div className='w-44 h-12 bg-purple-400 flex items-center justify-center nbutton'>
        <h1 className='text-2xl font-semibold'>My Projects</h1>
       </div>
      </div>
      <br></br><br></br>
    </main>
  )
}
