import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import Sakshi from './views/sakshi';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Sakshi/>
  }
])
root.render(
  <RouterProvider router={router}/>
);
