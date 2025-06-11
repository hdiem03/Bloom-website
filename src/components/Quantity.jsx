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
    <div className='inline-flex border h-8 lg:h-10'>
        <button onClick={decrease} className='w-8 lg:w-10 lg:text-2xl'>-</button>
        <div className='w-10 lg:w-14 flex items-center justify-center border-x'>{qty}</div>
        <button onClick={increase} className='w-8 lg:w-10 lg:text-2xl'>+</button>
      
    </div>
  )
}

export default Quantity