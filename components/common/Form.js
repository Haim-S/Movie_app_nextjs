
import React, {useRef, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {GoogleButton} from "react-google-button";
import {googleSignIn} from "../../store/slices/authSlice"
import { useDispatch } from 'react-redux';


const Form = () => {

    const RefEmail = useRef();
    const RefPassword = useRef();

    const router = useRouter();
    const locale = router.asPath;

    const dispatch = useDispatch();

    const handleSubmit = async (e) =>{     
        e.preventDefault();
        try {
            if(locale === '/Login'){
                console.log("login ok");
            }else{
                console.log("register ok");
            }
            
            console.log(RefEmail.current.value, RefPassword.current.value);
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = ()=>{
      try {
         dispatch (googleSignIn)
      } catch (error) {
        
      }
    }

    useEffect(()=>{

        console.log(locale);

    },[])


  return (
    <>
      <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
            <input type='email' ref={RefEmail} className='my-2 p-2 bg-gray-700 rounded'/>
            <input type='password' ref={RefPassword} className='my-2 p-2 bg-gray-700 rounded'/>
            <button className='bg-red-600 py-3 my-6 rounded font-bold'>login</button>
            <div className='flex justify-between items-center text-sm text-gray-600'>
              <p><input className='mr-2' type='checkbox'/>Remember me</p>
              <p>Need Help?</p>
            </div>
            <p className='py-8'>
              <span className='text-gray-600'>New to Netahs?</span>
              {' '}
              <Link href={'/Register'}>
              Register
              </Link>
            </p>
     </form>
            <GoogleButton style={{width: "100%", marginBottom: "12px"}} onClick={handleGoogleSignIn}/>
    </>
  )
}

export default Form