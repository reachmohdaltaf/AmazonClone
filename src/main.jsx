import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Fresh from './components/Home/Fresh.jsx';
import './index.css'
import {createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './components/Signin/Signin.jsx';

const router = createBrowserRouter(
  [
    {path:"/", 
     element: <App/>
    },
    {
      path:"/SignIn",
      element: <Signin/>
    },
    {
      path: "/fresh",
      element:<Fresh/>
    }
  ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router}>
          
        </RouterProvider>

  </StrictMode>,
)
