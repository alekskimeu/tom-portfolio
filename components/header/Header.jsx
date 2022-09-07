import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.navbar}>
				<Link href="/">
					<a className={styles.brand}>Thomas</a>
				</Link>
				<nav className={styles.nav}>
					<Link href="/">
						<a className={styles.menu}>Home</a>
					</Link>
					<Link href="/portfolio">
						<a className={styles.menu}>Portfolio</a>
					</Link>
					<Link href="/contact">
						<a className={styles.menu}>Contact</a>
					</Link>
				</nav>
				<div className={styles.contact}>
					<a href="" className={styles.behance}>
						<i className="fab fa-behance"></i>
					</a>
					<Link href="/contact">
						<a className={styles.btnContact}>Contact Me</a>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
