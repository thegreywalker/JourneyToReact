import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="text-bold italic bg-green-500 rounded-lg mt-20 mx-auto p-4 max-w-sm text-center text-white">
        Header Component Here
      </div>
      <div className="space-x-2">
        <span className="max-w-sm ml-[37rem]">Home</span>
        <span>About Us</span>
      </div>
    </React.Fragment>
  );
};

export default Header;
