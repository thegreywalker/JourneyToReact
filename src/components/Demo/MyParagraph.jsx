import React from "react";

const MyParagraph = (props) => {
    console.log("MYParagraph RUNNING");
    return <div>{props.children}</div>;
};

export default MyParagraph;
