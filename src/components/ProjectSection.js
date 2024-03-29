import React from 'react';
import RealEstate from "../assets/RealEstate.png";
import Parking from "../assets/Parking.png";
import Parid from "../assets/2.PNG";
import Palestra from "../assets/Palestra.PNG";
import MovieBuffer from "../assets/MovieBuffer.png";

const ProjectSection = () => {
	return (
		<div className="container-fluid row justify-content-between justify-content-md-center mx-1 gap-4">
			<div className="card">
				<img src={RealEstate} alt="realestate"/>
				<div className="card__content">
					<p className="card__title">Real Estate</p>
					<p className="card__description">A simple web application that focuses on checking or listing places to
						stay the night nor just to visit.
						It focuses showing important information for the residences and their location on the map as well.</p>
				</div>
			</div>
			<div className="card">
				<img src={Parking} alt="parking"/>
				<div className="card__content">
					<p className="card__title">Parking Reservation</p>
					<p className="card__description">Parking your vehicle is very problematic when it comes to travel
						abroad. This web app supports the possibility to find and reserve a parking space for the amount of
						hours and days that the user wants and supports online payment.</p>
				</div>
			</div>
			<div className="card">
				<img src={Parid} alt="fisc"/>
				<div className="card__content">
					<p className="card__title">Fiscalization System</p>
					<p className="card__description">A user-friendly system that contains the necessary modules for the
						fiscalization process in different businesses that acquire it.</p>
				</div>
			</div>
			<div className="card">
				<img src={Palestra} alt="palestra"/>
				<div className="card__content">
					<p className="card__title">Gym Site</p>
					<p className="card__description">A landing-page for a gym that it is also supported with an admin dashboard to
						manage the business subscriptions for each of its clients.</p>
				</div>
			</div>
			<div className="card">
				<img src={MovieBuffer} alt="mobu"/>
				<div className="card__content">
					<p className="card__title">Movie Review</p>
					<p className="card__description">A simple design that contains the most important information when searching
						or checking for movies, series and more. It shows information for actors and supports the opportunity to
						create a personal account and review certain movies, create lists etc.</p>
				</div>
			</div>
		</div>
	)
}

export default ProjectSection;