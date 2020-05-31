import React from "react";
import "../static/css/Home.css";
import Map from "../Components/Map";
import image from "../static/undraw_coding_6mjf.svg";

function Home() {
	return (
		<div>
			<div class="box-container">
				<div class="container-fluid header">
					<div class="row">
						<div class="col-12 col-sm-6">
							<h1>A Student-led Makerspace in the School of EEE</h1>
							<h4>Where Ideas are turned into start-ups</h4>
						</div>
						<div class="col-12 col-sm-6">
							<img src={image} width="400px" alt="image"></img>{" "}
						</div>
					</div>
				</div>
				<div class="wave-container">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#C5C1DA"
							fill-opacity="0.9"
							d="M0,192L48,208C96,224,192,256,288,234.7C384,213,480,139,576,133.3C672,128,768,192,864,224C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#dddae9"
							fill-opacity="0.8"
							d="M0,160L48,186.7C96,213,192,267,288,288C384,309,480,299,576,266.7C672,235,768,181,864,154.7C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
						<path
							fill="#fff"
							fill-opacity="1"
							d="M0,64L80,90.7C160,117,320,171,480,170.7C640,171,800,117,960,96C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
						></path>
					</svg>
				</div>
			</div>
			<div class="container-fluid">
				<p>hi</p>
			</div>
			<Map />
		</div>
	);
}

export default Home;
