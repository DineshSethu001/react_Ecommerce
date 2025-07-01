import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import headset from '../assets/headset.jpg'
import earbuds from '../assets/earbuds.jpg'
import dslr from '../assets/dslr.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:500,
        easing:'ease-in-out',
    })
    AOS.refresh();
  },[])
  return (
  <div id="hero" className="w-full flex justify-center items-center h-[600px] lg:h-[700px]">
     <Slider className='w-full' {...settings}>
     <div>
        <div className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center" style={{backgroundImage:`url(${headset})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-[var(--themeyellow)] text-xl border rounded-lg px-6 py-2 border-[var(--themeyellow)]'>Get upto Discounts 80% off</h1>

            <h1  data-aos="zoom-in" data-aos-delay="100" className='text-[60px] text-white lg:text-[120px] lg:leading-[120px] leading-[70px] uppercase font-bold'>Wireless <br/>Boom headse<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">t</span></h1>
            
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted <span className='text-[var(--themeyellow)] font-semibold'>Electronics Gadgets</span></h1>
            <button  data-aos="zoom-in" data-aos-delay="200"className='font-semibold text-black bg-[var(--themeyellow)] px-6 py-3 rounded-lg uppercase'>online collections</button>
        </div>
    </div>
      <div>
        <div className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center" style={{backgroundImage:`url(${dslr})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-[var(--themeyellow)] text-xl border rounded-lg px-6 py-2 border-[var(--themeyellow)]'>Get upto Discounts 80% off</h1>
            <h1  data-aos="zoom-in" data-aos-delay="100" className='text-[60px] text-white lg:text-[120px] lg:leading-[120px] leading-[70px] uppercase font-bold'>DSLR 360 <br/>Camera</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted <span className='text-[var(--themeyellow)] font-semibold'>Electronics Gadgets</span></h1>
            <button  data-aos="zoom-in" data-aos-delay="200"className='font-semibold text-black bg-[var(--themeyellow)] px-6 py-3 rounded-lg uppercase'>online collections</button>
        </div>
    </div>
      <div>
        <div className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center" style={{backgroundImage:`url(${earbuds})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-[var(--themeyellow)] text-xl border rounded-lg px-6 py-2 border-[var(--themeyellow)]'>Get upto Discounts 80% off</h1>
            <h1  data-aos="zoom-in" data-aos-delay="100" className='text-[60px] text-white lg:text-[120px] lg:leading-[120px] leading-[70px] uppercase font-bold'>Wireless <br/>Earbuds</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted <span className='text-[var(--themeyellow)] font-semibold'>Electronics Gadgets</span></h1>
            <button  data-aos="zoom-in" data-aos-delay="200"className='font-semibold text-black bg-[var(--themeyellow)] px-6 py-3 rounded-lg uppercase'>online collections</button>
        </div>
    </div>
   </Slider>
  </div>
  )
}

export default Hero