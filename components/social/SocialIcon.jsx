import React from "react";

import styles from './SocialIcon.module.css'

const SocialIcon = ({ title, content, icon }) => {
	return (
        <div className={styles.socialIcon}>
            <div className={styles.icon}>
                <i className={`fas ${icon}`}></i>
            </div>
			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{content}</p>
			</div>
		</div>
	);
};

export default SocialIcon;
