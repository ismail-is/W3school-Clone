import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';




export default function Main() {


  return (

    <div className='bg-[#1B2631] text-center   pt-24  pb-24  '>
      <h1 className='text-white font-[Source Sans 3] text-6xl font-bold '>Learn to Code </h1>
      <h3 className='text-[#FFC0C7] font-bold mt-8 text-xl'>With the world's largest web developer site.</h3>
      <input type="text" placeholder='Search our tutorials, e.g. HTML' className='rounded-3xl mt-8 p-2 mb-10 w-[500px] ' />

      <button type="button" className="rounded-tr-2xl rounded-br-2xl bg-green-500 w-24 p-2 -ml-24 -mb-16 text-white" ><SearchRoundedIcon /></button><br />

      <a href='#' className='text-lg text-white font-bold mt-8'>Not Sure Where To Begin?</a>
    </div>

  )
}
