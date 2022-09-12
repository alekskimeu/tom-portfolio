import React from "react";
import HeroContent from "../herocontent/HeroContent";
import HeroImage from "../heroimage/HeroImage";

import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<HeroContent />
				<HeroImage />
			</div>
		</section>
	);
};

export default Hero;
