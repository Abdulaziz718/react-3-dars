import React from 'react'
import Navbar from './Navbar'

const BlackBackground = () => {
  return (
    <>
        <div className="bg-black pb-44">
            <Navbar/>
            <center>
                <h1 className='text-white sm:text-6xl text-4xl  mt-5 font-bold'>Learning to code got simplified.</h1>
                <p className='text-slate-400 text-2xl pt-5 font-semibold'>Learn the latest technology with interactive, hands-on <br /> courses. <span className='text-white'>It’s free.</span></p>
                <div className="flex flex-col w-[350px] gap-6 mt-20">
                    <button className='bg-blue-600 text-white rounded-lg hover:bg-blue-700 py-3 transition-all duration-300 cursor-pointer'>Log in with google</button>
                    <p className='text-white text-xl font-bold'>or</p>
                    <button className='bg-transparent border border-blue-600 rounded-lg py-3 text-blue-600 cursor-pointer hover:bg-white hover:border-white transition-all dura'>See more options</button>
                </div>
            </center>
        </div>
    </>
  )
}

export default BlackBackground