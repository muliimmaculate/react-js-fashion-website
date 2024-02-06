import React, { useState } from 'react'
import {Link} from "react-scroll"
import {FaUser, FaShoppingCart} from "react-icons/fa"
// import {AiOUtLineClose} from "react-icons/ai"
// import {RiMenu2Line} from "react-icons/ri"


const Navbar = () => {

  const [Menu, setMenu] =useState(false);

  // const handleChange = () => {
  //   setMenu(!Menu);
  // };
  return (
    <header>
        <section>
          <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-PrimaryColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <div>
              <Link>
              <h1 className='text-2xl font-semibold text-ExtraDarkColor'>StyleMe</h1>
              </Link>
              
          </div>
          <nav className='flex flex-row items-center text-md font-semi-light gap-8 text-ExtraDarkColor'>
            <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-black transition duration-300 ease-in-out cursor-pointer">Home</Link>
            <Link to="aboutus" spy={true} smooth={true} duration={500} className="hover:text-black transition duration-300 ease-in-out cursor-pointer">About Us</Link>
            <Link to="shop" spy={true} smooth={true} duration={500} className="hover:text-black transition duration-300 ease-in-out cursor-pointer">Shop</Link>
            <Link to="features" spy={true} smooth={true} duration={500} className="hover:text-black transition duration-300 ease-in-out cursor-pointer">Features</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-black transition duration-300 ease-in-out cursor-pointer">Contact</Link>
          </nav>

          <div className='flex items-center gap-5'>
            <FaUser  size={25} className='text-DarkColor'/>
            <div className='text-DarkColor relative'>
            <FaShoppingCart size={25} className='cursor-pointer'/>
            <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[20px] h-[20px] rounded-full text-white text-sm grid place-items-center  '>
1
            </div>
            </div>
          
          </div> 
          {/* menu icons  */}
          {/* <div>
            {menu ? (
              <AiOUtLineClose size={28} onClick={handleChange}  /> 
            ) : ( <RiMenu2Line size={28}  onClick={handleChange} />
          )}
          </div> */}
          </div>
        </section>
    </header>
  );
};

export default Navbar