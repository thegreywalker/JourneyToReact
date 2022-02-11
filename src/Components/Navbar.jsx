import Recat from "react";

const Navbar = (props) => {
  return (
    <div className="flex bg-white shadow-lg m-3 rounded-lg">
      <p className="px-5 pb-2 font-semibold text-xl hover:text-green-600">
        Navbar Here
      </p>
      <div className="flex space-x-8 ml-[22rem] ">
        <p className=" border-green-400 hover:border-b-4 px-2  hover:font-bold hover:text-green-400">Home</p>
        <p className="border-green-400 hover:border-b-4 px-2 hover:font-bold hover:text-green-400">About</p>
        <p className=" border-green-400 hover:border-b-4 px-2 hover:font-bold hover:text-green-400">Contact us</p>
      </div>
    </div>
  );
};

export default Navbar;
