import { nanoid } from 'nanoid'
import React from 'react'
import "../accordian.css"
import { imageUrl } from './utils/config';
import { useDispatch } from 'react-redux';
import { addItem } from './utils/slices/cartSlice';

const ItemList = ({cards}) => {
    const dispatch = useDispatch();
  
    const handleAddItem = (card) => {
        const item = {
            name: card?.card?.info?.name,
            price: card?.card?.info?.price,
            description: card?.card?.info?.description,
            imageId: card?.card?.info?.imageId
        }
        dispatch(addItem(item))
    }


  return (
    <div>{cards.map(card => (
        <div
            key={nanoid()}
            className='acc__itemCard'
        >
            <div className="acc__itemCard__left-pane">
                <div className='acc__itemCard-header'>
                    <span>{card?.card?.info?.name} </span>
                    <span>₹{card?.card?.info?.price/100}</span>
                </div>
                <p className='acc__itemCard__header-desc'>{card?.card?.info?.description}</p>
            </div>
            <div className="acc__itemCard__right-pane">
                <img src={imageUrl + card?.card?.info?.imageId} alt="Image" className='acc__itemCard__right-pane__image' />
                <button 
                    className='acc__itemCard__right-pane__button' 
                    onClick={() => handleAddItem(card)}
                >
                    Add
                </button>
            </div>
        </div>
    ))}</div>
  )
}

export default ItemList