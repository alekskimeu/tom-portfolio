import React from "react";
import styles from "./Footer.module.css";
import Icon from "../icon/Icon";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<h1 className={styles.tagline}>Based in Kenya, working Worldwide</h1>
				<div className={styles.social}>
					<Icon url="" icon="linkedin" />
					<Icon url="" icon="behance" />
					<Icon url="" icon="twitter" />
				</div>
			</div>
			<div className={styles.copyright}>
				<p>Copyright © 2022 Thomas </p>
			</div>
		</footer>
	);
};

export default Footer;
