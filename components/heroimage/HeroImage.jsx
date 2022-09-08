import React from "react";
import Image from "next/image";
import hero from "../../public/assets/hero.png";
import figma from "../../public/assets/figma.png";
import xd from "../../public/assets/xd.png";

import styles from "./HeroImage.module.css";

const HeroImage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.figma}>
				<Image src={figma} alt="Figma" />
			</div>
			<Image src={hero} alt="Thomas Mwaka" className={styles.image} />
			<div className={styles.xd}>
				<Image src={xd} alt="Adobe XD" />
			</div>
		</div>
	);
};

export default HeroImage;
