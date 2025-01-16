import productImage from '@/assets/product-image.png'
import Image from 'next/image';

export const ProductShowcase = () => {
  return <section className='bg-gradient-to-b from-[#fff] to-[#d2dcff] py-[96px]'>
    <div className="container">
      <div className='flex justify-center'>
        <div className='tag'>Boost your Productivity</div>
      </div>
      <h2 className='text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>A more effective way to track progress</h2>
      <p className='text-center'>Effortlessly turn your ideas into a fully functional, responsive, Saas Website in just minutes with this template.</p>
      <Image src={productImage} alt='productImage' />
    </div>
  </section>;
};
