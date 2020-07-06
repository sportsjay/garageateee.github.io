import React from "react";
import { Link } from "react-router-dom";

import Committees from "../Components/Committees";
import "../static/css/Home.css";

import titleImage from "../static/undraw_Firmware_jw6u.svg";
import visionImage from "../static/undraw_shared_goals_3d12.svg";
import missionImage from "../static/undraw_hang_out_h9ud.svg";

const committee = [
	{
		name: "Francisco Bryant",
		description: "Chief Brand & Marketing",
	},
	{
		name: "Jason Nathaniel",
		description: "Chief Training & Development",
	},
	{
		name: "Noah Winston",
		description: "Application Software Tester",
	},
	{
		name: "Matthew Stanley",
		description: "Chief Publicity and Publication",
	},
];

const Home = () => {
	return (
		<div class="home">
			<div class="title-container">
				<div class="title">
					<div class="row">
						<div class="col-12 col-md-6">
							<h1>A Student-Led Makerspace in the School of EEE</h1>
							<h4>
								"Where creative ideas are made and turned into
								successful start-ups."
							</h4>
						</div>
						<div class="col-12 col-md-6">
							<img src={titleImage} class="home-image"></img>
						</div>
					</div>
				</div>
				<div class="wave-container">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#C5C1DA"
							fill-opacity="0.4"
							d="M0,192L48,208C96,224,192,256,288,234.7C384,213,480,139,576,133.3C672,128,768,192,864,224C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
						<path
							fill="#dddae9"
							fill-opacity="0.7"
							d="M0,160L48,186.7C96,213,192,267,288,288C384,309,480,299,576,266.7C672,235,768,181,864,154.7C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
						></path>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 190">
						<path
							fill="#fff"
							fill-opacity="1"
							d="M0,64L80,90.7C160,117,320,171,480,170.7C640,171,800,117,960,96C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
						></path>
					</svg>
				</div>
			</div>
			<div class="intro-container">
				<h1>Hello there!</h1>
				<h4>
					We are a group of individuals, passionate about turning our
					dreams and imaginations into reality with technology. We believe
					in the value of an innovate spirit and collaboration with
					like-minded individuals. Which is why we aim to inspire others to
					ignite the creative spark within themselves and explore the
					possibilities with technology and design.
				</h4>
				<h4>Find out more about us!</h4>
				<hr></hr>
				<div class="row">
					<div class="col-12 col-lg-8 vision-mission">
						<h1>Vision</h1>
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incidi dunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incidi dunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incidi dunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam.
							</li>
						</ul>
					</div>
					<div class="col-12 col-lg-4">
						<img src={visionImage} class="intro-image"></img>
					</div>
				</div>
				<div class="row mission">
					<div class="col-12 col-lg-4">
						<img src={missionImage} class="intro-image"></img>
					</div>
					<div class="col-12 col-lg-8 vision-mission">
						<h1>Mission</h1>
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incidi dunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incidi dunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incidi dunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#d6d3e5"
					fill-opacity="1"
					d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,181.3C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				></path>
			</svg>
			<div class="committee-container">
				<h1>Our Committee</h1>
				<div class="committee-row">
					{committee.map(
						(committee) => (
							<Committees
								key={committee.name}
								name={committee.name}
								description={committee.description}
							/>
						),
						console.log(committee)
					)}
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 320">
				<path
					fill="#d6d3e5"
					fill-opacity="1"
					d="M0,160L80,181.3C160,203,320,245,480,250.7C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
				></path>
			</svg>
			<div class="cards-container">
				<h1>Our Activities</h1>
				<div class="row mt-4 mt-md-5">
					<div class="col-12 col-md-6 d-flex justify-content-center">
						<div class="card">
							<input type="checkbox" />
							<div class="card-toggle">+</div>
							<div class="card-content">
								<div class="card-imgBox">
									<img src="https://whuaoo.github.io/garage-webpage/img/events.png" />
								</div>
								<hr></hr>
								<div class="card-heading">
									<h2>Events</h2>
								</div>
							</div>
							<div class="card-details">
								<p>
									Garage@EEE organises three main flagship events for
									the School of EEE, namely ENITIO, ESCENDO & IdeasJam.
								</p>
								<p>
									The aim of these events is to foster deeper
									connections within the students in EEE Community,
									whilst exposing our student body with industrial
									ready skillsets
								</p>
								<p>
									Click on the button below to know more about our
									events!
								</p>

								<Link
									class="btn btn-outline-light mt-4"
									to="/events"
									role="button"
								>
									GARAGE@EEE EVENTS
								</Link>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 d-flex justify-content-center">
						<div class="card">
							<input type="checkbox" />
							<div class="card-toggle">+</div>
							<div class="card-content">
								<div class="card-imgBox">
									<img src="https://whuaoo.github.io/garage-webpage/img/workshops.png" />
								</div>
								<hr></hr>
								<div class="card-heading">
									<h2>Workshops</h2>
								</div>
							</div>
							<div class="card-details">
								<p>
									In Garage@EEE, we also hold many different types of
									workshop, and all of these workshops serve to help
									the EEE Community to expose themselves to EEE
									knowledge.
								</p>
								<p>
									Click on the button below to know more about our
									workshops!
								</p>

								<Link
									class="btn btn-outline-light mt-4"
									to="/workshops"
									role="button"
								>
									GARAGE@EEE WORKSHOPS
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#d6d3e5" fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,112C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
			<div class="visit-container">
				<div class="row">
					<div class="col-12 col-lg-6 visit-text">
						<h1>Come and Visit Us</h1>
						<h2>S1-B3C-26</h2>
						<h2>50 Nanyang Avenue</h2>
						<h2>Singapore 639778</h2>
					</div>
					<div class="col-12 col-lg-6">
					<iframe id="map"
                	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.722626105181!2d103.67779751380424!3d1.3428134990206313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0fe5b802bedf%3A0x9ca41efe9a3d4686!2sGarage%40EEE!5e0!3m2!1sen!2sin!4v1576389681412!5m2!1sen!2sin"
            		width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
