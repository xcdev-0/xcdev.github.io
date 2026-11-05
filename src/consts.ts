// 블로그 기본 정보 — 여기만 바꾸면 사이트 전체에 반영돼요!
export const SITE_TITLE = '나의 블로그';
export const SITE_DESCRIPTION = '일상과 개발 이야기를 기록하는 작은 공간';
export const AUTHOR = '블로그 주인';
export const AUTHOR_EMOJI = '🌱';
export const AUTHOR_BIO = '오늘의 일상과 배운 것들을 차곡차곡 기록하고 있어요.';

export const SOCIAL = {
	github: 'https://github.com/xcdev-0',
	email: '',
};

export const CATEGORIES = {
	daily: { label: '일상', emoji: '☕️', description: '소소한 하루의 기록' },
	dev: { label: '개발', emoji: '💻', description: '배우고 만든 것들' },
} as const;

export type Category = keyof typeof CATEGORIES;
