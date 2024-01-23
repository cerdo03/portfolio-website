import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { ReactSVG } from 'react-svg'
import { Link } from 'react-scroll';
import arrow_top_right from '../assets/arrow-right-top.svg';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[#E4E1DD]  fixed top-0 w-full h-12 sm:h-16 md:h-16 border-b-2 border-gray-300 z-20">
            <div className="h-full overflow-scroll">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center h-full justify-between w-full">

                        <div className="h-full">
                            <div className="flex items-center h-full">
                                <button className="bg-black text-white h-full flex items-center px-4 hover:scale-105 transition-all duration-200">
                                    <FiMenu size={24} />
                                </button>
                                <div className="flex-shrink-0 text-black font-sans font-semibold text-2xl px-4 sm:px-4 lg:px-8">
                                    Cerdo
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <div className="flex items-baseline">
                                {/* <a href="#home" className="hover:text-black px-3 py-2 rounded-md text-base font-bold text-[#9E9D9D]">Home</a>
                                <a href="#about" className="hover:text-black px-3 py-2 rounded-md text-base font-bold text-[#9E9D9D]">About Me</a>
                                <a href="#experience" className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D]">Experience</a>
                                <a href="#skills" className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D]">Skills</a>
                                <a href="#projects" className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D]">Projects</a> */}
                                <Link activeClass="text-black" to="home" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-black px-3 py-2 rounded-md text-base font-bold text-[#9E9D9D] font-sans">Home</Link>
                                <Link activeClass="text-black" to="about" spy={true} smooth={true} offset={-70} duration={500} className="hover:text-black px-3 py-2 rounded-md text-base font-bold text-[#9E9D9D] font-sans">About Me</Link>
                                <Link activeClass="text-black" to="experience" spy={true} smooth={true} offset={-70} duration={500} className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D] font-sans">Experience</Link>
                                <Link activeClass="text-black" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D] font-sans">Skills</Link>
                                <Link activeClass="text-black" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D] font-sans">Projects</Link>
                                <Link activeClass="text-black" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D] font-sans">Contact</Link>
                                {/* <a href="#contact" className="px-3 py-2 rounded-md text-base font-bold hover:text-black text-[#9E9D9D]">Contact</a> */}
                            </div>
                        </div>
                        <div className="hidden md:block h-full">
                            <div className="flex items-center h-full">
                                <button className="px-8 py-4 text-base font-semibold text-white bg-black h-full flex justify-center items-center font-sans
                                transition-all  hover:scale-110 hover:bg-gray-900 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 group"
                                    onClick={() => {
                                        const element = document.getElementById('contact');
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    Contact Me
                                    <div className="transition-transform duration-200 group-hover:-translate-y-1">
                                        <ReactSVG src={arrow_top_right}  />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;