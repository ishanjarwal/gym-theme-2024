import React, { useContext } from 'react'
import { MdLocationPin, MdOutlineMailOutline, MdPhone } from "react-icons/md";
import MobileNav from './MobileNav';
import { IoClose } from 'react-icons/io5';
import { SideBarContext } from '../contexts/SidebarContext';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion'

const SideBar = () => {

    const { setSideBar, sideBar } = useContext(SideBarContext)

    return (
        <AnimatePresence mode='wait'>
            {sideBar && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: .5 } }}
                    id='parent'
                    onClick={(e) => {
                        if (e.target.id === 'parent') {
                            setSideBar(false)
                        }
                    }}
                    className='fixed top-0 left-0 bg-black/75 h-screen w-full z-50 flex justify-end' style={{ backdropFilter: "blur(10px)" }}
                >
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "Inertia", delay: .2 }}
                        className='relative w-full max-w-lg bg-black h-auto py-12 px-12 overflow-auto'
                    >
                        <button
                            onClick={() => {
                                setSideBar(false);
                            }}
                            className='absolute right-4 top-4 text-white text-2xl p-3 rounded-full bg-white/10'
                        >
                            <IoClose />
                        </button>
                        <img src="/images/logo_wordmark.png" alt="" className='md:h-16 h-12 mb-12' />
                        <h2 className='text-white text-lg mb-4'>STOP THINKING, START DOING</h2>
                        <p className='text-text-muted text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit consectetur autem laborum hic enim quas illum sint placeat! Inventore exercitationem at dignissimos dolorum, nulla eaque assumenda neque harum totam?
                        </p>

                        {/* mobile nav */}
                        <div className='my-12 md:hidden block'>
                            <MobileNav />
                        </div>

                        <div className='flex flex-col space-y-6 mt-12'>
                            <span className='text-white flex justify-start items-center space-x-2'>
                                <span className='text-pri text-lg p-4 bg-white/10'><MdLocationPin /></span>
                                <div className='ps-2 flex flex-col'>
                                    <span className='font-heading text-white'>LOCATION</span>
                                    <span className='text-text-muted text-sm'>Jaipur, Rajasthan</span>
                                </div>
                            </span>
                            <span className='text-white flex justify-start items-center space-x-2'>
                                <span className='text-pri text-lg p-4 bg-white/10'><MdPhone /></span>
                                <div className='ps-2 flex flex-col'>
                                    <span className='font-heading text-white'>PHONE</span>
                                    <span className='text-text-muted text-sm'>+91 12345 67890</span>
                                </div>
                            </span>
                            <span className='text-white flex justify-start items-center space-x-2'>
                                <span className='text-pri text-lg p-4 bg-white/10'><MdOutlineMailOutline /></span>
                                <div className='ps-2 flex flex-col'>
                                    <span className='font-heading text-white'>E-MAIL</span>
                                    <span className='text-text-muted text-sm'>message@test.com</span>
                                </div>
                            </span>
                        </div>

                        <div className='mt-12'>
                            <h2 className='text-white text-lg mb-4'>OUR SOCIALS</h2>
                            <div className='flex space-x-1'>
                                <a
                                    href="/"
                                    className='p-4 bg-white/5 text-white text-lg hover:bg-pri duration-200'
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="/"
                                    className='p-4 bg-white/5 text-white text-lg hover:bg-pri duration-200'
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="/"
                                    className='p-4 bg-white/5 text-white text-lg hover:bg-pri duration-200'
                                >
                                    <FaYoutube />
                                </a>
                                <a
                                    href="/"
                                    className='p-4 bg-white/5 text-white text-lg hover:bg-pri duration-200'
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SideBar
