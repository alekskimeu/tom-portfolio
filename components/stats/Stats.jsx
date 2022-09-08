import React from "react";
import Stat from "../stat/Stat";

import styles from "./Stats.module.css";

import { stats } from "../../data/stats.js";

const Stats = () => {
	return (
		<section className={styles.stats}>
			<div className={styles.container}>
				{stats.map((stat) => (
					<Stat key={stat.index} stat={stat} />
				))}
				<div className={styles.donut}></div>
				<div className={styles.circle}></div>
			</div>
		</section>
	);
};

export default Stats;
