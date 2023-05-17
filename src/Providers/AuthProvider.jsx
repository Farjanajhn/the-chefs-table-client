import React from 'react';
import { createContext } from 'react';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, updateProfile
} from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


const auth = getAuth(app); 

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (name,photo) => {
    return updateProfile(auth,name,photo)
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
    return signInWithPopup(auth, googleProvider);
  }
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  }
  const authInfo = {
    user, createUser, signIn, logOut, loading,
    signWithGoogle, signInWithGithub,updateUser

  }
  return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;