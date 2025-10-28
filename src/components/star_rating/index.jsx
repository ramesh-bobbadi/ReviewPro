import { FaStar } from "react-icons/fa"
import { useState } from "react"
export default function StarRating(props){
    const [hover,setHover]=useState(0)
    const [rating,setRating]=useState(0)

    function handleclick(getCurrentIndex){
     setRating(getCurrentIndex)
    }

    function handleMouseLeave(getCurrentIndex){
      setHover(rating)
    }

    function handleMouseMove(getCurrentIndex){
         setHover(getCurrentIndex)
    }

    return(
      <div className="starrating">
         <div className="starrating_child">
         {[...Array(props.noOfStars)].map((_,index)=>{
            index+=1
            return(
               <div className="star">
                <FaStar
                key={index}
                size={40}
                className={index <=(hover || rating) ? 'isactive' : 'notactive'}
                onClick={()=>handleclick(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                onMouseMove={()=>handleMouseMove(index)}

                />
                </div>
            )
         })}
         </div>
      </div>
)}