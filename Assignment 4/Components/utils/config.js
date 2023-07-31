const Menu = [
    {
        info: {
            id: "407661",
            name: "Burger King",
            cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            locality: "New Market",
            areaName: "Esplanade",
            costForTwo: "₹350 for two",
            cuisines: ["Burgers", "American"],
            avgRating: 4.2,
        },
    },
    {
        info: {
            id: "39236",
            name: "KFC",
            cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
            locality: "Central",
            areaName: "Park Street Area",
            costForTwo: "₹450 for two",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            avgRating: 4.2,
        },
    },
    {
        info: {
            id: "149283",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            locality: "FCD Park Street Kolkata",
            areaName: "Park Street Area",
            costForTwo: "₹350 for two",
            cuisines: ["Fast Food", "Pizzas"],
            avgRating: 3.9,
        },
    },
    {
        info: {
            id: "8912",
            name: "Subway",
            cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
            locality: "Park Street",
            areaName: "Park Street",
            costForTwo: "₹350 for two",
            cuisines: [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4,
        },
    },
    {
        info: {
            id: "37107",
            name: "Natural Ice Cream",
            cloudinaryImageId: "ow0tfhk3nw7ag7telsy1",
            locality: "Park street",
            areaName: "Taltala",
            costForTwo: "₹150 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.7,
            veg: true,
        },
    },
    {
        info: {
            id: "324202",
            name: "Oven Story Pizza",
            cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
            locality: "DR SURESH CHANDRA BANERJEE ROAD",
            areaName: "Beleghata",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
            avgRating: 4.2,
        },
    },
    {
        info: {
            id: "48895",
            name: "The Belgian Waffle Co.",
            cloudinaryImageId: "fprehokxn3fudt2vg0mt",
            locality: "CIT Road Scheme VI",
            areaName: "Kankurgachi",
            costForTwo: "₹200 for two",
            cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
            avgRating: 4.5,
            veg: true,
        },
    },
    {
        info: {
            id: "418772",
            name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
            cloudinaryImageId: "coaah3prd6xpbwb0blmu",
            locality: "WEST CHOWBHAGA",
            areaName: "Ruby Area",
            costForTwo: "₹300 for two",
            cuisines: ["Ice Cream"],
            avgRating: 4.4,
        },
    },
    {
        info: {
            id: "30490",
            name: "Baskin Robbins - Ice Cream Desserts",
            cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
            locality: "Shakespeare Sarani Road",
            areaName: "Elgin",
            costForTwo: "₹400 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.6,
            veg: true,
        },
    },
    {
        info: {
            id: "324204",
            name: "LunchBox - Meals and Thalis",
            cloudinaryImageId: "lyxepeer3tf8kqmt3xbo",
            locality: "DR SURESH CHANDRA BANERJEE ROAD",
            areaName: "Beleghata",
            costForTwo: "₹200 for two",
            cuisines: [
                "Biryani",
                "North Indian",
                "Punjabi",
                "Healthy Food",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4.3,
        },
    },
];

const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const imageUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export { resturants, imageUrl, API, Menu };