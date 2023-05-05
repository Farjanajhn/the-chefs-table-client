import React from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


const auth = getAuth(app); 
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, loggedUser => {
      console.log('logged in user observer',loggedUser)
      setUser(loggedUser);
    })

    return () => {
      return unsubscribe();
    }
   
  },[])
  const authInfo = {
    user,createUser,signIn,logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;