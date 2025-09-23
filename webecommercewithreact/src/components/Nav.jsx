import React from 'react'
import {createBrowserRouter, Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="h-[7vh] border-2 flex justify-between bg-white">
            <div className="hidden md:flex items-center justify-center text-base h-full w-[40vw] gap-[30px]">
                <div className="bg-orange-500 rounded-lg h-9 font-medium w-[5vw] text-center text-2xl">anshu</div>

                <Link to="/store" className="hover:text-orange-500 transition-colors duration-[0.3s]">Store</Link>
                <Link to="/phone" className="hover:text-orange-500 transition-colors duration-[0.3s]">Phone</Link>
                <Link to="/tablets" className="hover:text-orange-500 transition-colors duration-[0.3s]">Tablets</Link>
                <Link to="/smart-watch-audio" className="hover:text-orange-500 transition-colors duration-[0.3s]">Smart Watch & Audio</Link>
            </div>

            <div className="hidden md:flex items-center justify-center gap-[39px] text-base h-[6.5vh] w-[30vw]">
                <Link to="/about" className="hover:text-orange-500 transition-colors duration-[0.3s]">About us</Link>
                <Link to="/support" className="hover:text-orange-500 transition-colors duration-[0.3s]">Support</Link>

                <span>
                    <img src="https://img.icons8.com/?size=100&id=e4NkZ7kWAD7f&format=png&color=000000" alt="" width="30px" />
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