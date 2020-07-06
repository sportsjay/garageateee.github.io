import React from "react";
import "../static/css/Committees.css";

const Committee = ({ name, description }) => {
	return (
		<div class="card">
			<div class="card-img">
				<img src="https://media-exp1.licdn.com/dms/image/C5103AQEj-5MkzybCfQ/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=aldtiwnYR3qqxauni2kERegxDGHIl01JwsXzDO2groo"></img>
			</div>
			<div class="card-text">
				<h2>{name}</h2>
				<h4>{description}</h4>
			</div>
			<hr></hr>
			<div class="card-favicon">
				<a
					href="https://www.facebook.com/Jokowi"
					class="fab fa-facebook-f"
				></a>
				<a
					href="https://www.instagram.com/ansellmaputri"
					class="fab fa-instagram"
				></a>
				<a
					href="https://www.linkedin.com/in/francisco-bryant"
					class="fab fa-linkedin"
				></a>
			</div>
		</div>
	);
};

export default Committee;
