import React from 'react'
import Menu from './Menu'
import cart from '../assets/cart.svg'
import net from '../assets/netflix.svg'
function SlideMenu() {
  const imgArray = [
    'https://images.pexels.com/photos/1632242/pexels-photo-1632242.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2363577/pexels-photo-2363577.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1573233/pexels-photo-1573233.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4040608/pexels-photo-4040608.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7445038/pexels-photo-7445038.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];
  const desc = [
    'Timeless Elegance',
    'Luxury Redefined',
    'Effortless Sophistication',
    'Chic Minimalism',
    'Bold Statement Pieces',
    'Handcrafted Treasures',
  ]
  return (
    
    <div className='overflow-x-scroll w-full mt-16'>
      <div className='w-full text-center mb-10'>
        <h1 className='font-bold text-4xl text-blue-900 '>Trending </h1>
      </div>
      <div className='flex justify-center items-center gap-7 flex-wrap'>
        <Menu name="GEODE11" descp={desc[0]} img={imgArray[0]}/>
        <Menu name="GEODE12" descp={desc[1]} img={imgArray[1]}/>
        <Menu name="GEODE13" descp={desc[2]} img={imgArray[2]}/>
        <Menu name="GEODE14" descp={desc[3]} img={imgArray[3]}/>
        <Menu name="GEODE15" descp={desc[4]} img={imgArray[4]}/>
        <Menu name="GEODE15" descp={desc[5]} img={imgArray[5]}/>
        <Menu name="GEODE13" descp={desc[3]} img={imgArray[2]}/>
        <Menu name="GEODE14" descp={desc[0]} img={imgArray[0]}/>
        <Menu name="GEODE15" descp={desc[2]} img={imgArray[1]}/>
        <Menu name="GEODE15" descp={desc[1]} img={imgArray[2]}/>
      </div >
      
    </div>
  )
}

export default SlideMenu
