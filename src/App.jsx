import {Outlet} from 'react-router-dom'
import Header from './component/Header/Header'
import Footter from './component/Footer/Footter'

import LoginPage from './component/LoginPage/LoginPage';
import SignUp from './component/LoginPage/SignUp';
import Carousel from './component/Slider/Carousel';

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
       {/* <LoginPage/> */}
       {/* <SignUp/> */}
        {/* <ProductPage/>  */}
    </>
  )
}

export default App
