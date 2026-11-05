import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 'daily'(일상) 또는 'dev'(개발)
			category: z.enum(['daily', 'dev']),
			tags: z.array(z.string()).default([]),
			// 커버 이미지가 없을 때 카드에 보여줄 이모지
			emoji: z.string().optional(),
			// true면 사이트에 안 보여요 (임시저장)
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog };
