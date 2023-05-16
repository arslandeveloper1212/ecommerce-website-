import React from 'react'
import React from 'react'
import ReactStars from "react-rating-stars-component";
const Rating = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

  return (
    <div>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#166324e6"
  />

    </div>
  )
}

export default Rating
