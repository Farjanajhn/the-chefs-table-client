import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({to}) => {
  return (
    <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "active" :""}
  >
   
  </NavLink>
  );
};

export default ActiveLink;