# 정제희 한영 MC & 통역사 포트폴리오 웹사이트 — ROADMAP

## 프로젝트 개요

정제희(Jay)님의 한영 MC 및 통역사 역량을 시각적으로 전달하는 싱글 페이지 포트폴리오 웹사이트.
과기부·중기부·기재부·통일부·농림부 장관 주재 국제행사를 포함한 고급 공공·외교 행사 이력을 보유한
전문 통역사/MC로서의 이미지를 부각하는 것이 핵심 목적이다.

**기술 스택**: 순수 HTML5 + CSS3 + Vanilla JavaScript + Tailwind CSS CDN  
**빌드 도구 없음**: npm, webpack 불필요 — 브라우저에서 직접 열거나 Live Server로 확인

---

## 파일 구조

```
Jay_Portfolio/
├── index.html      — 전체 마크업 (섹션, 모달, 네비게이션)
├── style.css       — 커스텀 CSS (애니메이션, CSS 변수, 모달, 폰트 선언)
├── script.js       — JavaScript (햄버거 메뉴, 모달, 스크롤 이벤트, IntersectionObserver)
└── ROADMAP.md      — 이 파일
```

**Tailwind CDN**: `<script src="https://cdn.tailwindcss.com"></script>`  
**Google Fonts**: Noto Sans KR (한글) + Cormorant Garamond (영문 장식체)

---

## 색상 팔레트

| 역할 | 이름 | Hex |
|------|------|-----|
| 주 배경 | Off-White / Ivory | `#FAF9F7` |
| 섹션 대비 배경 | Warm Light Gray | `#F2EFE9` |
| 텍스트 기본 | Deep Charcoal | `#1C1C1E` |
| 텍스트 보조 | Medium Gray | `#6B6B6B` |
| Primary Accent | Deep Navy | `#0F2148` |
| Secondary Accent | Champagne Gold | `#C9A84C` |
| 카드 배경 | Pure White | `#FFFFFF` |
| 카드 테두리 | Light Gold Tint | `#E8DFC8` |
| 오버레이 | Dark Navy Transparent | `rgba(15, 33, 72, 0.75)` |

**타이포그래피**:
- 영문 이름/장식: Cormorant Garamond (italic, 600)
- 한글 본문/제목: Noto Sans KR (300~700)

---

## 섹션별 구현 명세

### 1. Navigation Bar (sticky)

- `position: sticky; top: 0; z-index: 50`
- 좌측: `"JAY"` 이니셜 로고 (Cormorant Garamond, gold)
- 우측: About / Services / Events / Contact 앵커 링크
- 모바일: 햄버거 SVG 버튼 → 드롭다운 메뉴
- 스크롤 80px 이상 시 `scrolled` 클래스 → 반투명 배경 + 그림자
- nav 링크 hover 시 gold underline 슬라이드 인 애니메이션

### 2. Hero / Banner

- `min-h-screen`, Deep Navy 그라디언트 배경 (`#0F2148`)
- 영문 레이블: `"MC · INTERPRETER · BILINGUAL EMCEE"` (gold, 와이드 letter-spacing)
- 한글 이름: `"정 제 희"` (Noto Sans KR 700, white, letter-spacing: 0.3em)
- 영문 이름: `"JAY JEONG"` (Cormorant Garamond italic, gold, 대형)
- 태그라인(한): `"두 언어 사이, 무대를 잇다"`
- 태그라인(영): `"Bridging Language. Elevating Every Stage."`
- CTA 버튼: `"행사 문의하기"` (gold bg, navy text) / `"경력 보기"` (outline, white)
- 하단 스크롤 인디케이터 (SVG 화살표 + bounce 애니메이션)

### 3. About

- 2컬럼 레이아웃 (모바일 스택 → 데스크탑 좌우)
- 좌측: 프로필 이미지 placeholder (CSS 이니셜 아바타 "JAY", gold border)
- 우측:
  - 섹션 레이블: `"ABOUT / 소개"`
  - 자기소개 2-3줄 (전문 통역사/MC 이미지)
  - 학력:
    - 이화여자대학교 학사 졸업
    - 서울외국어대학교 대학원 대학교 졸업
  - 언어 능력 배지: `한국어 (Native)` / `English (Fluent)`

