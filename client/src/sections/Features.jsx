import React, { useState } from 'react'
import { CiDumbbell } from "react-icons/ci";
import { AnimatePresence, motion } from 'framer-motion'
import { BiMaleFemale } from "react-icons/bi";
import { MdSportsGymnastics } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";

const Features = () => {

    const data = [
        {
            id: 0,
            title: "Imported Gym Equipment ",
            icon: CiDumbbell,
            desc: "Our Gym is equipped with a variety of exercise machines and equipment, such as treadmills, elliptical machines, weightlifting machines, free weights, and more",
            img: "https://akfit.com/cdn/shop/articles/107194-exercise-equipmentg1.png?v=1694789703",
        },
        {
            id: 1,
            title: "Unisex",
            icon: BiMaleFemale,
            desc: "Our Gym is equipped with a variety of exercise machines and equipment, such as treadmills, elliptical machines, weightlifting machines, free weights, and more",
            img: "https://www.shutterstock.com/image-photo/mature-woman-middle-aged-man-260nw-1984976825.jpg",
        },
        {
            id: 2,
            title: "Personal Training",
            icon: MdSportsGymnastics,
            desc: "Our Gym is equipped with a variety of exercise machines and equipment, such as treadmills, elliptical machines, weightlifting machines, free weights, and more",
            img: "https://www.shutterstock.com/image-photo/personal-trainer-teaches-about-exercise-260nw-1806660328.jpg",
        },
        {
            id: 3,
            title: "Amenities and Facilities",
            icon: FaUserGear,
            desc: "Our Gym is equipped with a variety of exercise machines and equipment, such as treadmills, elliptical machines, weightlifting machines, free weights, and more",
            img: "https://web-back.perfectgym.com/sites/default/files/styles/900x/public/2022-06/uxbridge-hero-steve.jpg?itok=UpxxtMQD",
        }
    ]
    const [curr, setCurr] = useState(data[0]);

    return (
        <section className="bg-[url('/images/footer_bg.jpg')] bg-center bg-cover py-16">
            <div className='flex lg:flex-row flex-col-reverse max-w-7xl mx-auto px-8'>
                <AnimatePresence>
                    <div className='flex-1'>
                        <motion.img
                            key={curr.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            src={curr.img}
                            alt=""
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                </AnimatePresence>
                <div className='flex-1 relative lg:px-8'>
                    <h1 className='xl:text-6xl md:text-5xl text-3xl text-white font-heading font-extrabold'>
                        TOP-NOTCH <span className='text-pri font-heading'>FEATURES</span> OF THE <span className='text-pri font-heading'>GYM</span>
                    </h1>

                    {/* absolute card */}
                    <AnimatePresence>
                        <motion.div
                            className='lg:flex hidden absolute top-52 right-[80%] w-full max-w-96 origin-right'
                            key={curr.id}
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1, transition: { delay: .2 } }}
                            exit={{ opacity: 0, scaleX: 0, transformOrigin: 'left' }}
                            transition={{ type: "Inertia", duration: .3 }}
                            style={{ perspective: 1000 }}
                        >
                            <div className=' p-8 bg-black/75 backdrop-blur-md'>
                                <AnimatePresence mode='wait'>
                                    <h2 className='text-white text-2xl font-heading uppercase'>{curr.title}</h2>
                                </AnimatePresence>
                                <p className='text-text-muted mt-12'>
                                    {curr.desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <div className='lg:ms-32 mt-12 flex flex-col lg:mb-0 mb-4'>
                        {data.map((el, index) => {
                            const Icon = el.icon
                            return (
                                <>
                                    <button
                                        onClick={() => { setCurr(el) }}
                                        className={`${curr.id == el.id ? 'text-pri' : 'text-white'} duration-300 lg:flex hidden py-3 lg:px-2 border-b-2 border-white/10 items-center`}
                                    >
                                        <span className={`${curr.id == el.id ? 'bg-pri' : 'bg-black/50'} duration-300 text-5xl me-4 p-2 rounded-md text-white`}><Icon /></span>
                                        <span className='text-lg uppercase'>{el.title}</span>
                                    </button>
                                    <div
                                        className='lg:hidden block p-8 box-border mt-2 bg-black/50 backdrop-blur-md rounded-lg'
                                        onClick={() => { setCurr(el) }}
                                    >
                                        <span className='text-4xl text-pri p-4 rounded-lg mb-6 bg-white/25 flex justify-start items-center w-min'><Icon /></span>
                                        <h2 className='text-white text-2xl font-heading uppercase'>{el.title}</h2>
                                        <p className='text-text-muted mt-2 text-xs'>
                                            {el.desc}
                                        </p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features
