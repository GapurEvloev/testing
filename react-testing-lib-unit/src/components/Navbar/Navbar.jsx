import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link data-testid={"main-link"} to={'/'}>Main</Link>
        </li>
        <li>
          <Link data-testid={"about-link"} to={'/about'}>About</Link>
        </li>
        <li>
          <Link data-testid={"users-link"} to={'/users'}>Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;