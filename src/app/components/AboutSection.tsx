"use client"
import Image from 'next/image';
import React, { ReactNode, useState, useTransition, useEffect } from 'react';
import IconJs from '../../../public/icons/javascript.svg';
import IconTs from '../../../public/icons/typescript.svg';
import IconPy from '../../../public/icons/python.svg';
import IconRc from  '../../../public/icons/react.svg'
import IconNx from '../../../public/icons/next.svg'
import IconNd from '../../../public/icons/nodejs.svg';
import IconEx from '../../../public/icons/express.svg';
import IconSq from '../../../public/icons/sequelize.svg';
import IconPs from '../../../public/icons/postgresql.svg';
import SoyHenry from '../../../public/icons/SoyHenry.jpeg';
import AboutImage from '../../../public/images/About-image.png';

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='pl-2 grid grid-cols-3'>
        <Image src={IconJs} alt='IconJs' className='m-2'/>
        <Image src={IconTs} alt='IconTs' className='m-2' />
        <Image src={IconPy} alt='IconPy' className='m-2' />
        <Image src={IconRc} alt='IconRc' className='m-2' />
        <Image src={IconNx} alt='IconNx' className='m-2' />
        <Image src={IconNd} alt='IconNd' className='m-2' />
        <Image src={IconEx} alt='IconEx' className='m-2' />
        <Image src={IconSq} alt='IconSq' width={50} className='m-2' />
        <Image src={IconPs} alt='IconPs' className='m-2' />
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='pl-2'>
        <li>
          <div className='flex items-center'>
          <Image src={SoyHenry} alt='IconSH'height={50} 
          className='m-2'
          />
          FullStack Developer - Henry
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>Las Encinas Boutique - 2023</li>
      </ul>
    ),
  },
];

const TabButton = ({ selectTab, active, children }: { selectTab: () => void; active: boolean; children: ReactNode }) => (
  <button
    onClick={selectTab}
    className={`px-4 py-2 mr-4 text-white focus:outline-none hover:text-yellow-300 ${active ? 'border-b-2 border-yellow-600 text-yellow-500' : ''}`}
  >
    {children}
  </button>
  
);

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();
  const [windowWidth, setWindowWidth] = useState(0);

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

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
    <section className='text-white ' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      {windowWidth >= 640 ?
      <Image src={AboutImage} width={500} height={500} alt='AboutImage'/>
      : ""}
      <div className=' mt-4 md:mt-10 text-left flex flex-col h-full'>
          <h2 className='text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-900'>Sobre mi</h2>
          <p className='text-base lg:text-lg'>
            Destaco en el desarrollo de aplicaciones web interactivas y escalables 🚀.
            Mi enfoque va más allá del código. Creo en la atención al detalle, el trabajo en equipo y la entrega de soluciones. Siempre en búsqueda de nuevos desafíos y oportunidades para mejorar. ❤️
          </p>
          <div className='flex flex-row justify-start mt-8'>
            {TAB_DATA.map((t) => (
              <TabButton key={t.id} selectTab={() => handleTabChange(t.id)} active={tab === t.id}>
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className='m-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;