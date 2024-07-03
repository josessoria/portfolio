import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar w-full flex fixed absloute justify-between	 ">
      <div className="logo">
        <h1>José soria</h1>
      </div>
      <div className="menuder">
        <span>
          <BiMenuAltRight />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
