import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import Image from 'next/image';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';

export const Hero = () => {
  return <section className='pt-8 pb-20 md:pt-[20px] md:pb-[40px] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip'>
    <div className="container">
     <div className='md:flex items-center'>
      <div className='md:w-[478px]'>
        <div className="text-[14px] inline-flex border border-[#222]/10 px-[12px] py-[4px] rounded-lg tracking-tight">Version 2.0 is here</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">Pathway to Productivity</h1>
        <p className="text-[20px] text-[#010d3e] tracking-tight mt-6">
          Celebrate the joy of an accomplishment with an app design to track your progress, motivate your efforts and celebrate your successes.</p>
        <div className="flex gap-1 items-center mt-[30px] ">
          <button className="btn btn-primary">Get for Free</button>
          <button className="btn btn-text gap-1"><span>Learn More</span><ArrowIcon className='h-5 w-5'/></button>
        </div>
      </div>
      <div className='mt-[20px] md:mt-0 md:h-[648px] md:flex-1 relative'>
        <Image src={cogImage} alt='cogImage' className='md:absolute md:h-full w-auto md:max-w-none md:-left-6 lg;left-0'/>
        <Image src={cylinderImage} width={220} height={220} alt='cylinderImage' className='hidden md:block -top-[32px] -left-[128px] md:absolute'/>
        <Image src={noodleImage} width={220} alt='noodleImage' className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'/>
      </div>
     </div>

    </div>
  </section>;
};
