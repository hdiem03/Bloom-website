import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const images = [assets.Hero1,assets.Hero2,assets.Hero3]
const Hero = () => {
    const [index, setIndex] = useState(0);
    const next = () =>{
        if (index === images.length-1) {
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    const prev = () =>{
        if (index === 0) {
            setIndex(images.length-1)
            
        }
        else{
            setIndex(index-1)
        }
    }
    

  return (
    <div className='relative sm:h-[400px] md:h-[600px]'>
        <img src={images[index]} className='w-full h-full object-cover' />
        <button onClick={next}>
            <ChevronLeftIcon className='absolute top-1/2 left-2 w-6 h-6 sm:h-10 sm:w-10 text-white'/>
        </button>
        <button onClick={prev}>
            <ChevronRightIcon className='absolute top-1/2 right-2 w-6 h-6 sm:h-10 sm:w-10 text-white'/>
        </button>
      
    </div>
  )
}

export default Hero
