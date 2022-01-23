import React from 'react';
import MyParagraph from './MyParagraph';


const DemoOutput = React.memo((props) => {
    console.log("DEMOoutput RUNNING");
  return <MyParagraph>{props.show ? 'This is New!' : ''}</MyParagraph>;
});

export default DemoOutput;
