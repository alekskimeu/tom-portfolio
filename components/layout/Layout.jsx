import React from "react";
import Head from 'next/head'
import Header from "../header/Header";
import Footer from "../footer/Footer";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {

	return (		
		<div className={styles.wrapper}>
			<div className={styles.wrap}>
				<Header />
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
