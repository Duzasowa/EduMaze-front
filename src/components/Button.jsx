import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to={"/maze"}>Button</Link>
    </div>
  );
};

export default Button;
