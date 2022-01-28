import React from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;
