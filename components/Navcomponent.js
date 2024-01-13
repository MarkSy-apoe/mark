"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const NavComponent = () => {
  const [elementWidth, setElementWidth] = useState('0');

  const handleButtonClick = () => {
    setElementWidth('100%');
  };

  const closeButton = () => {
    setElementWidth('0');
  };

  return(
    <>
        <nav className='w-full h-24 fixed top-0 flex flex-row justify-center items-center bg-white text-black'>
            <div className='w-5/6 flex justify-center md:inline md:w-2/6'>
                <Link href="/"><h1 className='text-4xl md:text-3xl lg:text-4xl tracking-wider cursor-pointer'>Mark Sy-apoe</h1></Link>
            </div>

            <div className='md:w-4/6 -ml-8 hidden lg:flex flex-row justify-center items-center text-black text-lg'>
                <Link href='/'><p className='hover:text-purple-800 cursor-pointer hidden md:inline'>Home</p></Link>
                <Link href='/#about'><p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>About</p></Link>
                <Link href='https://github.com/KarmaCyberWarrior'><p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>Projects</p></Link>
                <Link href='/skills'><p className='pl-8 hover:text-purple-800 cursor-pointer hidden md:inline'>Skills</p></Link>
                <Link href='/resume.pdf'><button className='w-32 hidden h-12 md:inline md:text-md text-black font-semibold border-2 border-black bg-purple-400 rounded-md hover:bg-purple-600 hover:shadow-none nbutton'>Download CV</button></Link>
            </div>

            <svg className="w-6 h-6 lg:hidden cursor-pointer text-black" onClick={handleButtonClick} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" id='togglebutton'>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </nav>
        
        <div className='h-full left-0 top-0 bg-white fixed lg:hidden overflow-hidden flex items-center justify-center' style={{width: elementWidth}}>
        <div className='text-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" onClick={closeButton} fill="currentColor" className="-mt-12 cursor-pointer" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
            <Link href='/'><p className='hover:text-purple-800 cursor-pointer mt-8' onClick={closeButton}>Home</p></Link>
            <Link href='/#about'><p className='hover:text-purple-800 cursor-pointer mt-8' onClick={closeButton}>About</p></Link>
            <Link href='https://github.com/KarmaCyberWarrior'><p className='hover:text-purple-800 cursor-pointer mt-8' onClick={closeButton}>Projects</p></Link>
            <Link href='/skills'><p className='hover:text-purple-800 cursor-pointer mt-8' onClick={closeButton}>Skills</p></Link>
            <Link href='/resume.pdf'>
              <button className='w-32 h-12 text-black font-semibold border-2 mt-8 border-black bg-purple-400 rounded-md  hover:bg-purple-600 hover:shadow-none nbutton'>Download CV</button>
            </Link>
        </div>
        </div>
    </>
  );
}

export default NavComponent;