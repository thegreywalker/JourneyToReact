import React from "react";
import ResturantCard from "./ResturantCard";

const Body = ({res}) => {

    return (
        <div className="body-container">
            <div className="body">
                {res?.map((res) => (
                    <ResturantCard
                        key={res.info?.id}
                        name={res.info?.name}
                        cloudinaryImageId={res.info?.cloudinaryImageId}
                        locality={res.info?.locality}
                        costForTwo={res.info?.costForTwo}
                        avgRating={res.info?.avgRating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
