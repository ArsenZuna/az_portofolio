import React from 'react';
import '../assets/styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

const ExperiencesSection = () => {
	return (
		<div className="row pt-lg-3">
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
				<div className="accordion-item" id="exp1">
					<a className="accordion-link" href="#exp1">
						<div className="flex">
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
					<div className="answer">
						<p>My main focus here is to control, maintain, implement and provide data from different servers and for
							different jobs as reports, procedures or cards personalisation. Developed a lot of skills on PL/SQL
							and logical problem solving, also in communication as I took part in multiple meetings and training
							interns to explain complex information.</p>
					</div>
					<hr/>
				</div>
				<div className="accordion-item" id="exp2">
					<a className="accordion-link" href="#exp2">
						<div className="flex">
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
					<div className="answer">
						<p>My main focus here consists mostly in report generation, fixing front-end issues or hardware defects,
							checking datas, creating SQL scripts to perform certain jobs etc. I saw improvements since I
							started working there in communication and scheduling, aswell in some PL/SQL skills.</p>
					</div>
					<hr/>
				</div>
				<div className="accordion-item" id="exp3">
					<a className="accordion-link" href="#exp3">
						<div className="flex">
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
					<div className="answer">
						<p>My main focus was to learn and improve front-end skills with web app development fundamentals as well
							as programming languages and frameworks such as HTML, CSS, JavaScript, ReactJS, Bootstrap, Tailwind
							and many other libraries for creating efficient web applications. Achieved knowledge and skills on
							UI/UX designing by using Figma. Also, working here improved my abilities on how to work properly in a
							team.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExperiencesSection;