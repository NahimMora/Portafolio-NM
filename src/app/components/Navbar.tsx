'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  {
    href: "#about",
    title: "Sobre mi",
  },
  {
    href: "#proyects",
    title: "Proyectos",
  },
  {
    href: "#contact",
    title: "Contactame",
  },
];

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className=' fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
        <Link href={"/#"} className=' text-2xl md:text-5xl text-white font-semibold'>
          <h1 className='text-transparent bg-clip-text text-white transition hover:text-yellow-500 hover:bg-clip-text'>
            Mora
          </h1>
        </Link>
        <div className=' mobile-menu block md:hidden'>
          {!navbarOpen ? (
          <button onClick={() => setNavbarOpen(true)} className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-purple-500 hover:border-purple-500'>
            <Bars3Icon className='h-5 w-5'/>
          </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-yellow-500 hover:border-yellow-500'>
            <XMarkIcon className='h-5 w-5'/>
          </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className=' flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks}/> : ''}
    </nav>
  );
};

export default Navbar;
