import React from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ({ res }) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="body-container">
            {res === undefined ? (
                <div className="body-container__shimmer">
                    {array.map((lg) => (
                        <Shimmer key={lg} />
                    ))}
                </div>
            ) : (
                <div className="body">
                    {res?.map((res) => (
                        <Link
                            key={res.info?.id}
                            to={"restraunts/" + res.info?.id}
                        >
                            <ResturantCard
                                name={res.info?.name}
                                cloudinaryImageId={res.info?.cloudinaryImageId}
                                locality={res.info?.locality}
                                costForTwo={res.info?.costForTwo}
                                avgRating={res.info?.avgRating}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;
