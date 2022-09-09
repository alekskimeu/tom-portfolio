import React, { useEffect } from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Button.module.css";

const Button = ({ title, url, dataAos, dataAosDuration }) => {
	useEffect(() => {
		AOS.init();
	});
	return (
		<Link href={`/${url}`}>
			<a className={styles.btn}>{title}</a>
		</Link>
	);
};

export default Button;
