import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<i className="fas fa-arrow-up"></i>
			<Footer />
		</>
	);
};

export default Layout;