**자기소개 텍스트**:
> 국내외 정부·외교·기업 행사를 무대로 활동하는 한영 MC이자 전문 통역사입니다.
> 과기부, 기재부, 통일부 등 장관급 공식 행사부터 APEC 국제회의까지,
> 두 언어로 무대를 이끌어온 경험을 바탕으로 어떤 자리에서도 흐름을 만들어 냅니다.
> 언어의 경계 없이, 모든 참석자가 하나의 무대를 경험할 수 있도록 최선을 다합니다.

### 4. Services

카드 3열 그리드 (모바일 1열 → 태블릿 2열 → 데스크탑 3열):

| 카드 | 제목 | 부제 | 설명 |
|------|------|------|------|
| 1 | MC 진행 | Korean & English Emcee | 기업행사, 정부·외교 행사, 컨퍼런스, 시상식 |
| 2 | 통역 서비스 | Consecutive & Simultaneous Interpretation | 순차통역, 동시통역, 위스퍼링 통역 |
| 3 | 이중언어 행사 | Bilingual Event Facilitation | 한영 동시 진행, 외국 참석자 맞춤 세션 |

카드 스타일: white 배경, gold 상단 border (`border-t-2`), hover 시 `translateY(-8px)` 상승 효과

### 5. Event History (대표 행사 5선)

`script.js`의 EVENTS 배열로 관리하여 카드 동적 생성.

| # | 행사명 | 주최 |
|---|--------|------|
| 1 | AI 글로벌 컨퍼런스 | 과학기술정보통신부 장관 주재 |
| 2 | APEC SME Ministerial Meeting | 중소벤처기업부 장관 주재 |
| 3 | KSP Dissemination Conference | 부총리 겸 기획재정부 장관 주재 |
| 4 | 2025 국제한반도포럼 | 통일부 장관 주재 |
| 5 | 식량원조 출항기념식 | 농림축산식품부 장관 주재 |

카드 디자인: gold 좌측 vertical accent bar, 주최 navy pill 배지, `"자세히 보기"` 버튼 → 모달 오픈

### 6. Event Detail Modal

EVENTS 배열에서 id로 데이터 조회 → 단일 전역 모달에 채워서 표시.

모달 내용:
- 행사명 (한글)
- 주최 기관 + 장관 주재 배지
- 행사 상세 설명 (2-4문장)
- 역할 및 수행 내용 목록

열기: `body.overflow = 'hidden'` + scaleIn 애니메이션  
닫기: `×` 버튼 / 오버레이 클릭 / Escape 키

### 7. Contact

Navy 배경 (`#0F2148`) 섹션, 연락 카드 3개:

| 카드 | 아이콘 | 링크 형식 | 표시값 |
|------|--------|-----------|--------|
| 이메일 | 메일 SVG | `mailto:ion3ya@gmail.com` | ion3ya@gmail.com |
| 인스타그램 | 인스타 SVG | `https://instagram.com/jay_5range` | @jay_5range |
| 블로그 | 블로그 SVG | `https://m.blog.naver.com/freedora_jay` | 네이버 블로그 |

카드: glass 효과 (`rgba(255,255,255,0.08)` + gold border), hover 시 밝아짐 + gold glow  
모든 외부 링크: `target="_blank" rel="noopener noreferrer"`

### 8. Footer

- 저작권: `© 2025 정제희 · Jay Jeong. All rights reserved.`
- 간단 링크: 이메일 / 인스타 / 블로그
- Back-to-Top 버튼 (스크롤 400px 이상 시 표시)

---

## JavaScript 인터랙션 (script.js)

