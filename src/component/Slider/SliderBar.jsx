import React, { useState,useEffect } from 'react'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
function SliderBar() {
  const photo = [
    {
      url : 'https://images.unsplash.com/photo-1604574081819-cca83c2b0b6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url : 'https://images.unsplash.com/photo-1621329109234-d7657d2f3846?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url : 'https://images.unsplash.com/photo-1585383234137-2367d3c5302d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url : 'https://images.unsplash.com/photo-1551122087-f99a4ade46ce?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url : 'https://images.unsplash.com/photo-1610037322323-68a0c16eb66d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]

  const [currentIndex,setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const prevSlide = () =>{
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? photo.length-1: currentIndex-1;
    setCurrentIndex(newIndex);

  }
  const nextSlide = () =>{
    const isLast = currentIndex === photo.length-1;
    const newIndex = isLast ? 0: currentIndex+1;
    setCurrentIndex(newIndex);

  }

  const gotoSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
    // setAutoSlide(false);
  } 
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        const isLastIndex = currentIndex === photo.length - 1;
        setCurrentIndex(isLastIndex ? 0 : currentIndex + 1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoSlide, currentIndex, photo.length]);
  return (
    <div className=' max-md:h-[25vh] max-w-full h-[500px]  relative w-full group snap-x'>
      <div  style={{backgroundImage:`url(${photo[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500 ease-in-out  '></div>
      {/* left arrow */}
      <GoChevronLeft  className='max-sm:text-lg text-4xl max-sm:hidden hidden group-hover:block absolute top-1/2 translate-x-0 -translate-y-1/2 left-5 bg-slate-400 rounded-full cursor-pointer' onClick={prevSlide}/>
      {/* right arrow */}
      <GoChevronRight  className='max-sm:text-lg text-4xl max-sm:hidden hidden group-hover:block  absolute top-1/2  translate-x-0 -translate-y-1/2 right-5 bg-slate-400 rounded-full cursor-pointer' onClick={nextSlide}/>
      <div className="flex absolute bottom-2 left-1/2">
        {photo.map((slide,slideIndex) =>(
          <div 
          key={slideIndex}
          onClick={()=>gotoSlide(slideIndex)}
          className="max-sm:text-sm text-3xl text-zinc-400 cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>

    </div>
  )
}

export default SliderBar
