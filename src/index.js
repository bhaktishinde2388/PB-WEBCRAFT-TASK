import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import Sakshi from './views/sakshi';
import Bhakti from './views/bhakti.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:"/",
    element:<Sakshi/>
  },  {
    path:"/bhakti",
    element:<Bhakti/>
  }
])
root.render(
  <RouterProvider router={router}/>
);
