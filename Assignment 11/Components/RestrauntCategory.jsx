import React from "react";
import "../accordian.css";
import ItemList from "./ItemList";

const RestrauntCategory = ({ title, data, setShowItems, showItems }) => {
    return (
        <div className="accordian">
            {/* Header */}
            <div className="acc__header" onClick={() => setShowItems()}>
                <div>
                    <span className="acc__header__title">{title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
            </div>

            {/* Body */}
            <div className="acc__body">
                {showItems && <ItemList cards={data?.itemCards} />}
            </div>
        </div>
    );
};

export default RestrauntCategory;
