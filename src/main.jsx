import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderUpper from './component/Header/HeaderUpper'
import './index.css'
import HeaderLower from './component/Header/HeaderLower'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './component/About/About'
import Contact from './component/contact/Contact'
import Home from './component/Home/Home'
import ProductPage from './component/ProductPage/ProductPage'
import Error from './component/error/Error'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <Error/>
    },
    //  {
    //   path: '/gifts',
    //   element: <ProductPage />,
    //   children: [
    //     {
    //       path: '/gifts/hername',
    //       element: <About />,
    //     }
    //   ]
    // }
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>,
)
