import { getAllPostsWithFrontMatter } from '../data/fetchFiles'
import BlogPosts from '../components/blogPosts'
import styles from "../../styles/Home.module.css";

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter('posts')

  return {
    props: {
      posts,
      title: 'Posts',
      description: 'Posts on software engineering',
    },
  }
}


export default function Blog({ posts, title, description }) {
  return (
    <div className={styles.container}>
      <section className={styles.main}>
        {/* <p>
          {`I'm trying to solidify my learnings and help others at the same time by writing these short blog posts. I
            generally write about problems I come across and how I solved them. I'll occassionally also write about my
            personal experiences of navigating my career as a software engineer.`}
        </p> */}
        {/* <h3></h3> */}
        <BlogPosts posts={posts} />
      </section>
    </div>
  )
}

