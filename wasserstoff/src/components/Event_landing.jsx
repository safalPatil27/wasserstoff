import React from 'react'
import logo from './images/Astrix Logo.png'
import img1 from './images/image 143.png'
import img2 from './images/Frame 1261154652.png'
import img3 from './images/image 144.png'
import img4 from './images/image 145.png'
import img5 from './images/image 147.png'
import img6 from './images/image 146.png'
import img7 from './images/image 139.png'
import img8 from './images/image 137.png'

export default function Event_landing() {
    return (
        // this page is for the landing page: 
        <>
            
            {/* this is the logo of the page */}
            <div className=''>


                <div className=' mt-10 ml-20'>
                    <img src={logo} alt="" />
                </div>

               
                    <div className=' grid place-content-center h-screen  '>
                        <p className='uppercase font-bold text-[50px] text-justify'>

                            <span className='flex'> We <img src={img1} alt="" className='p-2 w-2/5 ' id='img1'/> ORGANIZE The </span>

                             <span className='flex'> CONNECTION <img src={img2} alt="" className='p-2 w-1/2' id='img2'/> </span>

                            <span className='flex'> <img src={img3} alt=""className='p-2' id='img3'/>  between <img src={img4} alt=""  />  MUSIC </span>

                            <span className='flex'> ARTIST <img src={img5} alt="" className='p-2' id='img5'/> CULTURE <img src={img6} alt="" /> </span>

                            <span className='flex'> <img src={img7} alt=""className='p-2' id='img7'/> art <img src={img8} alt="" className='p-2'/> & COLLECTIONS </span>
                            
                        </p>

                        
                    </div>
               



            </div>



        </>
    )
}
