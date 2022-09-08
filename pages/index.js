import Head from 'next/head'
import Image from 'next/image'
import {
	Contact,
	Layout,
	Hero,
	Projects,
	Skills,
	Stats,
	Testimonial,
} from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Skills />
			<Projects />
			<Stats />
			<Testimonial />
			<Contact />
		</Layout>
	);
}
