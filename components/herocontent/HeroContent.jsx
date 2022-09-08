import React from "react";
import Button from "../button/Button";
import Subtitle from "../subtitle/Subtitle";

import styles from "./HeroContent.module.css";

const HeroContent = () => {
	return (
		<div className={styles.content}>
			<Subtitle text="Intro" />
			<h2 className={styles.title}>
				<span className={styles.greeting}>Hello</span> <br /> I&#39;m Thomas Mwaka
			</h2>
			<p className={styles.description}>
				I am a UI/UX Designer currently based in Kenya. I enjoy solving users
				problems and turning them into user friendly designs
			</p>
			<Button title="Contact Me" />
		</div>
	);
};

export default HeroContent;
