import React, {useState}  from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../assets/logo.png';

 const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
            <div>
             <img src={logo} alt="logo Image" style={{width:'50px'}} />
            </div>

            {/* menu */}
            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                    
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className=' md:hidden z-10'>
                <FaBars />
            </div>
            {/* Mobile menu */}
            <div className='  hidden absolute top-0 left-0 h-screen bg-black flex flex-col justify-center items-center'>
                    <li className='py-6 text-4xl '>Home</li>
                    <li className='py-6 text-4xl '>About</li>
                    <li className='py-6 text-4xl '>Skills</li>
                    <li className='py-6 text-4xl '>Work</li>
                    <li className='py-6 text-4xl '>Contact</li>
            </div>
            {/* Social Icons */}
            <div className='hidden'></div>
        </div>
    )
 }
 export default Navbar;