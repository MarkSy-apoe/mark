import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='mt-44 ml-6 md:ml-12 text-neutral-800' id='content' style={{transition: 0.3 + 's'}}>
      <div className='grid xl:grid-cols-2 gap-[23rem]' id='home'>
        <div>
          <h1 className='text-xl md:text-4xl font-semibold'>Certified Penetration Tester.</h1>
          <p className='mt-8 text-lg md:text-xl md:font-semibold'>Hello, i&apos;m Mark Sy-apoe.<br></br>I&apos;m a certified penetration tester and a fullstack web developer.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 w-[17rem] sm:w-[41rem] md:w-[45rem] mt-8 font-semibold gap-5'>
            <div className='w-[17rem] sm:w-[18rem] md:w-[20rem] break-words md:text-xl text-lg'>
              <p>A skilled software developer with 5yrs+ experience, with a great affinity for security and secure coding.</p>
            </div>

            <div className='w-[17rem] sm:w-[18rem] md:w-[20rem] break-words md:text-xl text-lg'>
              <p>Highly talented penetration tester and exploit developer with 2yrs+ experience.</p>
            </div>         
          </div>

          <div className='flex flex-row text-black'>
            <a href='https://github.com/KarmaCyberWarrior'><svg xmlns="http://www.w3.org/2000/svg" height="35" width="34.5" viewBox="0 0 496 512" className='mt-16 hover:animate-bounce'><path stroke="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>

            <a href='https://twitter.com/Mark_syapoe'><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" className='ml-12 mt-16 hover:animate-bounce' viewBox="0 0 512 512"><path stroke="currentColor" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></a>


            <a href='https://wa.link/6xnj7w'><svg xmlns="http://www.w3.org/2000/svg" height="35" width="33" className='ml-12 mt-16 hover:animate-bounce' viewBox="0 0 448 512"><path stroke="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>

            <a href='mailto:marksyapoe@gmail.com'><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" className='ml-12 mt-16 hover:animate-bounce' viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg></a>

            <a href='https://www.linkedin.com/in/mark-sy-apoe-50135b230/'><svg xmlns="http://www.w3.org/2000/svg" height="35" width="33" className='ml-12 mt-16 hover:animate-bounce' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>

          </div>

          <Link href='/#about'><button className='mt-12 w-52 h-16 bg-purple-400 border-2 border-black rounded-md text-black font-semibold nbutton hover:bg-purple-600 hover:shadow-none'>Know more about me</button></Link>   

            

            
     
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
          <p className='mt-4 text-lg'>Welcome to my digital realm! I&apos;m Mark, a passionate <span className='text-xl font-semibold'>Fullstack Web Developer</span> with a knack for seamlessly blending creativity and technical expertise.<br></br><br></br> Currently navigating the final level of my <span className='text-xl font-semibold'>Information and Management Technology</span> journey at university, I&apos;ve honed my skills in crafting robust web solutions, delving into network administration, and exploring the intricate world of <span className='text-xl font-semibold'>penetration testing.</span><br></br><br></br>

My digital canvas extends beyond coding, as I find joy in crafting captivating digital art that mirrors my imaginative spirit. When not immersed in lines of code, you&apos;ll likely find me strategizing and engaging in intense battles in TCG games like <span className='text-xl font-semibold'>Yu-Gi-Oh</span>—a realm where strategy and creativity converge.<br></br><br></br>

In the ever-evolving landscape of technology, I am driven by a relentless curiosity and a passion for continuous learning. Join me on this journey where the digital meets the creative, and together, we&apos;ll build immersive and innovative experiences.</p>
<Link href='/skills'><button className='mt-8 w-52 h-16 bg-purple-400 border-2 border-black rounded-md text-black font-semibold nbutton hover:bg-purple-600 hover:shadow-none text-xl'>My Skillset</button></Link>
        </div>
      </div>
      <br></br><br></br>
    </main>
  )
}
