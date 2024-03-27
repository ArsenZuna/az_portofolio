import React, {useRef} from 'react';
import '../assets/styles.css';
import Arsen from '../assets/Arsen.jpeg';
import ContactForm from "./ContactForm";
import CV from '../assets/Arsen Zuna - CV.pdf';
import ExperiencesSection from "./ExperiencesSection";
import ProjectSection from "./ProjectSection";

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
							<div className="typewriter lead">Hi! My name is Arsen, 22 years old and I am a Junior Developer in the 3rd
								year of a Bachelor's degree in Computer Science, seeking to put in work my skills and improve them even
								more.
							</div>
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
				<ExperiencesSection/>
			</div>

			{/*Contact*/}
			<div className="container-fluid justify-content-lg-center" ref={myContact} style={{paddingTop: "7%"}}>
				<div className="row">
					<div className="col-lg-3"/>
					<div className="col-lg-6">
						<ContactForm/>
					</div>
				</div>
			</div>

			{/*Projects*/}
			<div className="container" ref={myProjects} style={{paddingTop: "7%"}}>
				<h1 className="text-white pb-lg-4">Projects</h1>
				<ProjectSection/>
			</div>

			{/*CV*/}
			<div className="d-flex justify-content-center mb-5" style={{paddingTop: "5%"}}>
				<a href={CV} download="ArsenZunaCV" rel="noreferrer" target='_blank'>
					<button className="cv_button">Curriculum Vitae</button>
				</a>
			</div>
		</div>
	)
}

export default Homepage;