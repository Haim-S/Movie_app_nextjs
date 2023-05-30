import {createContext, useContext, useEffect, useState} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
  import { auth } from "@/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=> {

    const [user, setUser] = useState({});

    
    function RegisterByEmailAndPassword(email, password) {
      createUserWithEmailAndPassword(auth, email, password);
    
  }

  function LoginByEmailAndPassword(email, password){
      return signInWithEmailAndPassword(auth, email, password)
  }

    const LoginByGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }


    const logOut = () => {
        signOut(auth)
    }



    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('User', currentUser)
      });
      return () => {
        unsubscribe();
      };
    }, []);


    return(
        <AuthContext.Provider value={{ LoginByGoogle, logOut, LoginByEmailAndPassword, RegisterByEmailAndPassword, user }}>
            {children}
        </AuthContext.Provider>
    )

}

export const UserAuth = ()=> {
    return useContext(AuthContext);
}