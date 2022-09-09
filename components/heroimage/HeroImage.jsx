import React from "react";
import Image from "next/image";

import hero from "../../public/assets/hero.png";
import figma from "../../public/assets/figma.png";
import xd from "../../public/assets/xd.png";

import styles from "./HeroImage.module.css";

const HeroImage = () => {
	return (
		<div
			className={styles.container}
			data-aos="zoom-in"
			data-aos-duration="2200"
		>
			<div
				className={styles.figma}
				data-aos="fade-right"
				data-aos-duration="2400"
			>
				<Image src={figma} alt="Figma" />
			</div>
			<Image
				src={hero}
				alt="Thomas Mwaka"
				className={styles.image}
				data-aos="fade-up"
				data-aos-duration="2400"
			/>
			<div className={styles.xd} data-aos="fade-left" data-aos-duration="2400">
				<Image src={xd} alt="Adobe XD" />
			</div>
		</div>
	);
};

export default HeroImage;
