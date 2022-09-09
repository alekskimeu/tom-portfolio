import React from "react";
import Head from "next/head";
import { Layout, SocialIcon, Subtitle } from "../components";

import styles from "../styles/Contact.module.css";
import Button from "../components/button/Button";

const contact = () => {
	return (
		<>
			<Head>
				<title>Tom Mwaka | Contact</title>
				<meta
					name="description"
					content="Software Developer: (Figma, Adobe XD)"
				/>
				<meta name="keywords" content="Tom Mwaka, UI/UX Design" />
			</Head>
			<Layout title="Contact">
				<section className={styles.contact}>
					<div className={styles.container}>
						<div className={styles.content}>
							<Subtitle
								text="Contact Me"
								dataAos="fade-right"
								dataAosDuration="1800"
							/>
							<h1
								className={styles.title}
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Get In Touch With Me
							</h1>
							<p
								className={styles.description}
								data-aos="fade-up"
								data-aos-duration="2200"
							>
								I am currently available for projects. Please feel free to use
								this form or email me about your project!
							</p>

							<div
								className={styles.icons}
								data-aos="fade-up"
								data-aos-duration="2400"
							>
								<SocialIcon
									title="Phone"
									icon="fa-phone"
									content="+254721814665"
								/>
								<SocialIcon
									title="Email"
									icon="fa-envelope"
									content="tom@gmail.com"
								/>
							</div>
						</div>
						<div
							className={styles.form}
							data-aos="zoom-in"
							data-aos-duration="2400"
						>
							<form>
								<div className={styles.group}>
									<input type="text" placeholder="Full Name" />
									<input type="email" placeholder="Email" />
								</div>
								<textarea placeholder="Message" rows="10" />
								<Button title="Send" />
							</form>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default contact;
