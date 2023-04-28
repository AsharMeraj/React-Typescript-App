import React from 'react'
import Logo from '../Images/Logo.png'
import { useState } from 'react';
import Menu from '../Images/Menu.png'
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-scroll';

function Navbar() {
  const [position, setPosition] = useState(false);
  const [mobileNavbar, SetmobileNavbar] = useState(false);

  function AppearNavbar() {
    const MobileNav = document.getElementById("MobileNav")!
    if (window.scrollY >= 400) {
      setPosition(true);
      MobileNav.style.position = "fixed";
    }
    else {
      setPosition(false);
      MobileNav.style.position = "absolute";

    }
  }
  window.addEventListener('scroll', AppearNavbar);


  return (
    <div>
      <nav id='navbar' className={position ? 'w-full flex justify-center items-center py-3 fixed shadow-lg shadow-[rgb(100,100,100)] bg-white z-20 duration-500' : 'w-full flex justify-center shadow-lg shadow-white absolute items-center py-3'}>
        <div className='w-[85rem] flex items-center justify-between mx-10 max-lg:mx-5'>
          <div className='flex items-center'>
            <img className='max-lg:w-[2.5rem] w-[3rem]' src={Logo} alt="" />
            <h1 className='text-2xl text-blue-900 font-extrabold flex items-center ml-4 max-sm:ml-2 max-lg:text-xl'>BusinessGrowth</h1>
          </div>
          <div id='namebox' className='flex items-center justify-between w-[28rem] max-lg:hidden'>

            <Link className='names font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='Home' spy={true} smooth={true} offset={50} duration={500}>HOME</Link>



            <Link className='names font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='About' spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>



            <Link className='names font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='/' spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link>



            <Link className='names font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='/' spy={true} smooth={true} offset={50} duration={500}>SERVICES</Link>

          </div>
          <button className='font-bold text-[14px] py-4 px-8 hover:bg-green-500 text-white bg-green-400 rounded-md shadow-md shadow-[rgb(160,160,160)] max-lg:hidden'>SIGN UP</button>

          <img onClick={() => SetmobileNavbar(!mobileNavbar)} className='max-lg:block hidden' src={Menu} width={20} height={30} alt="" />
        </div>
      </nav>
      {mobileNavbar ? <MobileNavbar display="flex" /> : <MobileNavbar display="none" />}
    </div>
  )
}
export default Navbar