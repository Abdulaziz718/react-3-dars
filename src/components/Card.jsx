import React from 'react'
import odam from "./img/odam.svg"
import odam1 from "./img/odam-1.svg"
import odam2 from "./img/odam-2.svg"

const Card = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 gap-5 pb-10">
            <div className='flex flex-col gap-5 bg-white rounded-lg'>
                <img src={odam} alt="" />
                <center>
                    <h1 className='text-3xl font-bold'>Tailored to you</h1>
                <p className='text-slate-500 px-7 pt-3 font-bold text-xl'>No matter your experience level, you'll be writing <span className='text-slate-600'>real, functional code within minutes </span> of starting your first course.</p>
                <button className='px-10 bg-blue-500 border border-blue-500 text-white text-lg py-2 mb-7 rounded-md  font-bold mt-10 hover:bg-blue-600 transition-all duration-300'>Start learning</button>
                </center>
            </div>
            <div className='flex flex-col gap-5 bg-white rounded-lg'>
                <img src={odam1} alt="" />
                <center>
                    <h1 className='text-3xl font-bold'>Tailored to you</h1>
                <p className='text-slate-500 px-7 pt-3 font-bold text-xl'>No matter your experience level, you'll be writing <span className='text-slate-600'>real, functional code within minutes </span> of starting your first course.</p>
                <button className='px-10 bg-blue-500 border border-blue-500 text-white text-lg py-2 mb-7 rounded-md  font-bold mt-10 hover:bg-blue-600 transition-all duration-300'>Start learning</button>
                </center>
            </div>
            <div className='flex flex-col gap-5 bg-white rounded-lg'>
                <img src={odam2} alt="" />
                <center>
                    <h1 className='text-3xl font-bold'>Tailored to you</h1>
                <p className='text-slate-500 px-7 pt-3 font-bold text-xl'>No matter your experience level, you'll be writing <span className='text-slate-600'>real, functional code within minutes </span> of starting your first course.</p>
                <button className='px-10 bg-blue-500 border border-blue-500 text-white text-lg py-2 mb-7 rounded-md  font-bold mt-10 hover:bg-blue-600 transition-all duration-300'>Start learning</button>
                </center>
            </div>
        </div>
        
    </>
  )
}

export default Card