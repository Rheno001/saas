'use client'
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return( 
  <header className='sticky top-0 backdrop-blur-sm z-20'>
  <div className="flex items-center justify-center py-3 bg-black text-white text-sm gap-3">
    <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
    <div className='inline-flex gap-1 items-center'>
      <p>Get Started for free</p>
      <ArrowRight className='h-4 w-4 inline-flex justify-center items-center'/>
    </div>
  </div>
  <div className='navbar py-5'>
    <div className="container ">
      <div className="flex items-center justify-between">
         <div className='flex gap-1 items-center'><Image src={Logo} alt='saas Logo' height={40} width={40} /><p className='font-bold section-description'>Saasy</p></div>
         <MenuIcon className='h-5 w-5 md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
         <nav className={`md:flex gap-6 text-black/60 items-center ${isMenuOpen ? 'flex flex-col md:flex-row' : 'hidden'}`}>
          <button className='self-end md:hidden' onClick={() => setIsMenuOpen(false)}>X</button>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
          <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-middle justify-center tracking-tight'>Get For Free</button>
         </nav>
      </div>
    </div>
  </div>
  </header>
  );
};

