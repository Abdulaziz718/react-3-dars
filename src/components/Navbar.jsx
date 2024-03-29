import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="flex justify-between p-3">
            <div>
                <h1 className='text-4xl font-bold text-white'>Logo</h1>
            </div>
            <div className='text-white flex gap-4'>
                <ul className='lg:flex gap-5 text-2xl hidden items-center'>
                    <li>Courses</li>
                    <li>Code Compiler</li>
                    <li>Discuss</li>
                    <li>Get Pro</li>
                    <li>Teams</li>
                </ul>
                <div className='flex gap-5'>
                    <button className='text-blue-600 border border-blue-600 px-6 sm:px-11 sm:py-3 rounded-lg cursor-pointer hover:bg-white hover:text-blue-600 transition-all duration-300 hover:border-white'>Log In</button>
                    <button className='bg-blue-600 border border-blue-600 rounded-lg px-6 sm:px-11 sm:py-3 cursor-pointer hover:bg-blue-700 transition-all duration-300'>Register</button>
                </div>
            </div>
        </div>
    </>    
  )
}

export default Navbar