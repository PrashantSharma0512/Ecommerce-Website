import { useState } from 'react'
import { BrowserRouter,Outlet } from 'react-router-dom'
import Header from './component/Header/Header'
import Contact from './component/contact/Contact'
import SliderBar from './component/Slider/SliderBar'
import Footter from './component/Footer/Footter'
import SlideMenu from './component/menus/SlideMenu'
import Menu from './component/menus/Menu'
import about from './component/About/About'
import About from './component/About/About'
import ProductPage from './component/ProductPage/ProductPage'
import Error from './component/error/Error'
function App() {
  const images = [
    'https://images.pexels.com/photos/20598967/pexels-photo-20598967/free-photo-of-descarga-electrica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12530868/pexels-photo-12530868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://via.placeholder.com/600x300/0000ff/ffffff',
  ];
  


  return (
    <>
        <Header/>
        <Outlet/> 
        <Footter/>   
    </>
  )
}

export default App
