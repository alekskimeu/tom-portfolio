import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Contact, Layout } from "../../components";

import { getAllProjectIds, getProjectData } from "../../utils/projects";

import styles from "../../styles/Project.module.css";

const Project = ({ project }) => {
	return (
		<>
			<Head>
				<title>Tom Mwaka | {project.project[0].title}</title>
				<meta name="description" content="UI/UX Designer: (Figma, Adobe XD)" />
				<meta name="keywords" content="Tom Mwaka, UI/UX Design" />
			</Head>
			<Layout>
				<section className={styles.project}>
					<div className={styles.container}>
						<div className={styles.imageContainer}>
							<Image
								src={project.project[0].image}
								alt={project.project[0].title}
								className={styles.image}
							/>
						</div>
						<div className={styles.content}>
							<h1 className={styles.title}>{project.project[0].title}</h1>
							<p className={styles.description}>
								{project.project[0].description}
							</p>
							<a href="" target="_blank" className={styles.btnLaunch}>
								Launch Project<i className="fas fa-arrow-right-long"></i>
							</a>
						</div>
					</div>
				</section>
				<Contact />
			</Layout>
		</>
	);
};

export default Project;

export async function getStaticPaths() {
	const paths = getAllProjectIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const project = getProjectData(params.id);
	return {
		props: {
			project,
		},
	};
}
