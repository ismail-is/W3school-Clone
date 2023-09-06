import React from 'react'

export default function Map() {
    const Array=[{
        name:"PHP",
        title:"A web server programming language",
        color:"[#D6EAF8]",
        btn:"Learn PHP"
    },
    {
        name:"QueryP",
        title:"A JS library for developing web pages",
        color:"[#85C1E9]",
        btn:"Learn QueryP"
    },{
        name:"Java",
        title:"A programming language",
        color:"[#85C1E9]",
        btn:"Learn Java"
    },{
        name:"C++",
        title:"A programming language ",
        color:"[#D6EAF8]",
        btn:"Learn C++"
    },{
        name:"W3.CSS",
        title:"A CSS framework for faster and better responsive web pages",
        color:"[#D6EAF8]",
        btn:"Learn CSS"
    },{
        name:"Bootstrap",
        title:"A CSS framework for designing better web pages",
        color:"[#85C1E9]",
        btn:"Learn Bootstrap"
    },
]
  return (
    <div>
         <div className='bg-[#1B2631] '>
                <div className='grid grid-cols-2'> 
        {Array.map((item)=>{
            return(
               
                <div className={`bg-${item.color} text-center p-10 m-10 `} ><h3 className='text-4xl font-extrabold'>{item.name} </h3>
                <h5 className='text-lg font-normal mt-3'>{item.title}</h5>
                <button className='bg-[#1B2631] text-white p-3 w-40 rounded-full mt-9'>{item.btn}</button>
                </div>
                // <div className='bg-yellow-200 text-center p-24 m-10 '><h3>Quizzes</h3></div>
        
               
            )
        })}
         </div>
            </div>
           
           
       
    </div>
  )
}

