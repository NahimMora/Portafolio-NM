"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import IconJs from '../../../public/icons/javascript.svg';
import IconTs from '../../../public/icons/typescript.svg';
import IconRc from  '../../../public/icons/react.svg'
import IconNx from '../../../public/icons/next.svg'

const Footer = () => {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='conteiner p-12 flex justify-around items-center'>
        <Link href={"https://github.com/NahimMora/Portafolio-NM"} target='_blank'>
          <p className='text-transparent bg-clip-text text-white transition hover:text-yellow-500 hover:bg-clip-text'>
            Repositorio
          </p>     
        </Link>
        <section className='flex items-center'>
          {windowWidth >= 500 ? <p>Hecho con:</p> : ""}
          <div>
          <ul className='pl-2 grid grid-cols-4'>
            <Image src={IconJs} alt='IconJs' width={30} className='m-2'/>
            <Image src={IconTs} alt='IconTs' width={30} className='m-2' />
            <Image src={IconRc} alt='IconRc' width={30} className='m-2' />
            <Image src={IconNx} alt='IconNx' width={30} className='m-2' />
          </ul>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer