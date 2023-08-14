import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function getFiles(dataType) {
	return fs.readdirSync(path.join(root, 'pages/data', dataType), 'utf-8')
}

export async function getPostBySlug(dataType, slug) {
	const source = fs.readFileSync(path.join(root, 'pages/data', dataType, `${slug}.md`), 'utf8')

	const { data, content } = matter(source)

	return {
		frontMatter: data,
		markdownBody: content,
	}
}

export async function getAllPostsWithFrontMatter(dataType) {
	const files = fs.readdirSync(path.join(root, 'pages/data', dataType))

	// @ts-ignore
	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(path.join(root, 'pages/data', dataType, postSlug), 'utf8')
		const { data } = matter(source)

		return [
			{
				frontMatter: data,
				slug: postSlug.replace('.md', ''),
			},
			...allPosts,
		]
	}, [])
}