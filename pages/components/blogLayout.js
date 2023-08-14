import React from 'react'
import styles from "../../styles/Home.module.css";
import Image from 'next/image';
import { convertDateToAbbrev } from '../../utils/conversions';

export default function BlogLayout({ frontMatter, children }) {
	if (!frontMatter) return <></>
	const { title, publishedDate, description, image, tags, readTime } = frontMatter;

	return (
		<div className={styles.main} style={{ position: "relative" }}>

			{/* <div style={{ position: 'absolute', top: '10px', left: '50px', color: 'red', borderRadius: '4px' }}>
				{tags[0]} {/* Assuming `tags` is an array and you want to display the first one 
	</div> */}

			<h1 style={{ marginBottom: '10px' }}>{title}</h1>

			{/* Published Date and Reading Time */}
			<div className={styles.code} style={{ fontSize: '14px', color: '#666', marginBottom: '20px', marginTop: "10px" }}>
				{convertDateToAbbrev(publishedDate)} | {readTime} min read
			</div>

			{/* Image */}
			{/* {image && <Image src={image} width={400} height={400} />} */}

			{/* Blog Content */}
			<div>
				{children}
			</div>
		</div>
	)
}
