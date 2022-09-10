import React from "react";
import styles from "./Icon.module.css";

const Icon = ({ url, icon }) => {
	return (
		<a href={url} className={styles.icon} target="_blank" rel="noreferrer">
			<i className={`fab fa-${icon}`}></i>
		</a>
	);
};

export default Icon;
