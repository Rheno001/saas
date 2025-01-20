import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';


export const CallToAction = () => {
  return <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
    <div className="container">
      <div className='section-heading relative'>
        <h2 className="section-title">Sign Up for Free today</h2>
        <p className="section-description mt-5">Celbrate the joy of accomplishment with an app design to track your progress and motivate your efforts.</p>
        <Image src={starImage} alt= 'StarImage' width={360} className='absolute -left-[350px] -top-[137px]'/>
        <Image src={springImage} alt='Spring Image' width={360} className='absolute -right-[331px] -top-[19px]'/>
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text"><span>Learn More</span><ArrowRight className='h-5 w-5 gap-1'/></button>
      </div>
    </div>
  </section>;
};
