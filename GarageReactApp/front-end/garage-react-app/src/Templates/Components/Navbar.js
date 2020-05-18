import React from 'react';
import { Link } from "react-router-dom";


function NavigationBar() {
  return (

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/workshops">Workshops</Link>
            </li>
          </ul>
        </nav>

  );
}

export default NavigationBar;