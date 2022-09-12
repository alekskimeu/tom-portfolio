import React from "react";
import styles from "./Footer.module.css";
import Icon from "../icon/Icon";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<h1 className={styles.tagline}>Based in Kenya, working Worldwide</h1>
				<div className={styles.social}>
					<Icon url="https://www.behance.net/thomasmwaka" icon="behance" />
					<Icon
						url="https://www.linkedin.com/in/thomasmwaka/"
						icon="linkedin"
					/>
					<Icon url="https://twitter.com/_thomasmwaka" icon="twitter" />
				</div>
			</div>
			<div className={styles.copyright}>
				<p>Copyright © {new Date().getFullYear()} Thomas </p>
				<p className={styles.signature}>
					<a href="https://alex-kimeu.com" target="_blank" rel="noreferrer">
						Alex
					</a>{" "}
					made it <i className="fas fa-heart"></i>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
