import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mains from './Mains.jsx';
import Home from './components/Home/Home.jsx';
import LogIn from './components/login/LogIn.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains></Mains>,
    children: [
     {
      path: '/',
      element: <Home></Home>
     },
     {
      path: '/login',
      element: <LogIn></LogIn>
     }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
