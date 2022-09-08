import React from "react";
import styles from "./Icon.module.css";

const Icon = ({ url, icon }) => {
	return (
		<a href={url} className={styles.icon}>
			<i className={`fab fa-${icon}`}></i>
		</a>
	);
};

export default Icon;
