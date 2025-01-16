import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import Image from 'next/image';

export const Hero = () => {
  return <section className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_66%)]'>
    <div className="container">
      <div>
        <div className="text-[14px] inline-flex border border-[#222]/10 px-[12px] py-[4px] rounded-lg tracking-tight">Version 2.0 is here</div>
        <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">Pathway to Productivity</h1>
        <p className="text-[20px] text-[#010d3e] tracking-tight mt-6">Celebrate the joy of an accomplishment with an app design to track your progress, mtivate your efforts and celebrate your successes.</p>
        <div className="flex gap-1 items-center mt-[30px] ">
          <button className="btn btn-primary">Get for Free</button>
          <button className="btn btn-text gap-1"><span>Learn More</span><ArrowIcon className='h-5 w-5'/></button>
        </div>
      </div>
      <div className='mt-[20px]'>
        <Image src={cogImage} alt='cogImage'/>
      </div>

    </div>
  </section>;
};
