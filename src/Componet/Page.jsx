import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Page() {
  return (
    <div>
      
        <div className='bg-[#1B2631] text-white text-center pt-20'>
            <h1 className='font-bold font-sans text-5xl'> Become a PRO User</h1>
            <h3 className='text-[#FFC0C7] text-2xl m-4 '>And unlock powerful features:</h3>
            <div>
                <ul>
                     <li ><VerifiedIcon/>    Browse W3Schools<strong>without ads</strong> </li>
                     <li className='ml-3 m-2'> <VerifiedIcon/> Website hosting (Includes Spaces PRO)</li>
                     <li className='ml-1 m-2'> <VerifiedIcon/> Access to our HTML Video Tutorial</li>
                </ul>
                <button type="button" className=' text-xl mt-3 mb-2 ml-9 text-white  p-2 w-60 rounded-full bg-green-500 ml-24  ' >Learn More</button><br />

            </div>
        </div>
    </div>
  )
}
