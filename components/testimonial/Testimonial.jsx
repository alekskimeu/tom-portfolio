import React from "react";

import Testimony from "../testimony/Testimony";
import styles from "./Testimonial.module.css";

import { testimonies } from "../../data/testimonies";

const Testimonial = () => {
	return (
		<section className={styles.testimonies}>
			<div className={styles.container}>
				{testimonies.map((testimony) => (
					<Testimony key={testimony.index} testimony={testimony} />
				))}
			</div>
		</section>
	);
};

export default Testimonial;
