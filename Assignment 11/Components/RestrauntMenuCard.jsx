import React from "react";
import { imageUrl } from "./utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/slices/cartSlice";

const RestrauntMenuCard = (props) => {
    const dispatch = useDispatch()

    const handleAddItem = (items) => {
        dispatch(addItem(items));
    }

    return (
        <div className="res-menu">
            <div className="res-menu__left-pane">
                <h1 className="name">{props.name}</h1>
                <h2 className="price">{props.price / 100}</h2>
                <h2 className="description">{props.description}</h2>
            </div>
            <div className="res-menu__image">
                <img src={imageUrl + props.imageId} alt="Image" />
                <div 
                    className="button"
                    onClick={() => handleAddItem(props)}
                >
                    <h1>ADD</h1>
                </div>
            </div>
        </div>
    );
};


// Higher Order Component (HOC)
export const withoutButtonCard = (RestrauntMenuCard) => {
    return (props) => {
        return (
            <div className="res-menu">
            <div className="res-menu__left-pane">
                <h1 className="name">{props.name}</h1>
                <h2 className="price">{props.price / 100}</h2>
                <h2 className="description">{props.description}</h2>
            </div>
            <div className="res-menu__image">
                <img src={imageUrl + props.imageId} alt="Image" />
            </div>
        </div>
        )
    }
}


export default RestrauntMenuCard;

