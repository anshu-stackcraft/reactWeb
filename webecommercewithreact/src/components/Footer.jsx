import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>      
    <div className="h-auto w-full  bg-stone-900 p-[5vw] flex justify-between">
        
       <div className=" w-[60vw] flex justify-start gap-[10vw]">
        <div className="text-zinc-400  font-medium">
          <ul>
            <li>
              <Link
                to="/support"
                className="hover:text-orange-500 transition-colors duration-300 text-white"
              >
                SUPPORT
              </Link>
            </li>
            <li><Link to="/help" className="hover:text-orange-500">Online Help</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link to="/service-centre" className="hover:text-orange-500">Service Centre</Link></li>
            <li><Link to="/warranty" className="hover:text-orange-500">Warranty</Link></li>
            <li><Link to="/user-guide" className="hover:text-orange-500">User Guide</Link></li>
            <li><Link to="/certification" className="hover:text-orange-500">Certification</Link></li>
            <li><Link to="/finance" className="hover:text-orange-500">Finance</Link></li>
          </ul>
        </div>

        {/* SHOPPING */}
        <div className="text-zinc-400 font-medium">
          <ul>
            <li>
              <Link
                to="/shop"
                className="hover:text-orange-500 transition-colors duration-300 text-white"
              >
                SHOPPING
              </Link>
            </li>
            <li><Link to="/shop/phones" className="hover:text-orange-500">Phone</Link></li>
            <li><Link to="/shop/laptops" className="hover:text-orange-500">Laptops</Link></li>
            <li><Link to="/shop/tvs" className="hover:text-orange-500">Smart TVs</Link></li>
            <li><Link to="/shop/tablets" className="hover:text-orange-500">Tablets</Link></li>
            <li><Link to="/shop/accessories" className="hover:text-orange-500">Accessories</Link></li>
            <li><Link to="/certification" className="hover:text-orange-500">Certification</Link></li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div className="text-zinc-400 font-medium">
          <ul>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors duration-300 text-white"
              >
                ABOUT US
              </Link>
            </li>
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/quality" className="hover:text-orange-500">Server Quality</Link></li>
            <li><Link to="/careers" className="hover:text-orange-500">Join Our Team</Link></li>
            <li><Link to="/franchise" className="hover:text-orange-500">Anshu Store Franchise</Link></li>
          </ul>
        </div>
        </div>
        {/* FOLLOW */}
        <div className="col-span-2  text-zinc-400 font-medium">
          <a href="#" className="text-2xl text-white">Follow anshu</a>

          {/* Social Icons */}
          <div className="h-10 mt-2 flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=XQljpDLokpZE&format=png&color=000000" alt="Facebook" width="35px" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=maVckXzqqWtM&format=png&color=000000" alt="Twitter" width="35px" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=100&id=ce4KW2ncwzDf&format=png&color=000000" alt="Instagram" width="35px" />
            </a>
          </div>

          <div className="text-xl mt-4">Let's stay in touch</div>

          {/* Newsletter Form */}
          <form className="max-w-md mt-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full pr-28 pl-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>

        
          <div className="mt-4 border-2 border-white rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-2">
              <img
                className="rounded-lgx mr-4 w-[7vw]"
                src="https://i03.appmifile.com/32_operator_in/22/11/2022/9b4d58f78a203b82a56bdd11692d4ba1.png?thumb=1&w=160&f=webp&q=85"
                alt="App scanner"
              />
              <div >
                <div className="text-2xl">Get anshu store app</div>
                <p className="text-sm font-medium">
                  Information for better shopping experience
                </p>
              </div>
            </div>
            <div className="border-t-2 border-white flex justify-center items-center p-3">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  className="mr-2"
                  src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000"
                  width="25px"
                  alt="Google Play"
                />
                Google on play store
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto w-full bg-stone-900 py-4">
        <div className="h-1 w-[90vw] bg-zinc-400 m-auto rounded-b-lg"></div>
        <div className="w-[90vw] m-auto mt-5 text-sm md:text-base font-medium flex flex-col md:flex-row justify-between items-center text-zinc-400 gap-3">
          <p>Copyright © 2024 - 2025 anshu. All Rights Reserved</p>
          <div className="flex items-center gap-2">
            <Link to="/language">
              India/English
            </Link>
            <img
              src="https://img.icons8.com/?size=100&id=TEcvhDoDbTkh&format=png&color=000000"
              width="27px"
              alt="Language"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
