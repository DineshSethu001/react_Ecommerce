import React from 'react'
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'



const Services = () => {

   useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in-out'
      });
  
      AOS.refresh()
  
    }, [])

  return (
    <div className="w-full grid lg:grid-cols-4 grid-cols-1 lg:px-20 px-5 pt-[0px] pb-[80px] justify-center items-center gap-10">

  {/* First */}
  <div className="flex flex-col justify-center items-center gap-2 text-center">
    <img className='mb-[20px] w-[60px]' src={shipping} alt="Shipping Icon" />
    <h1 className='text-xl font-semibold text-black'>Worldwide Shipping</h1>
    <p className='text-[17px] text-gray-500'>Get your orders delivered anywhere in the world with our reliable shipping partners.</p>
  </div>

  {/* Second */}
  <div className="flex flex-col justify-center items-center gap-2 text-center">
    <img className='mb-[20px] w-[60px]' src={payment} alt="Payment Icon" />
    <h1 className='text-xl font-semibold text-black'>Fast & Reliable Delivery</h1>
    <p className='text-[17px] text-gray-500'>Experience quick and safe delivery with real-time tracking for every order.</p>
  </div>

  {/* Third */}
  <div className="flex flex-col justify-center items-center gap-2 text-center">
    <img className='mb-[20px] w-[60px]' src={refund} alt="Refund Icon" />
    <h1 className='text-xl font-semibold text-black'>Easy Refund Policy</h1>
    <p className='text-[17px] text-gray-500'>Not happy with your order? Enjoy a simple and smooth refund process.</p>
  </div>

  {/* Fourth */}
  <div className="flex flex-col justify-center items-center gap-2 text-center">
    <img className='mb-[20px] w-[60px]' src={gift} alt="Gift Icon" />
    <h1 className='text-xl font-semibold text-black'>Special Gift Packages</h1>
    <p className='text-[17px] text-gray-500'>Send beautifully packaged gifts with custom notes for your loved ones.</p>
  </div>

</div>

  )
}

export default Services