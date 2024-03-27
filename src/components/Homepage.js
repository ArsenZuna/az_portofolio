import React, {useRef} from 'react';
import '../assets/styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import Arsen from '../assets/Arsen.jpeg';
import Palestra from '../assets/Palestra.PNG';
import RealEstate from '../assets/RealEstate.png';
import Parking from '../assets/Parking.png';
import MovieBuffer from '../assets/MovieBuffer.png';
import Parid from '../assets/2.PNG';
import ContactForm from "./ContactForm";
import CV from '../assets/Arsen Zuna - CV.pdf';

const Homepage = () => {
	const myExpRef = useRef(null);
	const myContact = useRef(null);
	const myProjects = useRef(null);

	const scrollToExp = () => {
		myExpRef.current.scrollIntoView({behavior: 'smooth'});
	};
	const scrollToContact = () => {
		myContact.current.scrollIntoView({behavior: 'smooth'});
	};
	const scrollToProjects = () => {
		myProjects.current.scrollIntoView({behavior: 'smooth'});
	};

	return (
		<div>
			<div className="d-flex justify-content-between" style={{paddingTop: "3%"}}>
				{/*Hero Section*/}
				<div className="container">
					<div className="container-fluid row flex-lg-row-reverse gap-3 justify-content-center align-items-center">
						<div className="col-10 col-sm-8 col-lg-6">
							<img src={Arsen}
									 className="rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500"
									 height="750" loading="lazy"/>
						</div>
						<div className="container-fluid col-lg-5">
							<h1 className="display-5 fw-bold text-light lh-1 mb-3" style={{fontFamily: "monospace"}}>Arsen Zuna</h1>
							<div className="typewriter lead">Hi! My name is Arsen, 22 years old and I am a Junior Developer in the 3rd year of a Bachelor's degree in Computer Science, seeking to put in work my skills and improve them even more.</div>
							<div className="container-fluid d-grid gap-2 d-md-flex justify-content-center pt-3">
								<button type="button" className="butt btn-lg px-4 me-md-2" onClick={scrollToContact}>Contact Me</button>
								<button type="button" className="butt btn-lg px-4 me-md-2" onClick={scrollToExp}>Experiences
								</button>
								<button type="button" className="butt btn-lg px-4" onClick={scrollToProjects}>Projects</button>
							</div>
						</div>
					</div>
				</div>

			</div>

			{/*I am*/}
			<div className="d-flex justify-content-center" style={{paddingTop: "6%"}}>
				<div className="section2">
					<div className="vis">
						<ul>
							<li>Passionate</li>
							<li>Hard Worker</li>
							<li>Problem Solver</li>
							<li>Critical Thinker</li>
						</ul>
					</div>
				</div>
			</div>

			{/*Experiences*/}
			<div className="container" ref={myExpRef} style={{paddingTop: "7%"}}>
				<div className="row">
					<div className="col-lg-2">
						<div className="lista fw-bold">
							<h2>Skills</h2>
							<ul>
								<li><span>HTML</span></li>
								<li><span>CSS</span></li>
								<li><span>Bootstrap</span></li>
								<li><span>JavaScript</span></li>
								<li><span>TypeScript</span></li>
								<li><span>React</span></li>
								<li><span>Figma</span></li>
								<li><span>WordPress</span></li>
								<li><span>Data Analysis</span></li>
								<li><span>Systems & Networks</span></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3"></div>
					<div className="col-lg-7">
						<h2 className="text-light fw-bold">Work Experiences</h2>
						<div class="accordion-item" id="exp1">
							<a class="accordion-link" href="#exp1">
								<div class="flex">
									<h3>DATA ANALYST at PAYLINK SHA</h3>
									<ul className="pt-lg-1">
										<li>#SQL</li>
										<li>#Oracle</li>
										<li>#dotNET</li>
										<li>#Figma</li>
									</ul>
								</div>
								<FontAwesomeIcon icon={faAngleUp} className="ion-md-arrow-down"/>
								<FontAwesomeIcon icon={faAngleDown} className="ion-md-arrow-forward"/>
							</a>
							<div class="answer">
								<p>My main focus here is to control, maintain, implement and provide data from different servers and for
									different jobs as reports, procedures or cards personalisation. Developed a lot of skills on PL/SQL
									and logical problem solving, also in communication as I took part in multiple meetings and training
									interns to explain complex information.</p>
							</div>
							<hr/>
						</div>
						<div class="accordion-item" id="exp2">
							<a class="accordion-link" href="#exp2">
								<div class="flex">
									<h3>SOFTWARE DEVELOPER at OTP BANK</h3>
									<ul className="pt-lg-1">
										<li>#SQL</li>
										<li>#JavaScript</li>
										<li>#Figma</li>
										<li>#Wordpress</li>
									</ul>
								</div>
								<FontAwesomeIcon icon={faAngleUp} className="ion-md-arrow-down"/>
								<FontAwesomeIcon icon={faAngleDown} className="ion-md-arrow-forward"/>
							</a>
							<div class="answer">
								<p>My main focus here consists mostly in report generation, fixing front-end issues or hardware defects,
									checking datas, creating SQL scripts to perform certain jobs etc. I saw improvements since I
									started working there in communication and scheduling, aswell in some PL/SQL skills.</p>
							</div>
							<hr/>
						</div>
						<div class="accordion-item" id="exp3">
							<a class="accordion-link" href="#exp3">
								<div class="flex">
									<h3>FRONTEND DEVELOPER at NEBULA LTD</h3>
									<ul className="pt-lg-1">
										<li>#CSS</li>
										<li>#JavaScript</li>
										<li>#React</li>
										<li>#Figma</li>
									</ul>
								</div>
								<FontAwesomeIcon icon={faAngleUp} className="ion-md-arrow-down"/>
								<FontAwesomeIcon icon={faAngleDown} className="ion-md-arrow-forward"/>
							</a>
							<div class="answer">
								<p>My main focus was to learn and improve front-end skills with web app development fundamentals as well
									as programming languages and frameworks such as HTML, CSS, JavaScript, ReactJS, Bootstrap, Tailwind
									and many other libraries for creating efficient web applications. Achieved knowledge and skills on
									UI/UX designing by using Figma. Also, working here improved my abilities on how to work properly in a
									team.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*Contact*/}
			<div className="container-fluid justify-content-lg-center" ref={myContact}  style={{paddingTop: "7%"}}>
				<div className="row">
					<div className="col-lg-3"/>
					<div className="col-lg-8">
						<ContactForm/>
					</div>
				</div>
			</div>

			{/*Projects*/}
			<div className="container" ref={myProjects} style={{paddingTop: "10%"}}>
				<h1 className="text-white pb-lg-4">Projects</h1>
				<div className="container-fluid row justify-content-between gap-4">
					<div className="card">
						<img src={RealEstate}/>
						<div className="card__content">
							<p className="card__title">Real Estate</p>
							<p className="card__description">A simple web application that focuses on checking or listing places to
								stay the night nor just to visit.
								It focuses showing important information for the residences and their location on the map as well.</p>
						</div>
					</div>
					<div className="card">
						<img src={Parking}/>
						<div className="card__content">
							<p className="card__title">Parking Reservation</p>
							<p className="card__description">Parking your vehicle is very problematic when it comes to travel
								abroad. This web app supports the possibility to find and reserve a parking space for the amount of
								hours and days that the user wants and supports online payment.</p>
						</div>
					</div>
					<div className="card">
						<img src={Parid}/>
						<div className="card__content">
							<p className="card__title">Fiscalization System</p>
							<p className="card__description">A user-friendly system that contains the necessary modules for the
								fiscalization process in different businesses that acquire it.</p>
						</div>
					</div>
					<div className="col-lg-1"></div>
					<div className="card">
						<img src={Palestra}/>
						<div className="card__content">
							<p className="card__title">Gym Site</p>
							<p className="card__description">A landing-page for a gym that it is also supported with an admin dashboard to manage the business subscriptions for each of its clients.</p>
						</div>
					</div>
					<div className="card">
						<img src={MovieBuffer}/>
						<div className="card__content">
							<p className="card__title">Movie Review</p>
							<p className="card__description">A simple design that contains the most important information when searching or checking for movies, series and more. It shows information for actors and supports the opportunity to create a personal account and review certain movies, create lists etc.</p>
						</div>
					</div>
					<div className="col-lg-1"></div>
				</div>

			</div>

			{/*CV*/}
			<div className="d-flex justify-content-center mb-5" style={{paddingTop: "5%"}}>
				<a href={CV} download="ArsenZunaCV" target='_blank'><button className="cv_button">Curriculum Vitae</button></a>
			</div>
		</div>
	)
}

export default Homepage;