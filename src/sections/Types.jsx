import React, { useEffect } from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Types = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out'
    });

    AOS.refresh()

  }, [])
  return (
    <div className='uppercase w-full px-5 lg:px-20 py-[80px] justify-center items-start gap-10 grid lg:grid-cols-3 grid-cols-1'>

{/* first col image */}

      <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center p-10 rounded-lg bg-center bg-cover gap-6 items-end" style={{ backgroundImage: `url(${banner1})` }}>
        <h1 className="text-[var(--themeyellow)] border rounded-lg text-lg border-[var(--themeyellow)] px-6 py-2">
          60% off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Wireless <br />device
        </h1>
        <button className='bg-[var(--themeyellow)] px-6 py-3 rounded-lg text-black font-semibold'>show now</button>
      </div>

{/* second col image */}

       <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center p-10 rounded-lg bg-center bg-cover gap-6 items-end" style={{ backgroundImage: `url(${banner2})` }}>
        <h1 className="text-[var(--themeyellow)] border rounded-lg text-lg border-[var(--themeyellow)] px-6 py-2">
          60% off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Wireless <br />device
        </h1>
        <button className='bg-[var(--themeyellow)] px-6 py-3 rounded-lg text-black font-semibold'>show now</button>
      </div>

{/* third col image */}

       <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center p-10 rounded-lg bg-center bg-cover gap-6 items-end" style={{ backgroundImage: `url(${banner3})` }}>
        <h1 className="text-[var(--themeyellow)] border rounded-lg text-lg border-[var(--themeyellow)] px-6 py-2">
          60% off
        </h1>
        <h1 className="text-4xl text-end text-white font-semibold">
          Wireless <br />device
        </h1>
        <button className='bg-[var(--themeyellow)] px-6 py-3 rounded-lg text-black font-semibold'>show now</button>
      </div>

    </div>
  )
}

export default Types