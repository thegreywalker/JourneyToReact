import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
    return (
      <React.Fragment>
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
      </React.Fragment>
    );
};

export default Card;