| # | 기능 | 구현 방법 |
|---|------|----------|
| 1 | Navigation 스크롤 효과 | `scrollY > 80` → `scrolled` 클래스 토글 |
| 2 | 햄버거 메뉴 | 클릭 → mobile-nav open/close, 링크 클릭 시 자동 닫기 |
| 3 | Smooth Scroll | `scrollIntoView({ behavior: 'smooth' })` + nav 높이 오프셋 |
| 4 | Intersection Observer | `.fade-section` 진입 시 `visible` → fade-up 애니메이션 |
| 5 | Scroll Spy | 현재 섹션 → 해당 nav 링크에 `active` 클래스 |
| 6 | Event Modal | EVENTS 배열 → DOM 채우기 → 열기/닫기 (Escape + 오버레이) |
| 7 | Back-to-Top | `scrollY > 400` 시 버튼 표시, 클릭 → 최상단 이동 |

---

## CSS 커스텀 (style.css)

- `:root` CSS 변수 (색상 팔레트 전체)
- Google Fonts `font-family` 선언
- `.fade-section` + `.visible` (opacity 0→1, translateY 24px→0)
- `@keyframes bounce` — Hero 스크롤 인디케이터
- `@keyframes modalIn` — 모달 scaleIn + fadeIn
- `.nav-link::after` — gold underline hover 트랜지션
- `.service-card`, `.event-card`, `.contact-card` hover 효과
- 모달 오버레이 / 컨텐츠 박스 스타일
- 커스텀 스크롤바 (WebKit: gold thumb)

---

## 단계별 빌드 순서

| Phase | 내용 | 예상 시간 |
|-------|------|----------|
| 1 | 파일 생성, HTML 보일러플레이트, CDN 연결, CSS 변수 선언 | 30분 |
| 2 | Navigation (sticky, 햄버거, 스크롤 배경 변경) | 45분 |
| 3 | Hero 섹션 (이름, 태그라인, CTA 버튼, 스크롤 인디케이터) | 60분 |
| 4 | About 섹션 (2컬럼, 바이오, 학력, 언어 배지) | 45분 |
| 5 | Services 섹션 (3열 카드 그리드, SVG 아이콘) | 45분 |
| 6 | Event History + Modal (EVENTS 배열, 동적 카드, 모달 로직) | 90분 |
| 7 | Contact 섹션 + Footer + Back-to-Top 버튼 | 30분 |
| 8 | IntersectionObserver 전체 적용, Scroll Spy | 45분 |
| 9 | 반응형 최종 점검 (375px / 768px / 1280px) + 버그 수정 | 45분 |

**총 예상 시간**: 약 6.5시간

---

## 검증 체크리스트

| 항목 | 테스트 방법 |
|------|------------|
| 네비 smooth scroll | 각 메뉴 클릭 → 해당 섹션 정확 이동 확인 |
| 모바일 햄버거 | 375px에서 열기/닫기, 링크 클릭 후 자동 닫힘 확인 |
| 스크롤 시 네비 배경 | 80px 이상 스크롤 → 배경/그림자 표시 확인 |
| Fade-in 애니메이션 | 새로고침 후 스크롤 내리며 섹션별 등장 확인 |
| 이벤트 카드 모달 | 5개 카드 각각 클릭 → 올바른 데이터 표시 확인 |
| 모달 닫기 3가지 | `×` 버튼 / 오버레이 클릭 / Escape 키 각각 테스트 |
| Contact 링크 | mailto, instagram, blog 새 탭 열림 확인 |
| Back-to-Top | 400px 스크롤 후 버튼 표시, 클릭 → 최상단 이동 확인 |

### 반응형 브레이크포인트

| 구간 | 픽셀 | 주요 레이아웃 |
|------|------|--------------|
| 모바일 | 375px ~ 767px | 단일 컬럼, 햄버거 메뉴 |
| 태블릿 | 768px ~ 1279px | 2컬럼, 가로 네비 |
| 데스크탑 | 1280px~ | 3컬럼 서비스, 풀 레이아웃 |

### 로컬 실행

```powershell
# 방법 1: 브라우저에서 직접 열기
start .\index.html

# 방법 2: VS Code Live Server (권장 — 폰트/경로 이슈 방지)
# index.html 우클릭 → "Open with Live Server"
```

---

## 배포 옵션

- **GitHub Pages**: 저장소 루트에 `index.html` 위치 → 자동 인식, 무료 배포
- **Netlify**: 폴더 드래그앤드롭으로 즉시 배포 (빌드 스텝 없음)
