import React from 'react'
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

import { Icon } from '@mui/material';

export default function Headnav() {
   
   
    return (
             
            <div className='flex bg-white h-14    '>
          
             <img src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1691/original/306149583_580886133837672_8720407359695224497_n.png" className=' m-1 '/>
             <ul  className='flex stext-sm  mt-3 space-x-14'>
                    <li>Tutorials</li>
                    <li>Exercises</li>
                    <li >Services</li>
                    <li>Services</li>

                </ul>
                <ul  className='flex  text-sm mt-3  mx-64 space-x-20'>
                    <li className='flex ' ><AutoAwesomeTwoToneIcon />Bootcamps </li>
                    <li className='flex'><RedeemOutlinedIcon />Spaces </li>
                    


                </ul>
                <ul className='flex -mx-52 mt-1 w-fit'>
                <li ><button className='bg-green-400 rounded-full h-10 w-20 space-x-10' >SignUp</button></li>
                    <li><button className='bg-[#D5F5E3] rounded-full h-10 w-20' >Login</button></li>

                </ul>
               
            </div>
            
        
        
 
        
    )
}
