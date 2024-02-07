import React, { useContext, useEffect, useState } from 'react'
import { IoCall, IoLocationOutline, IoMailOutline, IoMenuSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io"
import { socials } from '../constants/constants';
import { navLinks } from '../constants/constants';
import { SideBarContext } from '../contexts/SidebarContext';



const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false);
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    })

    const { setSideBar } = useContext(SideBarContext)

    return (
        <header className='fixed top-0 left-0 w-full bg-black backdrop-blur-lg duration-200 border-b border-white/20 z-40'>
            <div>
                <div>
                    <div className='max-w-8xl mx-auto flex items-stretch'>
                        <div className='flex-1 flex justify-start items-center border-e border-white/20'>
                            <a href="/" className='py-4'>
                                <img src="/images/logo_wordmark.png" alt="Logo" className='lg:h-14 h-8' />
                            </a>
                        </div>
                        <nav className='md:flex hidden lg:px-12 px-4 lg:py-6 py-3 space-x-2 border-e border-white/20 text-white'>
                            {navLinks.map((navlink, index) => (
                                !navlink.dropdown ?
                                    <a href={navlink.href} key={index} className='glow_link flex items-center relative text-sm lg:px-8 px-3 py-2 rounded-full uppercase font-semibold ' >
                                        {navlink.label}
                                    </a>
                                    :
                                    <span key={index} className='glow_link flex items-center relative group cursor-pointer text-sm lg:px-8 px-3 py-2 rounded-full uppercase font-semibold' >
                                        {navlink.label}
                                        <div className='group-hover:translate-y-0 translate-y-1/4 group-hover:opacity-100 group-hover:visible opacity-0 invisible duration-300 absolute top-full left-0 bg-zinc-950 py-4 flex flex-col min-w-60 z-10'>
                                            {navlink.dropdown.map((dropdownlink, index) => (
                                                <a href={dropdownlink.href} key={index} className='py-2 px-8 w-full flex items-center justify-between font-semibold text-white hover:text-pri duration-200'>
                                                    <span>{dropdownlink.label}</span>
                                                    <span>
                                                        <IoIosArrowForward />
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </span>
                            ))}

                        </nav>
                        <div className='flex'>
                            <a href="/" className='duration-200 md:text-md text-sm hover:text-pri text-white md:px-8 px-4 flex items-center'>
                                JOIN NOW
                            </a>
                            <button onClick={() => { setSideBar(true) }} className='text-3xl text-white bg-pri lg:px-6 px-3'>
                                <IoMenuSharp />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
