import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Services = () => {
    return (
        <section className="bg-[url('/images/services_bg.jpg')] bg-center bg-cover">
            <div className='max-w-7xl mx-auto py-12'>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {/* Card */}
                    {[1, 2, 3, 4, 5, 6].map((el, index) => (
                        <a href='/' key={index} className='group col-span-1 h-72 p-4 border-2 border-white/15 bg-black/25 backdrop-blur-lg'>
                            <div className='p-4 relative w-full h-full overflow-hidden flex flex-col justify-end'>
                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D"
                                    alt=""
                                    className='absolute w-full h-full object-cover object-center scale-110 brightness-50 group-hover:scale-100 duration-300'
                                />
                                <h1 className='stroked_text absolute left-2 top-2 font-heading font-extrabold text-8xl text-transparent'>01</h1>
                                <div>
                                    <h2 className='relative mb-4 text-4xl text-white font-heading font-extrabold'>
                                        STRENGTH TRAINING
                                    </h2>
                                    <button className="arrow_link w-min whitespace-nowrap flex items-center bg-transparent text-white hover:text-pri duration-300 ">
                                        <span className="font-heading font-bold">REGISTER NOW</span>
                                        <span className="ms-2"><MdKeyboardDoubleArrowRight /></span>
                                    </button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
