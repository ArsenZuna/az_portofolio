import React from "react";
import Header from "./Header";

const Layout = ({children}) => {
	return (
		<div>
			<div className="d-flex flex-column justify-content-between min-vh-100">
				<Header/>
				<div className="container-fluid justify-content-center">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;