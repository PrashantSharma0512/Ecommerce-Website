import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './component/About/About'
import Contact from './component/contact/Contact'
import Home from './component/Home/Home'
import ProductPage from './component/ProductPage/ProductPage'
import Error from './component/error/Error'
import LoginPage from './component/LoginPage/LoginPage'
import SignUp from './component/LoginPage/SignUp'

import DetailedPage from './component/ProductPage/DetailedPage'
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
      path: '/gift',
      element: <ProductPage />,
    },
    {
      path: '*',
      element: <Error />
    },
    {
      path: '/gifts/for-her',
      element: <ProductPage />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/login',
      element: <LoginPage/>,
    },
    {
      path: '/detailedProduct',
      element: <DetailedPage/>,
    }
  ]

}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>,
)
