import React from "react";

import Button from "../button/Button";
import Subtitle from "../subtitle/Subtitle";

import styles from "./HeroContent.module.css";

const HeroContent = () => {
	return (
		<div className={styles.content}>
			<Subtitle text="Intro" dataAos="fade-right" dataAosDuration="1700" />
			<h2
				className={styles.title}
				data-aos="fade-down"
				data-aos-duration="1600"
			>
				<span className={styles.greeting}>Hello</span> <br /> I&#39;m Thomas
				Mwaka
			</h2>
			<p
				className={styles.description}
				data-aos="fade-down"
				data-aos-duration="1600"
			>
				I am a UX Designer based in Nairobi, Kenya. I approach design with a focus on people, establishing empathy 
for both the people who make and the people who use the products I help bring to life. 


			</p>
			<Button
				title="Contact Me"
				url="/contact"
				dataAos="fade-up"
				dataAosDuration="2000"
			/>
		</div>
	);
};

export default HeroContent;
