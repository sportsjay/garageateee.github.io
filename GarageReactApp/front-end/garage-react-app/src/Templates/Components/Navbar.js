import React from "react";
import { Link } from "react-router-dom";
import logo from "../static/garage_logo.png";
import "../static/css/Navbar.css";

function NavigationBar() {
	return (
		// <nav>
		//   <ul>
		//     <li>
		//       <Link to="/home">Home</Link>
		//     </li>
		//     <li>
		//       <Link to="/about-us">About Us</Link>
		//     </li>
		//     <li>
		//       <Link to="/events">Events</Link>
		//     </li>
		//     <li>
		//       <Link to="/workshops">Workshops</Link>
		//     </li>
		//   </ul>
		// </nav>

		<nav class="navbar navbar-expand-lg navbar-dark">
			<img
				class="navbar-brand ml-5"
				src={logo}
				alt="logo"
				width="160px"
			></img>
			<button
				class="navbar-toggler mr-5"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo02"
				aria-controls="navbarTogglerDemo02"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav ml-auto mr-4 mt-md-0">
					<li class="nav-item">
						<Link class="nav-link" to="/home">
							Home
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/about-us">
							About Us
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/events">
							Events
						</Link>
					</li>
					<li class="nav-item">
						<Link class="nav-link" to="/workshops">
							Workshops
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavigationBar;
