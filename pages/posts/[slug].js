import Link from "next/link"
import { getFiles, getPostBySlug } from "../data/fetchFiles"
import BlogLayout from '../components/blogLayout'
import React from 'react'
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = ({ language, value }) => {
	return (
		<div className="code-block">
			<SyntaxHighlighter language={language} style={vscDarkPlus}>
				{value}
			</SyntaxHighlighter>
		</div>
	)
}

const BlogPost = ({ frontMatter, markdownBody }) => {
	if (!frontMatter) return <></>

	console.log(markdownBody)
	return (
		<BlogLayout frontMatter={frontMatter}>
			<ReactMarkdown
				allowDangerousHtml={false}
				source={markdownBody}
				renderers={{
					link: (props) => <Link {...props} />,
					code: CodeBlock,
				}}
			/>
		</BlogLayout>
	)
}

export async function getStaticProps({ params }) {
	const { frontMatter, markdownBody } = await getPostBySlug('posts', params.slug)

	return {
		props: {
			frontMatter,
			markdownBody,
		},
	}
}


export async function getStaticPaths() {
	const posts = await getFiles('posts')

	const paths = posts.map((filename) => ({
		params: {
			slug: filename.replace(/\.md/, ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export default BlogPost