"use client"
import Image from 'next/image';
import React, { ReactNode, useState, useTransition } from 'react';

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
      <ul className='list-disc pl-2 grid grid-cols-3'>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>FullStack Developer - Henry</li>
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
    className={`px-4 py-2 mr-4 text-white focus:outline-none ${active ? 'border-b-2 border-white' : ''}`}
  >
    {children}
  </button>
);

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white '>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <Image src={"/images/about-image.png"} width={500} height={500} alt='AboutImage'/>
        <div className=' mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mi</h2>
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
          <div className=' mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
