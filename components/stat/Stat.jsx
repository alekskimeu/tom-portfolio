import React from "react";
import styles from "./Stat.module.css";

const Stat = ({ stat }) => {
	return (
		<div className={styles.stat}>
			<h1 className={styles.number} data-aos="zoom-in" data-aos-duration="1200">
				{stat.number}
			</h1>
			<h2 className={styles.title} data-aos="fade-up"
				data-aos-duration="1600">{stat.title}</h2>
		</div>
	);
};

export default Stat;
