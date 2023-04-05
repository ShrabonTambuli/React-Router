import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import Recharts from './components/Recharts/Recharts';
import About from './components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foods",
        element: <Foods />,
        loader: ()=> fetch('../public/pizza.json')
      },
      {
        path: "/recharts",
        element: <Recharts />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
