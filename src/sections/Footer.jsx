import React, { useEffect } from 'react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';
import client4 from '../assets/client4.png';
import client5 from '../assets/client5.png';
import client6 from '../assets/client6.png';
import google from '../assets/google.jpg';
import apple from '../assets/apple.jpg';
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const footerLinks = ['Home', 'About', 'Products', 'Services', 'Contact'];

  return (
    <div id="contact" className="w-full flex flex-col justify-center items-center">
      {/* Clients Section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full bg-[var(--themepurple)] lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10"
      >
        {[client1, client2, client3, client4, client5, client6].map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
            alt={`client-${index + 1}`}
          />
        ))}
      </div>

      {/* Footer Info */}
      <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-5 grid-cols-1 gap-10">
        {/* Company Info */}
        <div data-aos="zoom" data-aos-delay="100" className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold text-[var(--themepurple)] underline italic">Electra Shop</h1>
          <p className="text-gray-500 text-justify">
            Electra Shop brings you the best in electronics and smart appliances.
            From home essentials to cutting-edge gadgets, we’ve got it all.
            Experience quality, durability, and the latest tech at great prices.
            Shop smart, shop safe — only at Electra Shop!
          </p>
          <div className="flex flex-col gap-4">
            <h1 className="text-black text-xl font-semibold">Download our App</h1>
            <div className="flex gap-4">
              <img src={google} alt="Google Play" />
              <img src={apple} alt="App Store" />
            </div>
          </div>
        </div>

        {/* Footer Links (Repeated) */}
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} data-aos="zoom-in" data-aos-delay="100">
            <h1 className="text-black text-xl font-semibold capitalize">Useful Links</h1>
            <ul className="mt-8 flex flex-col gap-2">
              {footerLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="text-gray-500 cursor-pointer hover:text-black capitalize"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     

      {/*  3 box */}

      <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
        <hr className="border-t border-gray-300 py-3" />
        <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:gap-4 gap-10">
          <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
            <img src={pay1} alt="" className='w-[50px] rounded-lg'/>
            <img src={pay2} alt="" className='w-[50px] rounded-lg'/>
            <img src={pay3} alt="" className='w-[50px] rounded-lg'/>
            <img src={pay4} alt="" className='w-[50px] rounded-lg'/>
          </div>
          <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-5 flex-grow">
            <h1 className="text-black font-semibold text-2xl">Subscribe Newletter</h1>
            <div className="">
              <input type="email" placeholder='Enter valid email' className='lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg'/>
              <button className="bg-[var(--themepurple)] lg:w-auto w-full text-white hover:bg-[var(--themeyellow)] hover:text-black px-6 py-3 rounded-r-lg font-semibold">SUBMIT</button>
            </div>
          </div>
         
        </div>
      </div>
       {/* Bottom bar or copyright */}
      <div className="bg-gray-200 w-full text-center py-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Electra Shop. All rights reserved.
        <div id="icon-box" className="bg-[var(--themepurple)] text-white p-3 rounded-full hover:bg-[var(--themeyellow)] hover:text-black cursor-pointer fixed lg:bottom-6 right-bottom-6">
          <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
