import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import site from '@/site.config'

export const GET: APIRoute = async (context) => {
	const posts = await getCollection(
		'posts',
		(post) => post.data.published && !post.data.unlisted
	)
	return rss({
		title: site.title,
		description: site.description,
		site: context.site ?? 'http://localhost:4321/',
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.id}/`
		}))
	})
}
