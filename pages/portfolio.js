import React from "react";
import Head from "next/head";
import { Layout, Project } from "../components";

import { projects } from "../data/projects";

import styles from "../styles/Projects.module.css";


const portfolio = () => {
	return (
		<>
			<Head>
				<title>Tom Mwaka | Portfolio</title>
				<meta name="description" content="UI/UX Design Projects" />
				<meta name="keywords" content="Tom Mwaka, UI/UX Design, Projects" />
			</Head>
			<Layout>
				<section className={styles.projects}>
					<div
						className={styles.circle}
						data-aos="fade-right"
						data-aos-duration="2400"
					></div>
					<div
						className={styles.donut}
						data-aos="fade-left"
						data-aos-duration="2400"
					></div>
					<div className={styles.container}>
						{projects.map((project) => (
							<Project key={project.index} project={project} />
						))}
					</div>
				</section>
			</Layout>
		</>
	);
};

export default portfolio;
