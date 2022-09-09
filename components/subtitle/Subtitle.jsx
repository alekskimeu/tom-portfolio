import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Subtitle.module.css";

const Subtitle = ({ text, dataAos, dataAosDuration }) => {
	useEffect(() => {
		AOS.init();
	});
	return (
		<h1
			className={styles.subtitle}
			data-aos={dataAos}
			data-aos-duration={dataAosDuration}
		>
			{text}
		</h1>
	);
};

export default Subtitle;
