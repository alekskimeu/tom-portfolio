import Link from "next/link";
import React from "react";

import styles from "./Button.module.css";

const Button = ({ title, url }) => {
	return (
		<Link href={`/${url}`}>
			<a className={styles.btn}>{title}</a>
		</Link>
	);
};

export default Button;
