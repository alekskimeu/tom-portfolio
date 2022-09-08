import Image from "next/image";
import React from "react";
import styles from "./Testimony.module.css";

const Testimony = ({ testimony }) => {
	return (
		<div className={styles.testimony}>
			<div className={styles.imageContainer}>
				<Image
					src={testimony.image}
					alt={testimony.name}
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<i className="fas fa-quote-left"></i>
				<h1 className={styles.description}>{testimony.description}</h1>
				<h2 className={styles.name}>{testimony.name}</h2>
				<p className={styles.role}>{testimony.role}</p>
			</div>
		</div>
	);
};

export default Testimony;
