import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Testimony from "../testimony/Testimony";
import styles from "./Testimonial.module.css";

import { testimonies } from "../../data/testimonies";

const Testimonial = () => {
	return (
		<section className={styles.testimonies}>
			<div className={styles.container}>
				<AliceCarousel	
					autoPlay
					autoPlayStrategy="none"
					autoPlayInterval={5000}
					animationDuration={2000}
					animationType="slide"
					keyboardNavigation={true}
					infinite
					touchTracking={false}
					disableDotsControls
					disableButtonsControls
					items={testimonies.map((testimony) => (
						<Testimony key={testimony.index} testimony={testimony} />
					))}
				/>
			</div>
		</section>
	);
};

export default Testimonial;
