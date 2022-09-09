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
				<div className={styles.content} data-aos="fade-left"
				data-aos-duration="1800">
					<Subtitle text="My Skills" />
					<h2 className={styles.title}>
						Why Hire Me For Next <br /> Project?
					</h2>
					<p className={styles.description}>
						I am an inventive and focused UI/UX Designer. Ive used my passion
						for solving problems and assisting people and businesses in
						accomplishing their objectives by making users lives better through
						design so far. I firmly believe in taking a collaborative approach
						to each project. I enjoy solving users problems, and I love working
						with a team to achieve a common goal.
					</p>
					<Button title="Download CV" />
				</div>
			</div>
		</section>
	);
};

export default Skills;
