import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Main from './layout/Main';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import AllCollege from './pages/College/AllCollege';
import Login from './pages/Authentication/Login';
import AuthProvider from './context/AuthProvider';
import CollegeDetail from './pages/College/CollegeDetail';
import PrivateRoute from './routes/PrivateRoute';
import Admission from './pages/Admission/Admission';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
     {path: '/', element:<Home/>},
      { path: '/college', element: <AllCollege /> },
      { path: '/admission', element: <Admission /> },
      { path: '/details/:id', element: <PrivateRoute><CollegeDetail /></PrivateRoute>, loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`) },


      { path: '/login', element: <Login /> },
   ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster />
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
