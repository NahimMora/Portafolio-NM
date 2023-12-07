'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {

  const cvUrl = '/CV-NahimMora.pdf';
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-NahimMora.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div initial={{opacity:0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration:0.5}} 
        className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold md:h-32">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-600'>
              Buenas! Soy {""}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                'Nahim Mora',
                1000,
                'FullStack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=' text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-20 xsm:mt-0'>
            Constructor digital de experiencias únicas. Fusiono código y creatividad para dar vida a soluciones web que desafían lo convencional. En constante búsqueda de la próxima innovación. ❤️
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 to-purple-600 hover:text-orange-200 text-white'>
              <Link href={'#contact'}>Contactame</Link>
            </button>
            <button 
            className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-400 to-purple-600 mt-3'
            onClick={downloadCV}
            >
              <span className='text-white block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 hover:text-orange-200'>
                Descargar CV
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;
