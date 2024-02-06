import React, { useState } from 'react'
import img from "../assets/hero.jpg"


const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between px-32 py-10 pt-50 lg:pt-10 -mt-24 bg-PrimaryColor '>
        <div className="">
            <h1 className="text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">Discovering your own Fashion</h1>
            <p className="w-full lg:w-3/4 text-DarkColor font-medium">
            Step into a world where fashion meets artistry, 
            and redefine your wardrobe with pieces that stand the test of time
            </p>
            <button className="bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-purple-900 ">Shop Now</button>
        </div>
        <div className='bg-DarkColor p-5 mt-10 rounded-tr-[290px] rounded-tl-4xl rounded-br-4xl'>
          <img className="-ml-5 -mb-5" width={800} src={img} alt="img" />
        </div>
    </div>
  )
}

export default Home