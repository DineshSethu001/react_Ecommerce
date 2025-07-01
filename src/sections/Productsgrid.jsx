import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { products } from '../export';
import { FaStar, FaRegHeart } from 'react-icons/fa'
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';

const Productsgrid = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out'
    });

    AOS.refresh()

  }, [])

  return (
    <div
      id="products"
      className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className='text-[var(--themepurple)] text-xl font-semibold'>
        Browser Collections
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className='text-black font-semibold text-[42px] leading-[50px] text-center'>
        Trending Products
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10">

        {
          products.map((item, index) => (
            <div
              id="product-box"
              key={index}
              className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative">
              <img src={item.img} alt="" />
              <div id="icons" className="flex justify-center items-center gap-3">

                <div className='bg-[var(--themepurple)] hover:bg-[var(--themeyellow)] hover:text-black rounded-full p-3 text-white'>
                  <MdOutlineRemoveRedEye />
                </div>

                <div className='bg-[var(--themepurple)] hover:bg-[var(--themeyellow)] hover:text-black rounded-full p-3 text-white'>
                  <FaRegHeart />
                </div>

                <div className='bg-[var(--themepurple)] hover:bg-[var(--themeyellow)] hover:text-black rounded-full p-3 text-white'>
                  <MdAddShoppingCart />
                </div>

              </div>

              <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>
              <h1 className='text-xl text-black font-semibold'>{item.name}</h1>
              <h1 className='text-lg text-[var(--themepurple)] font-semibold'>{item.price}</h1>
              <div className="w-full mt-2">
                <hr/>
                <div className="flex justify-between items-center gap-6 mt-3 ">
                  <div className="flex gap-1 justify-start items-center">
                    <FaStar className='text-[var(--themepurple)]'/>
                    <FaStar className='text-[var(--themepurple)]'/>
                    <FaStar className='text-[var(--themepurple)]'/>
                    <FaStar className='text-[var(--themepurple)]'/>
                    <FaStar className='text-[var(--themepurple)]'/>
                  </div>
                  <button className='bg-green-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold uppercase'>Sale 14%</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <button data-aos="zoom-in" data-aos-delay="400" className='bg-[var(--themepurple)] hover:bg-[var(--themeyellow)] text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8'>VIEW MORE</button>

    </div>
  )
}

export default Productsgrid