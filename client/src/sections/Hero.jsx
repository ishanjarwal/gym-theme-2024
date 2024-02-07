import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Tilt from "react-parallax-tilt";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Hero = () => {
    return (
        <section className="bg-[url('/images/hero_bg.jpg')] bg-center bg-cover overflow-hidden">
            <div className="max-w-8xl relative mx-auto lg:pt-32 pt-16 lg:pb-96 pb-12">
                <div className="px-12 py-16 grid grid-cols-3">
                    <div className=" flex flex-col lg:space-y-8 space-y-4 lg:col-span-2 col-span-3">
                        <h2 className="font-heading text-xl font-extrabold text-white">
                            MOST TOP RATED GYM IN TOWN
                        </h2>
                        <h2 className="font-heading lg:text-6xl text-4xl font-extrabold text-white">
                            TRAIN HARD WITH THE BEST{" "}
                            <span className="text-pri font-heading">GYM EXPERIENCE</span> IN{" "}
                            <span className="text-pri font-heading">JAIPUR</span>
                        </h2>
                        <button className="std_btn lg:text-lg text-sm flex items-center w-min whitespace-nowrap">
                            <span>JOIN NOW</span>
                            <span className="ms-2">
                                <FaArrowRightLong />
                            </span>
                        </button>
                    </div>
                    <div className="relative lg:col-span-1 lg:block hidden">
                        <Tilt
                            className="h-full"
                            style={{ transformStyle: "preserve-3d" }}
                            perspective={1200}
                        >
                            <img
                                src="/images/hero_img.png"
                                alt=""
                                className="absolute top-0 left-0"
                                style={{ transform: "translateZ(50px) scale(1.25)" }}
                            />
                        </Tilt>
                    </div>
                </div>

                {/* cards container */}
                <div className="lg:absolute relative w-11/12 left-1/2 -bottom-9/12 -translate-x-1/2 bg-white/10 backdrop-blur-sm border-2 border-white/25">
                    <div className="flex lg:flex-row flex-col lg:space-x-6">

                        {/* card */}
                        <div className="flex flex-1 flex-col md:flex-row p-8 lg:border-e-2 border-b-2 lg:border-b-0 border-white/25">
                            <div className="relative overflow-hidden w-full h-72">
                                <img
                                    src="https://www.deltafitness.london/resources/results/alexander-ganesan/_mainProfileImage/delta-tranformation-v21-front.jpg"
                                    alt=""
                                    className="w-full h-full absolute top-0 left-0 object-cover object-center scale-100 rotate-0 duration-300 hover:scale-110 hover:rotate-6"
                                />
                            </div>
                            <div className="ms-4 lg:pt-0 pt-8 flex flex-col justify-between">
                                <h2 className="text-3xl font-heading font-extrabold mb-8 text-white">TARGET : <span className="text-pri font-heading">FATLOSS</span></h2>
                                <button className="arrow_link w-min whitespace-nowrap flex items-center bg-transparent text-white hover:text-pri duration-300 ">
                                    <span className="font-heading font-bold">REGISTER NOW</span>
                                    <span className="ms-2"><MdKeyboardDoubleArrowRight /></span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-1  flex-col md:flex-row-reverse p-8 ">
                            <div className="relative overflow-hidden w-full h-72">
                                <img
                                    src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-492573824-1528828970.jpg"
                                    alt=""
                                    className="w-full h-full absolute top-0 left-0 object-cover object-center scale-100 rotate-0 duration-300 hover:scale-110 hover:rotate-6"
                                />
                            </div>
                            <div className="ms-4 lg:pt-0 pt-8 flex flex-col justify-between">
                                <h2 className="text-3xl font-heading font-extrabold mb-8 text-white">TARGET : <span className="text-pri font-heading">MUSCLE GAIN</span> </h2>
                                <button className="arrow_link w-min whitespace-nowrap flex items-center bg-transparent text-white hover:text-pri duration-300 ">
                                    <span className="font-heading font-bold">REGISTER NOW</span>
                                    <span className="ms-2"><MdKeyboardDoubleArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
