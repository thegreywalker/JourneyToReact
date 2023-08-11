import React from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/config";
import Shimmer from "./Shimmer";
import RestrauntMenuCard from "./RestrauntMenuCard";
import "../restrauntmenu.css";

const RestrauntMenu = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [menu, setMenu] = React.useState(null);
    const { resId } = useParams();

    React.useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + `restaurantId=${resId}`);
        const res = await data.json();
        setMenu(res.data);
    };
    const restrauntData = menu?.cards[0]?.card?.card?.info;
    const Menu =
        menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
            ?.itemCards;


    if (menu === null) return arr.map((lg) => <Shimmer key={lg} />);

    return (
        <div className="res-menu-container">
            <div className="res-menu-container__mock">
                <div className="res-menu-container__header">
                    <div className="header__left-pane">
                        <h1 className="name">{restrauntData.name}</h1>
                        <div className="cuisines">
                            {restrauntData.cuisines.map((cuisine, idx) => (
                                <p key={idx}>{cuisine}</p>
                            ))}
                        </div>
                        <h2 className="location">{restrauntData.city}</h2>
                    </div>
                    <div className="header__rating">
                        {restrauntData.avgRating}
                    </div>
                </div>
                <div className="border"></div>
                <div className="extraInfo">
                    <h1 className="deliveryTime">
                        {restrauntData.sla.deliveryTime} MINS
                    </h1>
                    <h1 className="cost">{restrauntData.costForTwoMessage}</h1>
                </div>
                <div className="menu-container">
                    {Menu?.map((MenuCard) => (
                        <RestrauntMenuCard
                            key={MenuCard.card.info.id}
                            imageId={MenuCard.card.info.imageId}
                            name={MenuCard.card.info.name}
                            price={MenuCard.card.info.price}
                            description={MenuCard.card.info.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestrauntMenu;
