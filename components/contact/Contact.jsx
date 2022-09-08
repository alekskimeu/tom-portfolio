import React from "react";
import Button from "../button/Button";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<section className={styles.contact}>
			<div className={styles.container}>
				<h1 className={styles.title}>Lets Work Together</h1>
				<p className={styles.description}>
					I am currently available for projects. Please feel free to reach out
					to me about your project!
				</p>
				<Button title="Contact Me" url="contact" />
			</div>
		</section>
	);
};

export default Contact;
