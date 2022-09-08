import React from "react";
import styles from "./Subtitle.module.css";

const Subtitle = ({ text }) => {
	return <h1 className={styles.subtitle}>{text}</h1>;
};

export default Subtitle;
