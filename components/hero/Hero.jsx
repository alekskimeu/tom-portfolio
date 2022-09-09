import React from "react";

import styles from "../../styles/Hero.module.css";
import HeroContent from "../herocontent/HeroContent";
import HeroImage from "../heroimage/HeroImage";

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
