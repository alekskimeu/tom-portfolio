import React from "react";
import styles from "./Stat.module.css";

const Stat = ({ stat }) => {
	return (
		<div className={styles.stat}>
			<h1 className={styles.number}>{stat.number}</h1>
			<h2 className={styles.title}>{stat.title}</h2>
		</div>
	);
};

export default Stat;
