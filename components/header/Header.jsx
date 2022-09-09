import React, {useState} from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import Button from "../button/Button";
import Icon from "../icon/Icon";

const Header = () => {

	const [show, setShow] = useState(true)
	
	const toggleMobileMenu = () => {
		setShow(!show);
	}

	return (
		<header className={styles.header}>
			<div className={styles.navbar}>
				<Link href="/">
					<a className={styles.brand}>Thomas</a>
				</Link>
				<nav className={show ? styles.nav : styles.show}>
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
					<div className={styles.mobileIcon}>
						{!show ?
						<i className="fas fa-close fa-2x" onClick={toggleMobileMenu}></i>
						:
						<i className="fas fa-bars fa-2x" onClick={toggleMobileMenu}></i>	
					}
					</div>
				<div className={styles.contact}>
					<Icon url="https://behance.com" icon="behance" className={styles.contactIcon} />
					<Button title="Contact Me" url="/contact" className={styles.contactIcon} />
				</div>
			</div>
		</header>
	);
};

export default Header;
