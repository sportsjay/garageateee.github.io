import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Templates/Pages/Home";
import AboutUs from "./Templates/Pages/AboutUs";
import Events from "./Templates/Pages/Events";
import Workshops from "./Templates/Pages/Workshops";

import Footer from "./Templates/Components/Footer";
import NavigationBar from "./Templates/Components/Navbar";

function App() {
	return (
		<div>
			<Router>
				<NavigationBar />

				<div id="body">
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/about-us" component={AboutUs} />
						<Route path="/events" component={Events} />
						<Route path="/workshops" component={Workshops} />
					</Switch>
				</div>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
