import productImage from '@/assets/product-image.png'
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

export const ProductShowcase = () => {
  return <section className='bg-gradient-to-b from-[#fff] to-[#d2dcff] py-[96px] overflow-x-clip'>
    <div className="container">
      <div className='max-w-[540px] mx-auto'>
        <div className='flex justify-center'>
          <div className='tag'>Boost your Productivity</div>
        </div>
        <h2 className='text-center text-3xl md:text-[54px] md;leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5'>A more effective way to track progress</h2>
        <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5'>Effortlessly turn your ideas into a fully functional, responsive, Saas Website in just minutes with this template.</p>
      </div>
      <div className='relative'>
       <Image src={productImage} alt='productImage' className='mt-[40px]'/>
       <Image src={pyramidImage} alt='pyramidiMAGE' className='hidden md:block absolute -right-36 -top-32' height={262} width={262}/>
       <Image src={tubeImage} alt='tubeImage' height={248} className='hidden md:block hidden md:blockabsolute bottom-24 -left-36'/>
      </div>
    </div>
  </section>;
};
