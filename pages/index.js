import React, {useEffect} from 'react'
import {useRouter} from 'next/router'

import { UserAuth } from '@/context/AuthContext';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  const router = useRouter();
  const {user} = UserAuth();
  
  useEffect(()=> {
    if(user != null){
      router.push("/");
    }
    router.push("/Login") || router.push("/Register");
  },[user])


  
  return (
    <>
    <Head>
        <title>Aviv Haim-s | NETFLIX</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main/>
    </>
  )
}
