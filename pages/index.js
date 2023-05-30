'use client'
import React, {useEffect} from 'react'

import {useRouter} from 'next/router'
import { UserAuth } from '@/context/AuthContext';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/main/Main'
import Row from '@/components/common/Row';
import requests from '../Requests'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  
  const router = useRouter();
  const {user} = UserAuth();
  
  useEffect(()=> {
    if(user != null){
      router.push("/Login") || router.push("/Register")
    }
    
      router.push("/")
    
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
        <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>
    </>
  )
}
