  import React from 'react'

export default function Smallcard() {
    const Map=[{
        name:"JSON",
        color:"[#D5F5E3]"
    },
    {
        name:"Vue",
        color:"[#D6EAF8]"
    },
    {

        name:"MySQL",
         color:"[#85C1E9]"
    },
      
    {

        name:"XML",
        color:"[#D5F5E3]"
      } ,
      {

        name:"Sass",
        color:"[#85C1E9]"
      } ,
      {

        name:"Icons",
        color:"[#D6EAF8]"
      } ,
      {

        name:"RWD",
        color:"[#D6EAF8]"
      } ,
      {

        name:"Graphics",
        color:"[#85C1E9]"
      } ,
      {

        name:"SVG",
        color:"[#D6EAF8]"
      } ,
      {

        name:"Canvas",
        color:"[#D5F5E3]"
      } ,
      {

        name:"XML",
        color:"[#D5F5E3]"
      } ,
      {

        name:"Raspberry Pi",
        color:"[#D5F5E3]"
      } ,
      {

        name:"Colors",
        color:"[#D6EAF8]"
      } ,
      {

        name:"Git",
        color:"[#85C1E9]"
      } ,
      {

        name:"Matplotlib",
        color:"[#85C1E9]"
      } ,
      {

        name:"NumPy",
        color:"[#D5F5E3]"
      } ,
      {

        name:"NumPy",
        color:"[#D5F5E3]"
      } ,{

        name:"Pandas",
        color:"[#85C1E9]"
      } ,
      {

        name:"SciPy",
        color:"[#D5F5E3]"
      } , {

        name:"Matplotlib",
        color:"[#85C1E9]"
      } 
        

    ]
  return (
    
        
            // return(
                <div className='bg-[#1B2631]'>
    <div className='grid grid-cols-2'>
                <div className='bg-[#1B2631]'>
                    <h1 className='bg-pink-300 p-10 text-center m-4  rounded-2xl'>C</h1>
                  

                </div>
                <div className='bg-[#1B2631]'>
                    <h1 className='bg-yellow-200 p-10 text-center m-4  rounded-2xl'>C#</h1>
                  

                </div>
            </div>
               
                <div className='grid grid-cols-4 gap-9 text-3xl font-medium text-center pt-8  '>
              {Map.map((item)=>(  <div className={`bg-${item.color} p-10  `}>{item.name}</div>
                // <div   className='bg-[#AED6F1] '>Kotlin</div>
                // <div   className='bg-[#85C1E9] '>Node.js</div>
                // <div  className='bg-[[#D2B4DE]] ' >React</div>

            )
        )}
       
      </div>
      <div className='grid grid-cols-2'>
                <div className='bg-[#1B2631]'>
                    <h1 className='bg-blue-300 p-10 text-center m-4  rounded-2xl'>Excel</h1>
                    <h1 className='bg-pink-300 p-10 text-center m-4  rounded-2xl'>Machine Learning</h1>
                  

                </div>
                <div className='bg-[#1B2631]'>
                    <h1 className='bg-yellow-200 p-10 text-center m-4  rounded-2xl'>Google Sheets</h1>
                    <h1 className='bg-gray-400 p-10 text-center m-4  rounded-2xl'> Artificial intelligence</h1>
                  

                </div>
            </div>

      </div>
  )
}




