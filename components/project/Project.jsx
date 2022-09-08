import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subtitle from "../subtitle/Subtitle";

import styles from "./Project.module.css";

const Project = ({ project }) => {
	return (
		<div className={styles.project}>
			<div className={styles.content}>
				<Subtitle text={project.subtitle} />
				<h1 className={styles.title}>{project.title}</h1>
				<p className={styles.description}>
					{project.description.substr(0, 160)}...
				</p>
				<Link href="">
					<a className={styles.more}>
						<i className="fas fa-arrow-right-long"></i>Read more
					</a>
				</Link>
			</div>
			<div className={styles.imageContainer}>
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
