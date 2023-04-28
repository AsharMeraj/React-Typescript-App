import React from 'react'
import { Link } from 'react-scroll';
type propdisplay = {
    display: string
}
function MobileNavbar(props: propdisplay) {

    // const onclick = () => {
    //     if(document.getElementById("MobileNav")!.style.display === "flex"){
    //         document.getElementById("MobileNav")!.style.display = "none";
    //     }
    // }
    // document.querySelectorAll(".onClick").forEach(val => {
    //     val.addEventListener("click", onclick);
    //     val.addEventListener("onfocusout", onclick);
    // })
    return (
        <nav id='MobileNav' className='flex justify-center items-center absolute z-20 bg-white top-0 left-0 right-0 translate-y-16 h-[20rem] w-[95%] m-auto shadow-[rgb(150,150,150)] shadow-xl duration-200' style={{ display: props.display }}>
            <div className='flex flex-col items-center justify-between h-[15rem]'>
                <Link className='onClick font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='Home' spy={true} smooth={true} offset={50} duration={500}>HOME</Link>
                <Link className='onClick font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='About' spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>
                <Link className='onClick font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='/' spy={true} smooth={true} offset={50} duration={500}>CONTACT</Link>
                <Link className='onClick font-bold text-[rgb(0,1,78)] cursor-pointer text-[15px] hover:text-blue-600' to='/' spy={true} smooth={true} offset={50} duration={500}>SERVICES</Link>
            </div>
        </nav>
    )
}

export default MobileNavbar;