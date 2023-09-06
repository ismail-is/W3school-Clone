import React from 'react'

import PublicIcon from '@mui/icons-material/Public';
import DonutSmallSharpIcon from '@mui/icons-material/DonutSmallSharp';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import {Link} from 'react-router-dom'


export default function Header() {

  return (

    <div className='h-5  '>
      <ul className='flex space-x-9   text-xs  bg-[#1C2833] text-white font-normal pt-1'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>SQL</li>
        <li>PYTHON</li>
        <li>JAVA</li>
        <li>PHP</li>
        <li>HOWTO</li>
        <li>W3.CSS</li>
        <li>C</li>
        <li>C++</li>
        <li>C#</li>
        <li>BOOTSTRAP</li>
        <li>REACT</li>
        <li>MYSQL</li>
        <li>VUE</li>

      
        {/* <li><DonutSmallSharpIcon /></li> */}
        <li><PublicIcon /></li>
        <li><SearchRoundedIcon /></li>
        {/* <Link to="/"></Link> */}






      </ul>
    </div>


  )
}
