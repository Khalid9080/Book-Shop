import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';











const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [    // route gulo define korte hobe, duita jinish lagbe - 1. kon path 2. ki dekhabe
      { 
        path: "/", // kno jagae na jaite caile...mane home page a thakte caile
        element: <Home ></Home>,
      },

      {
        path:'books/:bookId', // :bookId mane hocche dynamic value ba ekta param
        element:<BookDetail></BookDetail>,
        loader: () => fetch('./booksData.json')
        // route a data load korar jonno loader use kori
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },


       
    ],
  },

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
