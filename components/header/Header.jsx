import Link from "next/link";
import React from "react";
import styles from "../../styles/Header.module.css";
import Button from "../button/Button";
import Icon from "../icon/Icon";

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
					<Icon url="behance.com" icon="behance" />
					<Button title="Contact Me" />
				</div>
			</div>
		</header>
	);
};

export default Header;
