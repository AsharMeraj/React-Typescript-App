import React from 'react'
import Marketing from '../Images/Marketing.png'
import RightArrow from '../Images/RightArrow.png'
import LinkBuilding from '../Images/LinkBuilding.png'
import SEO from '../Images/SEO.png'

function About() {

  return (
    <main id='About' className='w-full h-fit px-10 max-lg:px-6 py-[12rem]'>
      <h1 className='text-[3rem] text-blue-900 font-extrabold max-sm:text-[2.5rem] max-[360px]:text-[2rem] m-auto w-fit text-center'>What We Will Do For Your Business</h1>
      <div className='GridSetKaro h-fit w-full m-auto mt-16'>

        <div className=' rounded-xl h-fit py-20 shadow-[rgb(180,180,180)] shadow-xl duration-500'>
          <img className='m-auto' src={LinkBuilding} width={65} alt="" />
          <h1 className='text-blue-900 text-[1.7rem] w-fit m-auto mt-6 font-bold'>Link Building</h1>
          <p className='text-[18px] text-[rgb(0,1,78)] font-medium text-center mx-4 mt-4'>Lorem ipsum dolor sit amet etur adipisicing elit. Excepturi minus qui, sequi nulla quae nam</p>
          <div className='flex items-center w-fit m-auto mt-8'>
            <img src={RightArrow} width={30} alt="" />
            <button className='ml-2 text-green-400 text-[14px] font-bold'>GET STARTED</button>
          </div>
        </div>



        <div className=' rounded-xl h-fit py-20 shadow-[rgb(180,180,180)] shadow-xl duration-500'>
          <img className='m-auto' src={Marketing} width={65} alt="" />
          <h1 className='text-blue-900 text-[1.7rem] w-fit m-auto mt-6 font-bold text-center'>Content Marketing</h1>
          <p className='text-[18px] text-[rgb(0,1,78)] font-medium text-center mx-4 mt-4'>Lorem ipsum dolor sit amet etur adipisicing elit. Excepturi minus qui, sequi nulla quae nam</p>
          <div className='flex items-center w-fit m-auto mt-8'>
            <img src={RightArrow} width={30} alt="" />
            <button className='ml-2 text-green-400 text-[14px] font-bold'>GET STARTED</button>
          </div>
        </div>



        <div className=' rounded-xl h-fit py-20 shadow-[rgb(180,180,180)] shadow-xl duration-500'>
          <img className='m-auto' src={SEO} width={65} alt="" />
          <h1 className='text-blue-900 text-[1.7rem] w-fit m-auto mt-6 font-bold'>On Page SEO</h1>
          <p className='text-[18px] text-[rgb(0,1,78)] font-medium text-center mx-4 mt-4'>Lorem ipsum dolor sit amet etur adipisicing elit. Excepturi minus qui, sequi nulla quae nam</p>
          <div className='flex items-center w-fit m-auto mt-8'>
            <img src={RightArrow} width={30} alt="" />
            <button className='ml-2 text-green-400 text-[14px] font-bold'>GET STARTED</button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default About;