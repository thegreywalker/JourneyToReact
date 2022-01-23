import React from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
    const [showParagraph, setShowParagraph] = React.useState(false);
    const [allowToggle, setAllowToggle] = React.useState(false);

    console.log("APP RUNNING!");
    const toggleParagraphHandler = React.useCallback(() => {
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
            <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
        </div>
    );
}

export default App;
