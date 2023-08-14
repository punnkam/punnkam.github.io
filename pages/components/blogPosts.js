import Link from 'next/link'
import styles from '../../styles/Posts.module.css'
import { convertDateToFull } from '../../utils/conversions'

const BlogPosts = ({ posts }) => {
	return (
		<div className="posts">
			{!posts && <div>No posts!</div>}
			<ul>
				{posts &&
					posts
						.sort(
							(a, b) =>
								new Date(b.frontMatter.publishedDate).getTime() - new Date(a.frontMatter.publishedDate).getTime(),
						)
						.map((post) => {
							return (
								<div key={post.slug} >
									<Link href={{ pathname: `/posts/${post.slug}` }}  >
										<a className={styles.title}>{post.frontMatter.title}</a>
									</Link>{' '}
									<div className={styles.subtitle}>{post.frontMatter.description}</div>
									<div className={styles.date}>{convertDateToFull(post.frontMatter.publishedDate)}</div>
									{/* <p>[ {post.frontMatter.tags.join(', ')} ]</p> */}
								</div>
							)
						})}
			</ul>
		</div>
	)
}

export default BlogPosts