import React, { useState } from 'react'

import { createBrowserRouter, Link, NavLink } from 'react-router-dom';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative h-[7vh] px-[5vw] flex justify-between bg-white">
            <div className="hidden md:flex items-center justify-start text-base h-full w-[60vw] gap-[30px]">
                <Link to="/" className="bg-orange-500 rounded-lg h-9 font-medium w-[5vw] text-center text-2xl">anshu</Link>

                <NavLink to="/store" className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-600' : 'text-black'} transition-colors duration-[0.3s]`}>Store</NavLink>
                <NavLink to="/phone" className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-600' : 'text-black'} transition-colors duration-[0.3s]`}> Phone</NavLink>
                <NavLink to="/tablets" className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-600' : 'text-black'} transition-colors duration-[0.3s]`}>Tablets</NavLink>
                <NavLink to="/smart-watch-audio" className={({ isActive }) => `hover:text-orange-500 ${isActive ? 'text-orange-600' : 'text-black'} transition-colors duration-[0.3s]`}>Smart Watch & Audio</NavLink>
            </div>

            <div className="hidden md:flex items-center justify-end  gap-[40px] ">
                <span className="relative h-[40px]">
                    <div className={`flex items-center border-1 cursor-pointer absolute right-0 transition-all duration-300 ease-in-out ${isOpen ? "w-[20vw] rounded-[10px] px-3" : "w-[40px] border-none "} h-[40px]`}>
                        {isOpen && (
                            <input
                                type="text" placeholder="Search..." className="bg-transparent outline-none w-full text-sm" autoFocus />
                        )}
                        <img onClick={() => setIsOpen(!isOpen)}
                            src="https://img.icons8.com/?size=100&id=e4NkZ7kWAD7f&format=png&color=000000" width="30px" alt="search" /></div>
                </span>

                <span>
                    <img src="https://img.icons8.com/?size=100&id=HtmDYmJyGCy7&format=png&color=000000" alt="" width="30px" />
                </span>
                <span>
                    <img src="https://img.icons8.com/?size=100&id=111473&format=png&color=000000" alt="" width="30px" />
                </span>
            </div>
        </nav>
    );
};


export default Nav