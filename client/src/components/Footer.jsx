import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="mt-24 w-full bg-[url('/images/footer_bg.jpg')] bg-center bg-cover">
            <div className='max-w-7xl w-full mx-auto 7xl:px-0 px-8'>
                <div className='grid grid-cols-7 py-12 lg:gap-x-8 gap-y-8 lg:gap-y-0'>
                    <div className='lg:col-span-3 col-span-7 lg:px-4 lg:border-e-2 border-b-2 lg:border-b-0 border-white/10 lg:pb-0 pb-8'>
                        <Link>
                            <img src="/images/logo.png" alt="" className='h-32' />
                        </Link>
                        <h2 className='text-4xl mt-12 font-bold font-heading text-pri'>ACHIEVE BIG</h2>
                        <h3 className='stroked_text md:text-6xl text-5xl font-extrabold text-transparent'>CORE STRENGTH</h3>
                    </div>
                    <div className='lg:col-span-2 col-span-7 lg:px-4 lg:border-e-2 border-b-2 lg:border-b-0 border-white/10'>
                        <h2 className='text-xl font-extrabold font-heading text-pri'>Connect with Us</h2>
                        <p className='text-text-muted mt-8'>
                            Feel Free to contact us anytime, we are available 24X7.
                        </p>
                        <div className='py-8 flex flex-col space-y-6'>
                            <div>
                                <h4 className='font-heading font-extrabold text-pri'>Call Now</h4>
                                <h3 className='text-xl font-heading font-extrabold text-white'>+91 12345 67890</h3>
                            </div>
                            <div>
                                <h4 className='font-heading font-extrabold text-pri'>Email Us</h4>
                                <h3 className='text-xl font-heading font-extrabold text-white'>message@gym.com</h3>
                            </div>
                            <div>
                                <h4 className='font-heading font-extrabold text-pri'>Visit Us</h4>
                                <h3 className='text-xl font-heading font-extrabold text-white'>Jaipur, Rajasthan</h3>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2 col-span-7 lg:px-4'>
                        <h2 className='font-extrabold font-heading text-xl text-pri'>Quick Links</h2>
                        <div className='flex flex-col py-8 text-white'>
                            <Link className='group flex items-center py-2 uppercase'>
                                <span className='group-hover:w-4 group-hover:me-2 block text-pri w-0 h-0.5 me-0 bg-pri duration-200'></span>
                                <span>About Us</span>
                            </Link>
                            <Link className='group flex items-center py-2 uppercase'>
                                <span className='group-hover:w-4 group-hover:me-2 block text-pri w-0 h-0.5 me-0 bg-pri duration-200'></span>
                                <span>Our Services</span>
                            </Link>
                            <Link className='group flex items-center py-2 uppercase'>
                                <span className='group-hover:w-4 group-hover:me-2 block text-pri w-0 h-0.5 me-0 bg-pri duration-200'></span>
                                <span>Muscle Building</span>
                            </Link>
                            <Link className='group flex items-center py-2 uppercase'>
                                <span className='group-hover:w-4 group-hover:me-2 block text-pri w-0 h-0.5 me-0 bg-pri duration-200'></span>
                                <span>Fat Loss</span>
                            </Link>
                            <Link className='group flex items-center py-2 uppercase'>
                                <span className='group-hover:w-4 group-hover:me-2 block text-pri w-0 h-0.5 me-0 bg-pri duration-200'></span>
                                <span>Strength Training</span>
                            </Link>
                            <Link className='group flex items-center py-2 uppercase'>
                                <span className='group-hover:w-4 group-hover:me-2 block text-pri w-0 h-0.5 me-0 bg-pri duration-200'></span>
                                <span>Boxing and MMA</span>
                            </Link>
                        </div>
                        <div className='flex space-x-1'>
                            <a
                                href="/"
                                className='p-4 bg-black/25 text-white text-lg hover:bg-pri duration-200'
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="/"
                                className='p-4 bg-black/25 text-white text-lg hover:bg-pri duration-200'
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="/"
                                className='p-4 bg-black/25 text-white text-lg hover:bg-pri duration-200'
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="/"
                                className='p-4 bg-black/25 text-white text-lg hover:bg-pri duration-200'
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='py-4 flex md:space-x-2 md:flex-row flex-col md:space-y-0 space-y-1 justify-between items-center border-t-2 border-white/10'>
                    <span className='text-white font-light text-sm'>
                        Copyright&copy; 2024 GYM. All Rights Reserved
                    </span>
                    <div className='flex text-white text-sm space-x-2'>
                        <Link>
                            Privacy Policy
                        </Link>
                        <Link>
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
