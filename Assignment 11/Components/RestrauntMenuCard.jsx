import React from "react";
import { imageUrl } from "./utils/config";

const RestrauntMenuCard = (props) => {
    return (
        <div className="res-menu">
            <div className="res-menu__left-pane">
                <h1 className="name">{props.name}</h1>
                <h2 className="price">{props.price / 100}</h2>
                <h2 className="description">{props.description}</h2>
            </div>
            <div className="res-menu__image">
                <img src={imageUrl + props.imageId} alt="Image" />
                <div className="button">
                    <h1>ADD</h1>
                </div>
            </div>
        </div>
    );
};

export default RestrauntMenuCard;
