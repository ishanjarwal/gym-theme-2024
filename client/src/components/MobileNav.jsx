import React, { useState } from 'react'
import { navLinks } from '../constants/constants'
import { IoIosArrowForward } from 'react-icons/io'

const MobileNav = () => {


    const [submenu, setSubmenu] = useState(null);

    return (
        <nav className='flex flex-col text-white '>
            {navLinks.map((navlink, index) => (
                !navlink.dropdown ?
                    <a href={navlink.href} key={index} className='w-full relative text-sm px-3 py-4 uppercase font-semibold border-b border-white/50' >
                        {navlink.label}
                    </a>
                    :
                    <span key={index} onClick={() => { submenu === navlink.label ? setSubmenu(null) : setSubmenu(navlink.label) }} className='relative cursor-pointer text-sm px-3 py-4 uppercase font-semibold border-b border-white/50' >
                        {navlink.label}
                        {submenu === navlink.label && (
                            <div className='flex bg-zinc-950 py-4 flex-col min-w-60 z-10'>
                                {navlink.dropdown.map((dropdownlink, index) => (
                                    <a href={dropdownlink.href} key={index} className='py-2 px-8 w-full flex items-center justify-between font-semibold text-white hover:text-pri duration-200'>
                                        <span>{dropdownlink.label}</span>
                                        <span>
                                            <IoIosArrowForward />
                                        </span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </span>
            ))}
        </nav>
    )
}

export default MobileNav
