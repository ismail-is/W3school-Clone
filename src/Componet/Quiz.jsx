import React from 'react'

export default function Quiz() {
  return (
    <div className='bg-[#1B2631] '>
        <h2 className='text-6xl font-bold text-white text-center p-6 '>Exercises and Quizzes</h2>
        <h4 className='font-normal text-white text-center mt-4'>Test your skills!</h4>
        <div className='grid grid-cols-2'> 
        <div className='bg-green-500 text-center p-20 m-10  rounded-2xl'><h3>Exercises</h3></div>
        <div className='bg-yellow-200 text-center p-20 m-10 rounded-2xl'><h3>Quizzes</h3></div>

        </div>
    </div>
  )
}
