import React from "react";
import { API, Menu } from "../Components/utils/config";

const useRestraunt = () => {
    const [response, setResponse] = React.useState(Menu);
    const [filteredRes, setFilteredRes] = React.useState(Menu);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API);
        const res = await data.json();
        setResponse(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const handleDataUpdate = (value) => {
        console.log(value);

        setFilteredRes(response);
        setFilteredRes((res) => {
            const filteredlist = res.filter(rs => {
                const key = rs.info.name;
                return (
                    key.toLowerCase() === value.toLowerCase() || key.toLowerCase().includes(value.toLowerCase())
                );
            });
            console.log(filteredlist);

            return (
                value !== '' ?
                filteredlist : response
            );
        });
    }

    return { filteredRes, handleDataUpdate };
};

export default useRestraunt;
