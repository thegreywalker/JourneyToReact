import React from 'react'
import { imageUrl } from './utils/config'

const ResturantCard = (props) => {
  return (
    <div className='res-card'>
        <img src={imageUrl+props.cloudinaryImageId} alt="Banner" />
        <div className="heading">
            <p>{props.name}</p>
            <p>{props.avgRating}</p>
        </div>
        <p className='locality'>{props.locality}</p>
        <p className='price'>{props.costForTwo}</p>
    </div>
  )
}

export default ResturantCard