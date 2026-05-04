# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

정제희(Jay)의 한영 MC & 통역사 개인 포트폴리오 싱글 페이지 웹사이트.
빌드 도구 없이 브라우저에서 직접 열 수 있는 순수 HTML + CSS + JavaScript 구성.

---

## 언어 및 커뮤니케이션 규칙

- **응답 언어**: 한국어
- **코드 주석**: 한국어
- **커밋 메시지**: 한국어
- **문서화**: 한국어
- **변수명·함수명**: 영어 (코드 표준 준수)

---

## 실행 방법

빌드 스텝 없음. 아래 두 가지 방법으로 바로 확인한다.

```powershell
# 방법 1: 기본 브라우저로 직접 열기
start .\index.html

# 방법 2: VS Code Live Server (폰트·경로 이슈 방지에 권장)
# index.html 우클릭 → "Open with Live Server"
```

---

## 기술 스택 및 CDN 로드 순서

`index.html` `<head>` 내 CDN 로드 순서를 반드시 지킨다.

```html
<!-- 1. Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Cormorant+Garamond:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
<!-- 2. Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>
<!-- 3. 커스텀 CSS (Tailwind 이후에 로드해야 덮어쓰기 가능) -->
<link rel="stylesheet" href="style.css">
```

`script.js`는 `</body>` 직전에 로드한다.

---

## 파일 역할 분리 원칙

| 파일 | 담당 |
|------|------|
| `index.html` | 전체 마크업, 섹션 구조, 모달 HTML |
| `style.css` | CSS 변수(`:root`), 커스텀 애니메이션, hover 효과, 모달 스타일 — Tailwind로 표현 불가한 것만 |
| `script.js` | 모든 동적 동작 (햄버거, 모달, 스크롤, IntersectionObserver, 이벤트 데이터) |

Tailwind 유틸리티로 처리 가능한 레이아웃·간격·색상은 `index.html` 클래스로 처리하고, `style.css`에 중복 작성하지 않는다.

---

## 색상 팔레트 (CSS 변수)

`style.css` `:root`에 정의된 변수를 사용한다. 인라인 hex 하드코딩 금지.

```css
--color-bg: #FAF9F7;        /* 주 배경 */
--color-bg-alt: #F2EFE9;    /* 섹션 대비 배경 */
--color-navy: #0F2148;      /* Primary Accent */
--color-gold: #C9A84C;      /* Secondary Accent */
--color-text: #1C1C1E;      /* 기본 텍스트 */
--color-muted: #6B6B6B;     /* 보조 텍스트 */
--color-border: #E8DFC8;    /* 카드 테두리 */
--color-overlay: rgba(15, 33, 72, 0.75); /* 모달 오버레이 */
```

---

## 아키텍처 — JavaScript (script.js)

`script.js`는 단일 파일로 아래 기능을 모두 담는다.

**이벤트 데이터**: `EVENTS` 상수 배열 (파일 최상단). 행사 카드와 모달 데이터의 단일 소스.

```js
const EVENTS = [
  { id: 1, titleKo: '행사명', host: '주최기관', description: '...', roles: ['...'] },
  // ...
];
```

**초기화 흐름**: `DOMContentLoaded` 이벤트 하나에서 모든 기능을 초기화한다.

```
DOMContentLoaded
├── 이벤트 카드 동적 생성 (EVENTS 배열 → DOM)
├── 네비게이션 스크롤 효과 등록
├── 햄버거 메뉴 토글 등록
├── Smooth Scroll 앵커 링크 등록
├── IntersectionObserver (fade-in + scroll spy) 등록
├── 모달 열기/닫기 이벤트 등록 (Escape, 오버레이, × 버튼)
└── Back-to-Top 버튼 등록
```

**모달 패턴**: 단일 전역 모달 DOM 재사용. 카드 클릭 시 `EVENTS[id]` 데이터로 내부를 채운 뒤 표시.

---

## 반응형 브레이크포인트

Tailwind 기본 브레이크포인트를 사용한다.

| 구간 | Tailwind 접두사 | 주요 변화 |
|------|----------------|----------|
| 모바일 (기본) | (없음) | 단일 컬럼, 햄버거 메뉴 표시 |
| 태블릿 | `md:` (768px~) | 2컬럼, 가로 네비 표시 |
| 데스크탑 | `lg:` (1024px~) | 3컬럼 서비스 그리드 |

---

## 외부 링크 규칙

Contact 섹션 및 Footer의 모든 외부 링크에 반드시 아래 속성을 추가한다.

```html
target="_blank" rel="noopener noreferrer"
```

---

## 배포

빌드 스텝 없으므로 폴더 전체를 그대로 배포한다.

- **GitHub Pages**: 저장소 루트의 `index.html` 자동 인식
- **Netlify**: 폴더 드래그앤드롭으로 즉시 배포
