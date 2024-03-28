import React from "react";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
	return (
		<div className="mx-lg-5 my-4">
			<div className="d-flex justify-content-between">
				<h3 className="text-white" style={{paddingLeft: "25px"}}>AZ Portofolio</h3>
				<div>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arsen-zuna-5a14a218b/"><FontAwesomeIcon className="m-1 text-white" icon={faLinkedin} style={{fontSize: "30px", paddingRight: "25px"}}/></a>
				</div>
			</div>
			<hr className="text-white"/>
		</div>
	)
}

export default Header;