import React, {useState} from 'react'
import Link from 'next/link'
import { UserAuth } from '@/context/AuthContext';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {

  
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
          await logOut()
        } catch (error) {
          console.log(error)
        }
      }

     

  return (
    <>
    <div className='flex item-center justify-between pl-2 pt-4 w-full h-20 z-[100] bg-[#21262d] absolute'>
        <Link href={'/'}>
        <h1 className='text-red-600 text-3xl font-bold cursor-pointer'>NETAHS</h1>
        </Link>
    <div className='mr-4'>
    {user?
        <div className='flex'>
            <Link href={'/Account'}>
                <button className='text-white pr-4'>Account</button>
            </Link>
            <button onClick={handleSignOut} className='bg-red-600 px-6 py-1.5 mx-2 rounded cursor-pointer text-white'>logout</button>
            <div className='flex items-center cursor-pointer'>
              <Link href={'/Search'}>
                <AiOutlineSearch style={{color: "white"}} size={30}/>
              </Link>
            </div>
        </div>
    :
    <div>
            <Link href='/Login'>
            <button className='text-white pr-4'>Login</button>
            </Link>
            <Link href='/Register'>
            <button className='bg-red-600 px-6 py-1.5 rounded cursor-pointer text-white'>Register</button>
            </Link>
        </div>
    }
    </div> 
    </div>
    </>
  )
}

export default Navbar