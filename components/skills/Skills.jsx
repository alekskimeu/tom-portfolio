import React from "react";
import Button from "../button/Button";
import Skill from "../skill/Skill";
import styles from "./Skills.module.css";

import { skills } from "../../data/skills";
import Subtitle from "../subtitle/Subtitle";

const Skills = () => {
	return (
		<section className={styles.skills}>
			<div className={styles.container}>
				<div className={styles.skillsContainer}>
					{skills.map((skill) => (
						<Skill key={skill.index} skill={skill} />
					))}
				</div>
				<div
					className={styles.content}
					data-aos="fade-left"
					data-aos-duration="1800"
				>
					<Subtitle text="My Skills" />
					<h2 className={styles.title}>
						Why Hire Me For Your Next <br /> Project?
					</h2>
					<p className={styles.description}>
						I approach every product or service with a design thinking mindset
						with the aim of boosting business revenue growth rate, increasing
						customer obsession, reducing customer acquisition cost as well as
						giving customers the best user experience when interacting with the
						product.
						<br />
						<br />
						My design practice combines design thinking, user research, and
						experience strategy, all with a relentless focus on the user.
					</p>
					<Button
						target="_blank"
						url="https://drive.google.com/file/d/1bxn9nq2KCdUCC2Ssyo7CSCb2DSGZSaXg/view?usp=drivesdk"
						title="Download CV"
						download
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
