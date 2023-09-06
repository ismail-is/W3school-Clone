import React from 'react'


export default function Subhead() {
    const Value = [{
        bg1: "[#D4E6F1]",
        name: "HTML",
        p: "The language for building web pages",
        btn1: "Learn HTML",
        btn2: "Video Tutorial",
        btn3: "HTML Reference",
        btn4: "Get Certified",
        btn1color: "[#27AE60]",
        btn2color: "[#F7DC6F]",
        btn3color: "[#1B2631]",
        btn4color: "[#FDEDEC]",
        example: "HTML Example:",
    },
    {
        bg: "[#F9E79F]",
        name: "CSS",
        p: "The language for styling web pages",
        btn1: "Learn CSS",
        btn2: "CSS Reference",
        btn3: "Get Certified",
        btn1color: "[#27AE60]",
        btn3color: "[#1B2631]",
        btn4color: "[#FDEDEC]",
        example: "CSS Example:"

    },
    {
        bg: "[#F9E79F]",
        name: "JavaScript",
        p: "The language for programming web pages",
        btn1: "Learn JavaScript",
        btn2: "JavaScript Reference",
        btn3: "Get Certified",
        btn1color: "[#27AE60]",
        btn3color: "[#F7DC6F]",
        btn4color: "[#FDEDEC]",
        example: "JavaScript Example::"

    },
    {
        bg: "[#F9E79F]",
        name: "JavaScript",
        p: "The language for programming web pages",
        btn1: "Learn JavaScript",
        btn2: "Pythont Reference",
        btn3: "Get Certified",
        btn1color: "[#27AE60]",
        btn3color: "[#F7DC6F]",
        btn4color: "[#FDEDEC]",
        example: "Python Example:"

    },


    ]



    return (

        <div>
          
                    <div className='flex bg-[#D4E6F1] pb-11'>
                        <div className=' bg-[#F1C40F]ml-72 mt-9 ml-64'>
                            <h1 className='text-7xl font-bold  '>HTML</h1>
                            <p className='text-lg  font-bold -ml-7'> The language for building web pages</p>
                            <button className='rounded-full w-48 p-2 bg-[#27AE60] text-white  mt-3 text-lg'>Learn HTML</button><br />
                            <button className='rounded-full w-48 p-2 bg-[#F7DC6F] mt-3 text-lg' >Video Tutorial</button><br />
                            <button className='rounded-full w-48 p-2 bg-[#1B2631] text-white mt-3 text-lg' >Video Tutorial</button><br />
                            <button className='rounded-full w-48 p-2 bg-pink-300 mt-3 text-lg' >Get Certified</button><br />


                        </div>


                      
                       <div className=' bg-white mt-16 ml-32'>
                            <div className='  ' style={{ width: '27rem', borderTop: "50px solid #D0D3D4", borderBottom: "80px solid #D0D3D4", borderLeft: "15px solid #D0D3D4", borderRight: "15px solid #D0D3D4" }}>
                                <div className='text-black -mt-6 font-bold'>HTML Example:</div>
                                <div className='ml-6' >
                                    <h6 >body</h6>
                                    <span>
                                        <p></p>
                                        <p>.......</p>
                                        <p>.......</p>
                                        <p>.......</p>
                                        <p>........</p>
                                        <p>.......</p>
                                        <p>.......</p>
                                    </span>
                                </div>
                                <div className='-mb-14'>
                                    <button className='bg-green-400 rounded-full w-48 p-2  text-lg'>Try it Yourself</button>

                                </div>
                            </div> </div>
                    </div>
                    {/* second */}
                    <div>
          
          <div className='flex  bg-yellow-100 pb-11'>
              <div className=' bg-yellow-100 mt-9 ml-64'>
                  <h1 className='text-7xl font-bold '>CSS</h1>
                  <p className='text-lg  font-bold -ml-7'> The language for styling web pages</p>
                  <button className='rounded-full w-48 p-2 bg-[#27AE60] mt-3 text-lg' >Learn CSS</button><br />
                  <button className='rounded-full w-48 p-2 bg-black text-white mt-3 text-lg' >CSS Reference</button><br />
                  <button className='rounded-full w-48 p-2 bg-pink-300 mt-3 text-lg' >Get Certified</button><br />


              </div>


            
             <div className=' bg-white mt-16 ml-32'>
                  <div className='  ' style={{ width: '27rem', borderTop: "50px solid #D0D3D4", borderBottom: "80px solid #D0D3D4", borderLeft: "15px solid #D0D3D4", borderRight: "15px solid #D0D3D4" }}>
                      <div className='text-black -mt-6 font-bold'>CSS Example:</div>
                      <div className='ml-6' >
                          <h6 >body</h6>
                          <span>
                              <p></p>
                              <p>.......</p>
                              <p>.......</p>
                              <p>.......</p>
                              <p>........</p>
                              <p>.......</p>
                              <p>.......</p>
                          </span>
                      </div>
                      <div className='-mb-14'>
                          <button className='bg-green-400 rounded-full w-48 p-2  text-lg'>Try it Yourself</button>

                      </div>
                  </div> </div>
          </div>
</div>

{/* thrid */}
<div className='flex  bg-[#1B2631] pb-11'>
              <div className=' bg-[#1B2631] mt-9 ml-64'>
                  <h1 className='text-7xl font-bold text-yellow-50 -ml-3'>JavaScript</h1>
                  <p className='text-lg  font-bold -ml-7 text-yellow-50'> The language for programming web pages</p>
                  <button className='rounded-full w-48 p-2 bg-[#27AE60] mt-3 text-lg' >JavaScript CSS</button><br />
                  <button className='rounded-full w-48 p-2 bg-black text-white mt-3 text-lg' >JavaScript Reference</button><br />
                  <button className='rounded-full w-48 p-2 bg-pink-300 mt-3 text-lg' >Get Certified</button><br />


              </div>


            
             <div className=' bg-white mt-16 ml-32'>
                  <div className='  ' style={{ width: '27rem', borderTop: "50px solid #D0D3D4", borderBottom: "80px solid #D0D3D4", borderLeft: "15px solid #D0D3D4", borderRight: "15px solid #D0D3D4" }}>
                      <div className='text-black -mt-6 font-bold'>JavaScript Example:</div>
                      <div className='ml-6' >
                          <h6 >body</h6>
                          <span>
                              <p></p>
                              <p>.......</p>
                              <p>.......</p>
                              <p>.......</p>
                              <p>........</p>
                              <p>.......</p>
                              <p>.......</p>
                          </span>
                      </div>
                      <div className='-mb-14'>
                          <button className='bg-green-400 rounded-full w-48 p-2  text-lg'>Try it Yourself</button>

                      </div>
                  </div> </div>
          </div>
          {/* four */}
          <div className='flex  bg-pink-100 pb-11'>
              <div className=' bg-pink-100 mt-9 ml-64'>
                  <h1 className='text-7xl font-bold -ml-3'>Python</h1>
                  <p className='text-lg  font-bold -ml-7 '> A popular programming language

</p>
                  <button className='rounded-full w-48 p-2 bg-[#27AE60] mt-3 text-lg' >Python learn</button><br />
                  <button className='rounded-full w-48 p-2 bg-black text-white mt-3 text-lg' >Python Reference</button><br />
                  <button className='rounded-full w-48 p-2 bg-pink-300 mt-3 text-lg' >Get Certified</button><br />


              </div>


            
             <div className=' bg-white mt-16 ml-32'>
                  <div className='  ' style={{ width: '27rem', borderTop: "50px solid #D0D3D4", borderBottom: "80px solid #D0D3D4", borderLeft: "15px solid #D0D3D4", borderRight: "15px solid #D0D3D4" }}>
                      <div className='text-black -mt-6 font-bold'>Python Example:</div>
                      <div className='ml-6' >
                          <h6 >body</h6>
                          <span>
                              <p></p>
                              <p>.......</p>
                              <p>.......</p>
                              <p>.......</p>
                              <p>........</p>
                              <p>.......</p>
                              <p>.......</p>
                          </span>
                      </div>
                      <div className='-mb-14'>
                          <button className='bg-green-400 rounded-full w-48 p-2  text-lg'>Try it Yourself</button>

                      </div>
                  </div> </div>
          </div>

</div>



       
        


    )

}
