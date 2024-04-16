import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating({noOfStars}) {

    const [rating,setRating] = useState(0);

    const [hover,setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
        console.log(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
        console.log(getCurrentIndex);
    }

    function handleMouseLeave(){
        setHover(rating)
        console.log(getCurrentIndex);
    }

  return (
    <div className='flex flex-row justify-center items-center'>
    {  
        [...Array(noOfStars)].map((_,index)=>{
            
            index += 1;

        return <FaStar
        key={index}
        className={index <= (hover || rating) ? 'text-yellow-500':'text-black'}
        onClick={()=> handleClick(index)}
        onMouseMove={()=> handleMouseEnter(index)}
        onMouseLeave={()=> handleMouseLeave(index)}
        size={40}
        />
      })
    }
    </div>
  )
}

export default StarRating
