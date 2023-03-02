import React from "react";
import { HashLink } from "react-router-hash-link";

const Button = () => {
  return (
    <>
      <HashLink to="/#works" className="button">
        <p className="text03">WORKS</p>
      </HashLink>
    </>
  );
};

export default Button;
