import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <React.Fragment>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Products;
