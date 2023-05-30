import React from 'react';
import {Navigate, useLocation} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);
  if (loading) {
    return <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  }
  if (user){
    return children;
  }
  return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>;
};

export default PrivateRoute;