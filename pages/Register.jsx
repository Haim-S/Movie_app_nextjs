
import React from 'react'
import Image from 'next/image'
import Form from '@/components/common/Form'


const Register = () => {
  return (
  <div className='w-full h-screen absolute'>
       <Image
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{objectFit: "cover", marginTop: "3%"}}
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='/'
      />
  <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold'>Register</h1>
            <Form/>
          </div>
        </div>
      </div>
  </div>
  
  )
}

export default Register