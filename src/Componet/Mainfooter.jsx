import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function () {
  
  const First=[
  "HTML Tutorial",
  "CSS Tutorial",
 " JavaScript Tutorial",
 " How To Tutorial",
" SQL Tutorial",
"Python Tutorial",
  "W3.CSS Tutorial",
"Bootstrap Tutorial",
 "PHP Tutorial",
  "Java Tutorial",
 " C++ Tutorial",
  "jQuery Tutorial"]
    
  
 
const Second=[
  "HTML Reference",
  "CSS Reference",
  "JavaScript Reference",
 " SQL Reference",
  "Python Reference",
  "W3.CSS Reference",
  "Bootstrap Reference",
  "PHP Reference",
  "HTML Colors",
  "Java Reference",
  "Angular Reference"]
  const Thrid=[
  "jQuery Reference",
  "Top Examples",
 " HTML Examples",
 " CSS Examples",
  "JavaScript Examples",
  "How To Examples",
  "SQL Examples",
  "Python Examples",
  "W3.CSS Examples",
  "Bootstrap Examples",
  "PHP Examples",
  "Java Examples",
  "XML Examples"]
  const Final=[
 " jQuery Examples",
  "Get Certified",
  "HTML Certificate",
 " CSS Certificate",
 " JavaScript Certificate",
 " Front End Certificate",
 " SQL Certificate",
 " Python Certificate",
 " PHP Certificate",
  "jQuery Certificate",
  "Java Certificate",
  "C++ Certificate",
  "C# Certificate",
 " XML Certificate"
  
]
  return (
    <div>
      <div className='py-12 px-80 text-center '>
        <h2 className='font-[Segoe UI,Arial,sans-serif] text-5xl font-bold   jus'>How To Section</h2>
        <h4 className='mt-4 text-xl'>Code snippets for HTML, CSS and JavaScript</h4>
        <h6 className='text- mx-16 font-bold'>For example, how to create a slideshow:</h6>
      </div>
      <div className='bg-[#ECF0F1] mr-60 ml-60 '>
        <ul className='flex    '>
          <li className='  h-4 w-4 bg-red-400 rounded-full  mt-2 m-1 '></li>
          <li className='  h-4 w-4 bg-yellow-400 rounded-full mt-2 m-1'>  </li>
          <li className='  h-4 w-4 bg-green-400 rounded-full mt-2 m-1'></li>
          <li className='bg-white  mt-1.5 px-40 mx-20 '> www.w3schools.com/howto/</li>

        </ul>
        <div className='ml-4 p-8 -mt-6'>
          <img src="https://www.w3schools.com/howto/img_nature_wide.jpg " className='h-72  '></img><br />


        </div>




      </div>
      <div className='flex justify-center'>
      <div className='bg-[#1B2631] h-24 w-12 justify-self-center  '></div>
      <br/>

      </div>
      <div className='flex justify-center '> 
      <button type="button" className=' text-xl   text-white rounded-full  bg-[#1B2631]  px-32 py-3 font-bold' >Learn How To</button><br />
      </div>


{/* last section footer ....... */}

<div className=' flex justify-center py-20'>
  <h5 className='font-sans font-normal text-lg font-bold ' >Follow us:</h5>
 
 
</div>
<div className='flex justify-center -mt-16 '> 
  <ul className='flex space-x-7 mb-16' >
    <li><FacebookIcon/></li>
    <li><InstagramIcon/></li>
    <li><LinkedInIcon/></li>
    <li><TwitterIcon/></li>
    

    </ul>

 </div>

 <div className='grid grid-cols-5 gap-2 px-20 mb-10 '>
  <div className='bg-[#1B2631] text-white  text-center p-2'>Spaces</div>
  <div className='bg-[#1B2631] text-white  text-center p-2'>Upgrade</div>
  <div className='bg-[#1B2631] text-white  text-center p-2'>Newsletter</div>
  <div className='bg-[#1B2631] text-white  text-center p-2'>Get Certified</div>
  <div className='bg-[#1B2631] text-white  text-center p-2'>Report Error</div>

</div>
<div className='grid grid-cols-4 gap-20 px-9 text-center '>
  <div className=' font-semibold'>Top Tutorials</div>
  <div className='font-bold '>Top References</div>
  <div className='font-bold '>Top Examples</div>
  <div className='font-bold '>Get Certifeid</div>
 

</div>
{/* text-xs space-y-0.5 */}
<div className='grid grid-cols-4  px-9  text-xs space-y-0.5 ml-20 cursor-pointer  '>
{First.map((value)=>{
  return(
    <p >{value}</p>
  )
})}
{Second.map((second)=>{
  return(
    <p >{second}</p>
  )
})}
{Thrid.map((item)=>{
  return(
    <p >{item}</p>
  )
})}
{Final.map((final)=>{
  return(
    <p  >{final}</p>
  )
})}

 


</div>
{/* last selection.......... */}
<div className=''>
  <ul  className='flex space-x-1 text-[#839192 ] justify-end mr-14 text-xs text-[#839192] '>
    <li>FORUM</li>
    <li>|</li>
    <li>ABOUT</li>

  </ul>
  </div>
  <br/>
  <div >
  <p className=' ml-24 text-[#717D7E] text-sm  font-[erdana, sans-serif]'>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid <br/>
  <p className=' ml-16 text-[#717D7E] text-sm  '>errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
</p>

</p>
  <p className='text-center text-[#717D7E] text-sm '>Copyright 1999-2023 by Refsnes Data. All Rights Reserved.</p>
  <p className='text-center text-[#839192] -mt-4 text-xs'>W3Schools is Powered by W3.CSS.</p>
</div>
<div className='flex justify-center -my-3 mb-28 '>
<img  className='w-16 content-center' src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1691/original/306149583_580886133837672_8720407359695224497_n.png"></img>

</div>

  

    </div>
  )
}
