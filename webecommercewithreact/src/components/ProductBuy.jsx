import React from 'react'

const ProductBuy = () => {
  return (
    <>
        <div className="font-medium flex p-5 top-0 right-14 bg-white/30 backdrop-blur-sm left-14 fixed justify-between h-[10vh]">
      <div className="text-4xl">Mi Notebook Ultra</div>

      <div className="h-full w-[15vw] text-2xl flex justify-center items-center">
        <img
          className="mt-1"
          src="https://img.icons8.com/?size=100&id=87787&format=png&color=000000"
          alt="Laptop Icon"
          width="21"
        />
        <span className="ml-2">54,999</span>
        <button className="rounded-lg ml-4 mt-1 bg-black text-white h-6 text-sm w-[7vw]">
          Buy Now
        </button>
      </div>
    </div>
    </>
  )
}

export default ProductBuy