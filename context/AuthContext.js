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
  import { auth, db } from "@/firebase";
  import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=> {

    const [user, setUser] = useState({});

    
    function RegisterByEmailAndPassword(email, password) {
      createUserWithEmailAndPassword(auth, email, password);

      setDoc(doc(db, 'users', email),{
        savedShows: []
    })
    
  }

  function LoginByEmailAndPassword(email, password){
      return signInWithEmailAndPassword(auth, email, password)
  }

    const LoginByGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
      //   setDoc(doc(db, 'users', email),{
      //     saveShows: []
      // })
    
    }


    const logOut = () => {
        signOut(auth)
    }



    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
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