import React from "react";
import { Layout, Project } from "../components";

import { projects } from "../data/projects";

import styles from "../styles/Projects.module.css";


const portfolio = () => {
	return (
		<Layout>
			<section className={styles.projects}>
				<div className={styles.circle}></div>
				<div className={styles.donut}></div>
				<div className={styles.container}>
					{projects.map((project) => (
						<Project key={project.index} project={project} />
					))}
				</div>
			</section>
		</Layout>
	);
};

export default portfolio;
