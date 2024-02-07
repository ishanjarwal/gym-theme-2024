import React from 'react'

const Gallery = () => {
    return (
        <section className='py-12'>
            <div className='px-4 max-w-7xl mx-auto'>
                <h1 className='mb-4 font-heading text-white text-4xl font-extrabold uppercase'>Our Gallery</h1>
                <div className='grid grid-cols-6 gap-2 grid-rows-2'>
                    <div className='md:h-72 md:aspect-auto aspect-square h-auto w-full lg:col-span-1 col-span-3 overflow-hidden'>
                        <img
                            src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
                            alt=""
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <div className='md:h-72 md:aspect-auto aspect-square h-auto w-full lg:col-span-4 col-span-3'>
                        <img
                            src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
                            alt=""
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <div className='md:h-72 md:aspect-auto aspect-square h-auto w-full lg:col-span-1 col-span-3'>
                        <img
                            src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
                            alt=""
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <div className='md:h-72 md:aspect-auto aspect-square h-auto w-full col-span-3'>
                        <img
                            src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
                            alt=""
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <div className='md:h-72 md:aspect-auto aspect-square h-auto w-full col-span-3'>
                        <img
                            src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
                            alt=""
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                    <a href='/' className='group relative md:h-72 md:aspect-auto aspect-square h-auto w-full col-span-3'>
                        <div className='absolute duration-200 bg-black/50 group-hover:bg-black/75 flex justify-center items-center w-full h-full'>
                            <h2 className='group-hover:scale-125 duration-200 font-heading text-xl text-white'>Show All</h2>
                        </div>
                        <img
                            src="https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80"
                            alt=""
                            className='w-full h-full object-cover object-center'
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Gallery
