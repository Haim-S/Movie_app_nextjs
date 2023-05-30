
import React, {useRef, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {GoogleButton} from "react-google-button";
import { UserAuth } from '@/context/AuthContext';


const Form = () => {

  const { LoginByGoogle, LoginByEmailAndPassword, RegisterByEmailAndPassword, user } = UserAuth();

    const RefEmail = useRef();
    const RefPassword = useRef();

    const router = useRouter();
    const locale = router.asPath;

    // const dispatch = useDispatch();

    const handleSubmit = async (e) =>{     
        e.preventDefault();
        try {
            if(locale === '/Login'){
              await LoginByEmailAndPassword(RefEmail.current.value, RefPassword.current.value)
                console.log("login ok");
            }else{
              await RegisterByEmailAndPassword(RefEmail.current.value, RefPassword.current.value)
                console.log("register ok");
            }
            
            console.log(RefEmail.current.value, RefPassword.current.value);
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = async()=>{
      try {
      await LoginByGoogle()
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      if(user != null){
        router.push("/");
      }

    },[user])


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
     <button className='w-full rounded' onClick={()=> handleGoogleSignIn()}>
            <GoogleButton style={{width: "100%", marginBottom: "12px", borderRadius: "0.25rem"}}/>
     </button>
    </>
  )
}

export default Form