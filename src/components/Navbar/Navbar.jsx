import React, { useState, useEffect } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isscrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        // this function is used for if scroll then run the function
        window.addEventListener('scroll',handleScroll);
        return()=> window.removeEventListener('scroll',handleScroll);
    }, [])

    return (
        <div>
            <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isscrolled ? 'shadow-lg' : "" }`}>
                <nav className='max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center'>

                    {/* Logo */}
                    <a href="#" className='text-3xl font-bold'>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

                    {/* Desktop Manu */}
                    <ul className='md:flex gap-x-15 hidden'>
                        <li>
                            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                        </li>

                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                        </li>

                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                        </li>

                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                        </li>
                    </ul>

                    {/* Mobile Menu */}

                    <ul className={`flex flex-col p-10 gap-y-12 bg-orange-500/15 shadow-xl backdrop-blur-xl rounded-xl gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                        <li>
                            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
                        </li>

                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                        </li>

                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                        </li>

                        <li>
                            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                        </li>

                        <li className='flex  p-2 border-2 border-orange-500 rounded-full md:hidden' >
                            <input type="text" id='text' name='text' placeholder='Search..' className='flex-1 px-3 focus:outline-none' autoComplete='off' />
                            <button className='bg-orange-500 h-10 w-10 text-white flex justify-center items-center rounded-full'>
                                <FaSearch />
                            </button>
                        </li>

                    </ul>



                    {/* Nav Actions */}
                    <div className='flex items-center gap-x-5'>
                        {/* input field */}
                        <div className='md:flex  p-2 border-2 border-orange-500 rounded-full hidden'>
                            <input type="text" id='text' name='text' placeholder='Search..' className='flex-1 px-3 focus:outline-none' autoComplete='off' />
                            <button className='bg-orange-500 h-10 w-10 text-white flex justify-center items-center rounded-full'>
                                <FaSearch />
                            </button>
                        </div>


                        <a href='' className='text-zinc-800 text-2xl'>
                            <GoHeartFill />
                        </a>

                        <a href='' className='text-zinc-800 text-2xl'>
                            <HiShoppingBag />
                        </a>

                        <a href='#' className='text-zipc-800 text-3xl md:hidden' onClick={toggleMenu}>
                            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
                        </a>


                    </div>
                </nav>


            </header>
        </div>
    )
}

export default Navbar