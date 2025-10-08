import React, { useState } from "react";

const Home = () => {
  const images = [
    "https://i03.appmifile.com/863_operator_in/29/09/2025/dcdcfba0fed449847df5dbeca132345b.jpg?thumb=1&w=2800&f=webp&q=85",
    "https://i03.appmifile.com/267_operator_in/21/09/2025/1de962e9fe6948f5f57f1258f0cfd7c2.jpg?thumb=1&w=2800&f=webp&q=85",
    "https://i03.appmifile.com/797_operator_in/15/09/2025/9df48ca59d2a0da7c992011704000e15.jpg?thumb=1&w=2800&f=webp&q=85",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

    const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div>
      <div className="relative w-[full] h-[full] mt-[5vh] overflow-hidden  m-auto">
        <div className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-[full] h-[full] object-cover flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-2 rounded-xl"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-xl"
        >
          →
        </button>
      </div>
      <div className="px-16">
        <div className="flex justify-center items-center text-3xl font-medium mt-14 h-20">
          Featured Products
        </div>

        <div className="flex justify-center items-center text-xl font-medium mt-2 gap-14 h-19">
          <a href="#" className="hover:text-orange-500 transition-colors duration-[0.3s]">
            Phone
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-[0.3s]">
            Laptops
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-[0.3s]">
            Tablets
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-[0.3s]">
            Accessories
          </a>
        </div>

        <div className="h-[80vh] bg-red-100 m-auto rounded-xl mt-5 p-5">
          <div className="h-full bg-blue-100 w-full m-auto rounded-xl"></div>
        </div>

        {/* Exclusive Offers */}
        <div className="flex justify-center items-center text-3xl font-medium mt-14 h-20">
          Exclusive Offers
        </div>

        <div className="flex justify-between items-center rounded-xl mt-5 m-auto">
          {/* Card 1 */}
          <div className="h-[50vh] w-[51vh] rounded-xl mt-1 p-3 bg-white">
            <div
              className="h-[33vh] rounded-xl mt-1 bg-[url('https://i03.appmifile.com/310_operator_in/09/07/2025/0bf9696e39d9363fdba9d310fddf6501.jpg?thumb=1&w=840&f=webp&q=85')]"
            ></div>
            <div className="text-1xl mt-10 font-medium text-center">
              <h2 className="text-2xl">Smart Bundles</h2>
              Buy More! Save Up to 45% Off
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[50vh] w-[51vh] rounded-xl mt-1 p-3 bg-white">
            <div
              className="h-[33vh] rounded-xl mt-1 bg-[url('https://i03.appmifile.com/644_operator_in/09/07/2025/549df2d2bec29a690551e62f36f226bc.jpg?thumb=1&w=840&f=webp&q=85')]"
            ></div>
            <div className="text-1xl mt-10 font-medium text-center">
              <h2 className="text-2xl">Free Spotify Premium</h2>
              Enjoy up to 4 Months of Ad-free Music
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[50vh] w-[51vh] rounded-xl mt-1 p-3 bg-white">
            <div
              className="h-[33vh] rounded-xl mt-1 bg-[url('https://i03.appmifile.com/437_operator_in/09/07/2025/ac78d4770fa4329d64859b75da98e309.jpg?thumb=1&w=840&f=webp&q=85')]"
            ></div>
            <div className="text-1xl mt-10 font-medium text-center">
              <h2 className="text-2xl">New User Zone</h2>
              Get the Xiaomi Store App
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center items-center text-3xl font-medium mt-14 h-20">
        Explore anshu Shop
      </div>

      <div className="flex justify-between items-center h-[50vh] bg-red-100 rounded-xl m-auto"></div>

      <div className="flex justify-between items-center rounded-xl mt-5 m-auto">
       
        <div className="h-[50vh] w-[55vh] rounded-xl mt-1 p-14">
          <a href="#">
            <img
              className="m-auto"
              src="https://img.icons8.com/?size=100&id=3483&format=png&color=000000"
              alt="Exchange"
              width="100"
            />
            <h1 className="text-3xl text-center font-medium mt-10">Exchange</h1>
            <p className="text-xl font-medium text-center mt-3">
              Save More & Go <br /> Green With Your Old Device
            </p>
          </a>
        </div>

        {/* Card 2 */}
        <div className="h-[50vh] w-[55vh] rounded-xl mt-1 p-14">
          <a href="#">
            <img
              className="m-auto"
              src="https://img.icons8.com/?size=100&id=2606&format=png&color=000000"
              alt="Warranty"
              width="100"
            />
            <h1 className="text-3xl text-center font-medium mt-10">
              Extended Warr...
            </h1>
            <p className="text-xl font-medium text-center mt-3">
              Ensure Your Devices <br /> For An Extra Year At Nominal Cost
            </p>
          </a>
        </div>

        {/* Card 3 */}
        <div className="h-[50vh] w-[55vh] rounded-xl mt-1 p-14">
          <a href="#">
            <img
              className="m-auto"
              src="https://img.icons8.com/?size=100&id=11162&format=png&color=000000"
              alt="Service Centers"
              width="100"
            />
            <h1 className="text-3xl text-center font-medium mt-10">
              Service Centers
            </h1>
            <p className="text-xl font-medium text-center mt-3">
              Right Where You Need Us
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
