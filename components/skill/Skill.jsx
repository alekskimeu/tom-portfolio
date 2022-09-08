import Image from "next/image";
import React from "react";
import styles from "./Skill.module.css";

const Skill = ({ skill }) => {
	return (
		<div className={styles.skill}>
			<Image src={skill.icon} alt={skill.title} width="50" height="50" />
			<h1 className={styles.title}>{skill.title}</h1>
			<p className={styles.description}>{skill.description}</p>
		</div>
	);
};

export default Skill;
