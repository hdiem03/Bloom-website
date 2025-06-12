import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const images = [assets.Hero1,assets.Hero2,assets.Hero3]
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const next = () =>{
    if (index === images.length-1) {
      setTransition(false);
      setIndex(0);
      setTimeout(() => setTransition(true),50);
      
    }else{
      setIndex(index+1);
    }

  }
  const prev = () =>{
    if (index === 0) {
      setTransition(false);
      setIndex(images.length-1);
      setTimeout(() => setTransition(true),50);
      
    }else{
      setIndex(index-1);
    }

  }

  useEffect(()=>{
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);

  },[index])

  return (
    <div className='relative overflow-hidden lg:h-[620px]'>
      <div
      className={`flex ${transition ? 'transition-transform duration-700 ease-in-out' : ''}`}
      style={{transform: `translateX(-${index * 100}%)`}}
      >
        {images.map(image =>(
          <img src={image} key={image} alt="" className='' />
        ))}

      </div>
      <button onClick={prev}>
        <ChevronLeftIcon className='absolute w-10 top-1/2 left-2 text-white'/>
      </button>
      <button onClick={next}>
        <ChevronRightIcon className='absolute w-10 top-1/2 right-2 text-white'/>
      </button>
      
    </div>
  )
}

export default Hero


