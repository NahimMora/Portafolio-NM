'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '../../../public/images/GithubIcon.svg'
import LinkedinIcon from '../../../public/images/LinkedinIcons.svg'

const EmailSection = () => {

    // const {emailSubmitted, setEmailSubmitted} = useState(false)

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value
    //     }
    //     const JSONdata = JSON.stringify(data)
    //     const endpoint = '/api/send'
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSONdata
    //     }

    // const response = await fetch(endpoint, options)
    // const resData = await response.json()
    // if(response.status === 200){
    //     console.log('Mensaje enviado');
    //     setEmailSubmitted(true)
    // }
    // }

  return 
    // <section className='grid md:grid-cols-2 my-12 p-24 gap-4 relative'>
    //     <div className=' bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
    //     <div className='z-10'>
    //         <h5 className=' text-xl font-bold text-white my-2'>Contactame!</h5>
    //         <p className='text-[#ADB7BE mb-4 max-w-md'>
    //             {""}
    //             Estoy dispuesto a nuevas oportunidades, mi correo esta siempre abierto.
    //             Cualquier consulta estare para saludarlo, dame un toque.
    //         </p>
    //         <div className='socials flex flex-row gap-2'>
    //             <Link href="github.com">
    //                 <Image src={GithubIcon} alt="GitHub icon"/>
    //             </Link>
    //             <Link href="linkedin.com">
    //                 <Image src={LinkedinIcon} alt="Linkedin icon"/>
    //             </Link>
    //         </div>
    //     </div>
    //     <div>
    //       <form className='flex flex-col' onSubmit={handleSubmit}>
    //         <div className=' mb-6'>
    //         <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>
    //             Tu Email
    //         </label>
    //         <input 
    //         name='email'
    //         type='email' 
    //         id='email' 
    //         required
    //         className='bg-[#181818] border border-["33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
    //         placeholder='example@example.com'
    //         />
    //         </div>

    //         <div className=' mb-6'>
    //         <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>
    //             Asunto
    //         </label>
    //         <input 
    //         name='subject'
    //         type='text' 
    //         id='subject' 
    //         required
    //         className='bg-[#181818] border border-["33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
    //         placeholder='Asunto'
    //         />
    //         </div>

    //         <div className=' mb-6'>
    //         <label htmlFor='message' className='text-white mb-2 block text-sm font-medium'>
    //             Mensaje
    //         </label>
    //         <textarea 
    //         name='message' 
    //         id='message' 
    //         required
    //         className='bg-[#181818] border border-["33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
    //         placeholder='Hablemos sobre ello...'
    //         />
    //         </div>
            
    //         <button
    //           type='submit'
    //           className=' bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
    //             Envia el mensaje
    //         </button>
    //         {
    //             emailSubmitted && (
    //                 <p className='text-green-500 text-sm mt-2'>
    //                     Correo enviado exitosamente!
    //                 </p>
    //             )
    //         }

    //       </form>
    //     </div>
    // </section>

}

export default EmailSection