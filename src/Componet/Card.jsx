
import React from 'react';
//  import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

export default function Maincard() {
  return (
    <div className='bg-[#252528]  '>
      <div >

      </div>
      <div className='grid grid-cols-2  text-white border-4 '>

        {/* <div className='items-center w-96 ml-20bg-[#D7BDE2] border-4'> */}
        <div className='w-[25rem] ml-20 bg-[#D7BDE2] border-4 mt-20'>
            <h1 className='text-center text-black text-4xl mt-6'>PHP</h1><br />
            <h5 className='text-center text-black'>A web server programming language</h5><br />
            {/* <button type="button" class="btn btn-success" style={{ borderRadius: "30px", padding: "10px", width: "200px", margin: "15px" }}>Lean PHP</button><br /> */}
            <button type="button" className='p-3 w-52 m-6 rounded-full bg-green-700 ml-24  ' >Lean PHP</button><br />

           </div>

        <div className='w-[25rem] ml-20 bg-[#D7BDE2] border-4 mt-20' >
            <h1 className='text-center text-black text-4xl  mt-6 '>PHP</h1><br />
            <h5 className='text-center text-black'>A web server programming language</h5><br />
            {/* <button type="button" class="btn btn-success" style={{ borderRadius: "30px", padding: "10px", width: "200px", margin: "15px" }}>Lean PHP</button><br /> */}
            <button type="button" className='p-3 w-52 m-6 rounded-full bg-green-700 ml-24  ' >Lean PHP</button><br />

        </div>

      </div>

    </div>

  )
}
