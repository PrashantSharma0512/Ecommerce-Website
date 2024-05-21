import React, { useState,useEffect } from 'react'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { RxDotFilled } from "react-icons/rx";
function SliderBar() {
  const photo = [
    {
      url : 'https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      url : 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      url : 'https://images.pexels.com/photos/1632242/pexels-photo-1632242.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      url : 'https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      url : 'https://images.pexels.com/photos/2363577/pexels-photo-2363577.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      url : 'https://images.pexels.com/photos/1573233/pexels-photo-1573233.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      url :'https://images.pexels.com/photos/4040608/pexels-photo-4040608.jpeg?auto=compress&cs=tinysrgb&w=600'
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
    <div className=' max-md:h-[25vh] max-w-full h-[500px]  relative w-full group  bg-zinc-400 ' style={{transform:`{'translate(0%, -50%)'}`}}>
      <div  style={{backgroundImage:`url(${photo[currentIndex].url})` ,transform:`{'translate(0%, -50%)'}`}} className='w-full h-full bg-center bg-contain bg-no-repeat duration-500 ease-in-out  transform'></div>
      {/* left arrow */}
      <GoChevronLeft  className='max-sm:text-lg text-4xl max-sm:hidden hidden group-hover:block absolute top-1/2 translate-x-0 -translate-y-1/2 left-5 bg-slate-400 rounded-full cursor-pointer' onClick={prevSlide}/>
      {/* right arrow */}
      <GoChevronRight  className='max-sm:text-lg text-4xl max-sm:hidden hidden group-hover:block  absolute top-1/2  translate-x-0 -translate-y-1/2 right-5 bg-slate-400 rounded-full cursor-pointer' onClick={nextSlide}/>
      <div className="flex absolute bottom-2 left-1/2 ">
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
