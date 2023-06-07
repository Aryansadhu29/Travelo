import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Chandigarh from './components/Chandigarh';
import Amritsar from './components/Amritsar';
import Jaipur from "./components/Jaipur";
import Kashmir from "./components/Kashmir";
import Kedarnath from "./components/Kedarnath";
import Manali from "./components/Manali";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/Chandigarh",
    element:<Chandigarh/>
  },
  {
    path:"/Amritsar",
    element:<Amritsar/>
  },
  {
    path:"/Jaipur",
    element:<Jaipur/>
  },
  {
    path:"/Kashmir",
    element:<Kashmir/>
  },
  {
    path:"/Kedarnath",
    element:<Kedarnath/>
  },
  {
    path:"/Manali",
    element:<Manali/>
  }

]);

// ReactDOM.render(

//   <React.StrictMode>
    
//     <RouterProvider router={router} />
    
//   </React.StrictMode>,
  
//   document.getElementById('root')
// );

// ReactDOM.createRoot(document.getElementById("root")).render(

//   <React.StrictMode>
    
//     <RouterProvider router={router} />
    
//   </React.StrictMode>,
  
//  // document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
