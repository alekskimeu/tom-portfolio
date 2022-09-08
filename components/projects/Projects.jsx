import React from "react";
import Project from "../project/Project";
import Button from "../button/Button";

import { projects } from "../../data/projects";

import styles from "./Projects.module.css";

const Projects = () => {
	return (
		<section className={styles.projects}>
			<div className={styles.circle}></div>
			<div className={styles.container}>
				{projects.slice(0, 3).map((project) => (
					<Project key={project.index} project={project} />
				))}
				<Button title="View All" url="portfolio" />
			</div>
		</section>
	);
};

export default Projects;
