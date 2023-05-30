// import React from 'react'

import { UserAuth } from '../../context/AuthContext';
import {useRouter} from 'next/router'

const Protected = async({children}) => {
    
    const router = useRouter();
    const { user } = UserAuth();
    if (!user) {
        return (router.push("/Login"));
      }
    
      return await children;
    };

export default Protected