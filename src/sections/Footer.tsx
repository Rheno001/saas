import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLink from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYou from '@/assets/social-youtube.svg'

export const Footer = () => {
  return <footer className='bg-[#000] text-[#bcbcbc] text-sm py-10 text-center'>
    <div className="container">
      <div className='inline-flex relative before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute'>
       <Image src={Logo} height={40} alt='saas logo' className='relative'/>
      </div>
      <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
        <a href="#" className='hover:text-white'>About</a>
        <a href="#" className='hover:text-white'>Feature</a>
        <a href="#" className='hover:text-white'>Customers</a>
        <a href="#" className='hover:text-white'>Pricing</a>
        <a href="#" className='hover:text-white'>Help</a>
        <a href="#" className='hover:text-white'>Careers</a>
      </nav>
      <div className='flex justify-center gap-6 mt-6'>
        <SocialX className='hover:text-white hover:scale-105'/>
        <SocialYou className='hover:text-white hover:scale-105'/>
        <SocialPin className='hover:text-white hover:scale-105'/>
        <SocialLink className='hover:text-white hover:scale-105'/>
        <SocialInsta className='hover:text-white hover:scale-105'/>
      </div>
      <p className='mt-6'>&copy; 2025 Saasify , Inc. All Rights reserved</p>

    </div>
  </footer>;
};
