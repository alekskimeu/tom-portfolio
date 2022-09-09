import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subtitle from "../subtitle/Subtitle";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	const url = project.title.split(" ").join("-").toLowerCase();
	return (
		<div className={styles.project}>
			<div
				className={styles.content}
				data-aos="fade-up"
				data-aos-duration="1800"
			>
				<Subtitle text={project.subtitle} />
				<h1 className={styles.title}>{project.title}</h1>
				<p className={styles.description}>
					{project.description.substr(0, 160)}...
				</p>
				<Link href={`/projects/${url}`}>
					<a className={styles.more}>
						<i className="fas fa-arrow-right-long"></i>Read more
					</a>
				</Link>
			</div>
			<div
				className={styles.imageContainer}
				data-aos="zoom-in"
				data-aos-duration="2400"
			>
				<Image
					src={project.image}
					alt={project.title}
					className={styles.image}
				/>
			</div>
		</div>
	);
};

export default Project;
