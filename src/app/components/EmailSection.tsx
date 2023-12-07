'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../../public/images/GithubIcon.svg';
import LinkedinIcon from '../../../public/images/LinkedinIcons.svg';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const EmailSection: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);

    const showSweetAlertSuccess = () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          iconColor: 'purple',
          background: 'ADB7BE',
          title: 'Correo enviado',
          showConfirmButton: false,
          timer: 1500,
        });
      };
    
    const showSweetAlertError = () => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        iconColor: 'purple',
        background: 'ADB7BE',
        title: 'Error al enviar el correo, intentalo de nuevo',
        showConfirmButton: false,
        timer: 2500,
      });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        form.current ?
            emailjs.sendForm('service_qojv8fd', 'template_1wm4are', form.current, '7kO-U-3SDy_TU3ZVo')
                .then(
                    (result) => {showSweetAlertSuccess()},
                    (error) => {showSweetAlertError()}
                )
        :
        showSweetAlertError()
    };

  return (
    <section className='grid md:grid-cols-2 my-12 p-24 gap-4 relative' id={'contact'}>
        <div className=' bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className=' text-xl font-bold text-white my-2'>Contactame!</h5>
            <p className='text-[#ADB7BE mb-4 max-w-md'>
                {""}
                Listo para explorar nuevas oportunidades y desafíos. ¡No dudes en ponerte en contacto! Estoy emocionado 
                por las posibilidades que puedan surgir. ¡Hablemos pronto!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/NahimMora">
                    <Image src={GithubIcon} alt="GitHub icon"/>
                </Link>
                <Link href="https://linkedin.com/in/fernando-nahim-mora-developer">
                    <Image src={LinkedinIcon} alt="Linkedin icon"/>
                </Link>
            </div>
        </div>
        <div>
          <form className='flex flex-col' ref={form} onSubmit={handleSubmit}>

            <div className=' mb-6'>
            <label htmlFor='user_name' className='text-white mb-2 block text-sm font-medium'>
                Nombre
            </label>
            <input 
            name='user_name'
            type='text' 
            id='user_name' 
            required
            className='bg-[#181818] border border-["33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
            placeholder='Nombre'
            />
            </div>

            <div className=' mb-6'>
            <label htmlFor='user_email' className='text-white mb-2 block text-sm font-medium'>
                Email
            </label>
            <input 
            name='user_email'
            type='email' 
            id='user_email' 
            required
            className='bg-[#181818] border border-["33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
            placeholder='example@example.com'
            />
            </div>

            <div className=' mb-6'>
            <label htmlFor='message' className='text-white mb-2 block text-sm font-medium'>
                Mensaje
            </label>
            <textarea 
            name='message' 
            id='message' 
            required
            className='bg-[#181818] border border-["33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
            placeholder='Hablemos sobre ello...'
            />
            </div>
            
            <button
              type='submit'
              value="Send"
              className=' bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                Enviar correo
            </button>

          </form>
        </div>
    </section>
  )
}

export default EmailSection