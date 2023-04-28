import React from 'react'

function MainBox() {
  return (
    <main id='Home' className='flex items-center w-full max-lg:h-[30rem] h-[45rem] justify-center'>
      <div className='w-[80rem] mx-10 max-lg:mx-5 relative top-[6rem]'>
        <div className='w-[45rem] relative max-[760px]:w-full'>
            <h1 className='text-[3rem] text-blue-900 font-extrabold max-sm:text-[2.5rem] max-[360px]:text-[2rem]'>We Collect High Quality Leads</h1>
            <p className='text-[18px] text-[rgb(0,1,78)] font-medium mt-8 mb-8 max-[640px]:mt-2 max-[640px]:mb-4 max-[360px]:text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor culpa ipsum. Commodi recusandae veritatis odit saepe, tempora provident corporis vitae explicabo quibusdam quia facere eius, itaque repellendus et reiciendis.</p>
            <button className='font-bold text-[14px] py-4 px-8 hover:bg-green-500 text-white bg-green-400 rounded-md shadow-md shadow-[rgb(160,160,160)]'>CONTACT US</button>
        </div>
      </div>
    </main>
  )
}

export default MainBox;