import React from 'react';
import { createContext } from 'react';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider
} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


const auth = getAuth(app); 

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    })

    return () => {
      return unsubscribe();
    }
   
  }, [])
  

  const signWithGoogle = () => {
    return signInWithPopup(auth, GoogleAuthProvider);
  }
  const signInWithGithub = () => {
    return signInWithPopup(auth, GithubAuthProvider);
  }
  const authInfo = {
    user, createUser, signIn, logOut, loading,
    signWithGoogle,signInWithGithub
  }
  return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;