import React, { useEffect } from "react";
import Button from "../button/Button";

import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<section className={styles.contact}>
			<div className={styles.container}>
				<h1
					className={styles.title}
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					Lets Work Together
				</h1>
				<p
					className={styles.description}
					data-aos="fade-up"
					data-aos-duration="2200"
				>
					I am currently available for projects. Please feel free to reach out
					to me about your project!
				</p>
				<Button
					title="Contact Me"
					url="contact"
					dataAos="fade-up"
					dataAosDuration="2400"
				/>
			</div>
		</section>
	);
};

export default Contact;
