import React from 'react'

import styles from '../style'
import GetStarted from './GetStarted'
import { discount, robot2 } from '../assets'

const Hero = () => (
  <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          Up To <span className='text-white'>150%</span> APY on a {" "}
          <span className='text-white'>Tier 3</span> Staking Plan
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[75px]'>
          The Next <br className='sm:block hidden'/>
          {" "} 
          <span className='text-gradient'>Generation</span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[75px] w-full'>
        Yield Engine.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>XYZ Yield is a yield generating platform that utilizes tiered staking and vaults to provide its users with a straight forward way to generate passive income through smart contracts.</p>

      <div className='mt-[10px]'>
        <button className={`${styles.buttonPlan} px-[30px] mr-[10px] md:mr-[20px] bg-blue-gradient`}>Buy Now</button>
        <button className={`${styles.buttonPlan} px-[30px] md:mr-[20px] bg-blue-gradient`}>Chart</button>
      </div>
    </div>


    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot2} alt="billing" className='w-[100%] h=[100%] relative z-[5]'/>

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)


export default Hero