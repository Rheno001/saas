import ArrowIcon from '@/assets/arrow-right.svg';

export const Hero = () => {
  return <section>
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

    </div>
  </section>;
};
