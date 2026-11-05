import { getCollection, type CollectionEntry } from 'astro:content';
import type { Category } from '../consts';

export async function getPosts(category?: Category) {
	const posts = await getCollection(
		'blog',
		(p) => !p.data.draft && (!category || p.data.category === category),
	);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingTime(post: CollectionEntry<'blog'>) {
	const chars = (post.body ?? '').replace(/\s+/g, '').length;
	return Math.max(1, Math.round(chars / 500));
}
