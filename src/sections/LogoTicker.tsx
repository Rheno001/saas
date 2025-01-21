'use client'
import acmeLogo from '@/assets/logo-acme.png';
import quantomLogo from '@/assets/logo-quantum.png';
import echo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import {motion} from 'framer-motion';



export const LogoTicker = () => {
  return <div className='py-[32px] md:py-12 bg-white'>
    <div className='container'>
      <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
      <motion.div className="flex gap-[56px] flex-none pr-14"
      animate={{
        translateX: '-50%',
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      >
        <Image src={acmeLogo} alt='acme logo' className='logo-ticker-image'/>
        <Image src={quantomLogo} alt='quantum logo' className='logo-ticker-image'/>
        <Image src={echo} alt='echo logo' className='logo-ticker-image'/>
        <Image src={celestialLogo} alt='celestial logo' className='logo-ticker-image'/>
        <Image src={apexLogo} alt='apex logo' className='logo-ticker-image'/>
        <Image src={pulseLogo} alt='pulse logo' className='logo-ticker-image'/>
        
        {/*second set*/}
        <Image src={acmeLogo} alt='acme logo' className='logo-ticker-image'/>
        <Image src={quantomLogo} alt='quantum logo' className='logo-ticker-image'/>
        <Image src={echo} alt='echo logo' className='logo-ticker-image'/>
        <Image src={celestialLogo} alt='celestial logo' className='logo-ticker-image'/>
        <Image src={apexLogo} alt='apex logo' className='logo-ticker-image'/>
        <Image src={pulseLogo} alt='pulse logo' className='logo-ticker-image'/>
      </motion.div>
      </div>

    </div>

  </div>;
};
