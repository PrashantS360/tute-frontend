import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { BsChevronDown } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='flex justify-between px-3 sm:px-10 py-2 items-center bg-white'>
            <Link to="/">
                <img className='max-h-[8vh]' src="/logo.png" alt="logo" />
            </Link>
            <div className='space-x-3 flex text-[#800080] text-[0.95rem]'>
                <button disabled className='opacity-30 hidden sm:block'>My Assignment</button>
                <button disabled className='opacity-30 hidden sm:block'>Chat with Mentor</button>
                <button className='flex items-center space-x-1 px-2 py-1 sm:text-[#800080] sm:bg-white bg-[#800080] text-white rounded-md'><MdAccountCircle className='text-xl hidden sm:block' /><span className='text-[0.95rem] '>ProfileName</span> <BsChevronDown className='text-sm ' /></button>
            </div>
        </div>
    );
};

export default Navbar;
