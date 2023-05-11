import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login.jsx';

import Recipes from './Pages/Recipes';
import AuthProvider from './Providers/AuthProvider';
import Register from './components/Register';
import PrivateRoute from './PrivateRoute';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'register',
        element:<Register></Register>
        
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>
        
      }
     /*  {
        path: 'recipes',
        elements: <RecipeLayout></RecipeLayout>,
        children: [
          {
            path: ':id',
            element: <Recipes></Recipes>,
            loader:()=>fetch(`http://localhost:3000/recipes/${params.id}`)
          }
        ]
      } */

     

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
