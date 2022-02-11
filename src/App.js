import React from "react";
import Navbar from "./Components/Navbar";

const data = [
  { Name: "Apurba Ghosh", Class: "XII" },
  { Name: "Arunodaya Biswas", Class: "XII" },
  { Name: "Himangshu De", Class: "XII" },
];

const classes =
  "hover:bg-green-400 hover:text-black  sm:bg-red-400 m-20 bg-blue-400 rounded-lg p-3 text-center text-white font-bold italic text-2xl w-72";

function App() {
  const [details, setDetails] = React.useState(data);
  return (
    <div className="App">
      <Navbar />
      {details.map((detail) => (
        <div className="space-x-3">
          <p className={classes} key={Math.random()}>
            {detail.Name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
