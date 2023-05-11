import React from 'react';
import {Navigate} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  }
  if (user){
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;