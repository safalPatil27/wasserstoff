
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
                        <p className='uppercase font-bold text-[50px]    text-justify'>

                            <p className='flex justify-center items-center'>We 
                            <span className='  img' style={{backgroundImage: `url(${img1})`}} ></span>
                             ORGANIZE The </p>

                             <p className='flex justify-center items-center'> CONNECTION 
                             <span className='p-2  img' style={{backgroundImage: `url(${img2})`}} ></span>
                              </p>

                            <p className='flex justify-center items-center'>
                            <span className='p-2  img' style={{backgroundImage: `url(${img3})`}} ></span>
                              between 
                              <span className='p-2  img' style={{backgroundImage: `url(${img4})`}} ></span>
                              MUSIC </p>

                            <p className='flex justify-center items-center'> ARTIST
                            <span className='p-2  img' style={{backgroundImage: `url(${img5})`}} ></span>
                             CULTURE <span className='p-2  img' style={{backgroundImage: `url(${img6})`}} ></span> 
                             </p>

                            <p className='flex justify-center items-center'>
                            <span className='p-2  img' style={{backgroundImage: `url(${img7})`}} ></span>
                             art <span className='p-2  img' style={{backgroundImage: `url(${img8})`}} ></span> 
                             & COLLECTIONS </p>
                            
                        </p>

                        
                    </div>
               



            </div>



        </>
    )
}
