
import logo from './images/Logo.png'
import branding from './images/Astrix Branding.png'
import roll from './images/Roll.png'
import card from './images/Image.png'
import Caurosal from './Caurosal'


export default function Collection() {
    return (
        <div className="h-screen bg-[#15181B]">


            <div class="flex">
                
                <div class="flex-none w-[60%]  h-screen bg-[#15181B] relative">
                    <div className='flex p-5'>
                        <div><img src={branding} alt="brand" /></div>
                        <div><img src={logo} alt="logo" /></div>
                    </div>

                    <Caurosal  className='hidden'/>

                    <div className='font-bold text-[110px] ml-5 text-gray-700 '>
                    
                        <div>ASTR </div>
                        <div className='mt-[-70px]'>IX</div>

                        <div className='mt-[-40px]'>COLL</div>
                        <div className='mt-[-70px]'>ECTI</div>
                        <div className='mt-[-70px]'>BLE</div>

                        <div>
                            <div>
                                <div className='w-1/4 bg-gray-700 ml-5 rounded-full mx-5'>
                                    <ul className='flex justify-between p-3 mx-1 text-white font-extrabold text-sm' >
                                        <li>Events</li>
                                        <li> Collection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    





                </div>
                <div class="grow w-h-screen bg-[#15181B] relative">
                    <img src={roll} alt="" className=' h-screen' />
                </div>

                <div class="flex-none w-[35%] h-screen bg-[#15181B] relative">
                    <div className='p-10'>
                        <div className='text-white text-lg font-bold tracking-wider'>
                            Explore Your First <br /> Collectible
                        </div>

                        <div className='text-white text-4xl font-extrabold mt-8 tracking-wide'>
                            Meta <br />Lives
                        </div>

                        <div className='text-white text-xl font-bold mt-8'>
                            Live in Astrix
                        </div>
                        <div>
                            <p className='text-sm text-white tracking-widest '> Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.</p>

                        </div>

                        <div className=' my-6 flex'>
                            <div className="flex -space-x-2 overflow-hidden">
                                <img className="inline-block h-10 w-10 rounded-full ring-2 "
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="img1"
                                />
                                <img className="inline-block h-10 w-10 rounded-full ring-2 "
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="img1"
                                />
                                <img className="inline-block h-10 w-10 rounded-full ring-2"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt="img1"
                                />
                                <img className="inline-block h-10 w-10 rounded-full ring-2 "
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="img1"
                                />


                            </div>
                            <div className='mx-5 text-white font-extrabold'> 22k people interested</div>
                        </div>


                        <div className='text-white font-bold'>Collectibles</div>


                        <div className='flex gap-5 my-3'>
                            <div className="w-2/5 flex flex-col items-center    rounded-xl p-2 bg-[#B9A0FF]">
                                <div className='flex justify-between'>
                                    <ul className='flex justify-between p-1 mx-1 text-black font-bold text-xs'>
                                        <li className='bg-black rounded-full text-white p-1'>2024</li>
                                        <li>by pablo</li>
                                    </ul>
                                </div>
                                <p className=" mt-0  text-xs text-black font-bold p-0">Collectible Name</p>
                                <a href=""> <img src={card} alt="" className="rounded-xl" /> </a>

                            </div>
                            <div className="w-2/5 flex flex-col items-center    rounded-xl p-2 bg-[#B9A0FF]">
                                <div className='flex justify-between'>
                                    <ul className='flex justify-between p-1 mx-1 text-black font-bold text-xs'>
                                        <li className='bg-black rounded-full text-white p-1'>2024</li>
                                        <li>by pablo</li>
                                    </ul>
                                </div>
                                <p className=" mt-0  text-xs text-black font-bold p-0">Collectible Name</p>
                                <a href=""> <img src={card} alt="" className="rounded-xl" /> </a>

                            </div>
                        </div>

                        <div className='mx-4 grid place-content-end'>
                            <button className='bg-[#FFCA5F] p-2 rounded-full text-black font-bold'><span className='mx-4'>Join Waitlist</span></button>
                        </div>

                    </div>


                </div>

                <div>

                </div>
            </div>


        </div>
    )
}
