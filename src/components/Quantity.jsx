import React from 'react'

const Quantity = ({qty, setQty}) => {
    const decrease = () => {
        if (qty >1){
            setQty(qty -1);
        }
    }
    const increase = () => {
        setQty(qty+1);
    }
  return (
    <div className='inline-flex border h-8 md:h-10'>
        <button onClick={decrease} className='w-8 md:w-10 md:text-2xl'>-</button>
        <div className='w-10 md:w-14 flex items-center justify-center border-x select-none'>{qty}</div>
        <button onClick={increase} className='w-8 md:w-10 md:text-2xl'>+</button>
      
    </div>
  )
}

export default Quantity