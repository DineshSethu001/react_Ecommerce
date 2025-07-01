import React from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'
import cat5 from '../assets/cat5.jpg'
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css'
const Category = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
        })
        AOS.refresh();
    }, [])
    return (
        <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex flex-col lg:flex-row gap-20 justify-center items-center'>
            <div data-aos="zoom-in" data-aos-delay="50"
                className="w-full flex flex-col justify-center items-center lg:w-[15%] lg:items-start gap-[20px]">
                <h1 className='text-[var(--themepurple)] text-xl font-semibold lg:text-start text-center'>
                    Favorite Items
                </h1>
                <h1 className='text-[42px] leading-[50px] text-black font-semibold lg:text-start text-center'>
                    Popular Category
                </h1>
                <button className='uppercase bg-[var(--themepurple)] text-white hover:bg-[var(--themeyellow)] hover:text-black px-8 py-3 mt-[60px] rounded-lg font-semibold'>
                    View All
                </button>
            </div>

            {/*  products*/}
            <div className="w-full lg:w-[85%] grid gap-10 justify-center items-center lg:grid-cols-5 grid-cols-1">
                {/* list of products */}

                <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center gap-6">
                    <img src={cat1} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black text-xl cursor-pointer font-semibold hover:text-[var(--themepurple)]'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-center gap-6">
                    <img src={cat2} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black text-xl cursor-pointer font-semibold hover:text-[var(--themepurple)]'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col justify-center items-center gap-6">
                    <img src={cat3} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black text-xl cursor-pointer font-semibold hover:text-[var(--themepurple)]'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="400" className="flex flex-col justify-center items-center gap-6">
                    <img src={cat4} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black text-xl cursor-pointer font-semibold hover:text-[var(--themepurple)]'>Portable Speaker</h1>
                </div>

                <div data-aos="zoom-in" data-aos-delay="500" className="flex flex-col justify-center items-center gap-6">
                    <img src={cat5} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black text-xl cursor-pointer font-semibold hover:text-[var(--themepurple)]'>Portable Speaker</h1>
                </div>
            </div>
        </div>
    )
}

export default Category