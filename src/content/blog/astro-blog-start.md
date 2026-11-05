---
title: 'Astro로 개인 블로그 만들기'
description: 'Astro로 블로그를 만들고, 마크다운으로 글을 쓰는 방법을 정리했어요.'
pubDate: '2026-11-04'
category: 'dev'
tags: ['Astro', '블로그', '웹개발']
emoji: '🚀'
---

이 블로그는 [Astro](https://astro.build)로 만들었어요. 마크다운 파일 하나가 글 하나가 되는 구조라서 정말 간단해요.

## 프로젝트 만들기

```bash
npm create astro@latest myblog -- --template blog
cd myblog
npm run dev
```

## 새 글 쓰기

`src/content/blog/` 폴더에 `.md` 파일을 만들고, 맨 위에 이런 정보를 적어주면 끝이에요.

```md
---
title: '글 제목'
description: '한 줄 소개'
pubDate: '2026-11-04'
category: 'dev'   # daily(일상) 또는 dev(개발)
tags: ['태그1', '태그2']
emoji: '✨'
---

여기서부터 본문!
```

## 코드도 예쁘게

```ts
function greet(name: string) {
  return `안녕하세요, ${name}님! 👋`;
}

console.log(greet('방문자'));
```

| 기능 | 지원 |
| --- | --- |
| 다크 모드 | ✅ |
| 카테고리 | ✅ |
| RSS | ✅ |

다음 글에서는 배포하는 방법을 정리해 볼게요!
