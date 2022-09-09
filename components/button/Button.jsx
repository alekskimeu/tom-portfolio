import React, { useEffect } from "react";
import Link from "next/link";



import styles from "./Button.module.css";

const Button = ({ title, url, dataAos, dataAosDuration, download, target }) => {
	
	return (
		<Link href={`${url}`} >
			<a className={styles.btn} download={download} target={target}>{title}</a>
		</Link>
	);
};

export default Button;
