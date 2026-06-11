/* ============================================================
   행사 데이터 — 단일 소스 (카드 + 모달 공용)
   ============================================================ */
const EVENTS = [
  {
    id: 1,
    thumbnail: 'images/experience/mainevents/1.jpg',
    titleKo: '2026 PEMNA 고위급 총회',
    titleEn: 'PEMNA High-level Plenary Conference',
    host: '기획예산처',
    hostLabel: '기획예산처 장관 주재',
    description:
      '아시아·태평양 지역의 공공재정관리 분야 고위급 관계자들이 모여 재정 운영과 제도 개선 방향을 논의하는 국제회의입니다. 2026년 총회는 공공재정관리의 디지털 전환을 주제로, 각국의 정책 경험과 실무 사례를 공유하는 자리로 구성되었습니다.',
    roles: [
      '영어MC',
      '개막식, 세션 및 패널 토론, 만찬',
    ],
  },
  {
    id: 2,
    thumbnail: 'images/experience/mainevents/2.jpg',
    titleKo: '2025 APEC SME 장관회의 만찬',
    titleEn: 'APEC SME Ministerial Meeting',
    host: '중소벤처기업부',
    hostLabel: '중기부 장관 주재',
    description:
      'APEC 회원국의 중소기업 정책 담당 장관 및 주요 관계자들이 참석한 국제 장관급 행사입니다. 공식 회의와 연계된 만찬 행사로, 중소기업 혁신, 협력, 지속가능한 성장에 대한 교류와 네트워킹이 이루어진 자리입니다.',
    roles: [
      '한영MC',
      '전시 투어, 만찬',
    ],
  },
  {
    id: 3,
    thumbnail: 'images/experience/mainevents/3.jpg',
    titleKo: '2025 KSP 성과공유 컨퍼런스',
    titleEn: 'KSP Dissemination Conference',
    host: '기획재정부',
    hostLabel: '부총리 겸 기재부 장관 주재',
    description:
      '한국의 경제발전 경험을 바탕으로 협력국과 정책 지식 및 개발 성과를 공유하는 국제 컨퍼런스입니다. 2025년 행사는 "지식공유에서 공동번영으로, APEC과 함께 세계로"를 주제로, 정부·국제기구·개발협력 관계자들이 참여해 글로벌 협력 방향을 논의했습니다.',
    roles: [
      '한국어MC',
      '개막식 및 세션',
    ],
  },
  {
    id: 4,
    thumbnail: 'images/experience/mainevents/4.jpg',
    titleKo: '2025 국제한반도포럼',
    titleEn: 'Global Korea Forum',
    host: '통일부',
    hostLabel: '통일부 장관 주재',
    description:
      '한반도와 동북아의 평화, 공존, 안보 협력 방향을 논의하는 국제 정책 포럼입니다. 국내외 석학, 전직 외교관, 정부 및 국제기구 관계자들이 참여해 남북관계, 평화공존, 국제사회의 역할 등을 폭넓게 다룬 행사입니다.',
    roles: [
      '한국어 및 한영 MC',
      '개막식 및 세션, 만찬',
    ],
  },
  {
    id: 5,
    thumbnail: 'images/experience/mainevents/5.jpg',
    titleKo: '2024 식량원조협약 출항기념식',
    titleEn: 'The Departure Ceremony for Rice Assistance through the Food Assistance Convention',
    host: '농림축산식품부',
    hostLabel: '농림부 장관 주재',
    description:
      '대한민국의 국제 식량원조 확대를 기념해 열린 공식 출항 행사입니다. 유엔 세계식량계획(WFP)을 통한 쌀 지원 규모를 확대하고, 식량 위기 국가의 난민 및 취약계층을 지원하기 위한 인도적 협력의 의미를 담은 행사입니다.',
    roles: [
      '한영MC',
      '개막식 및 선박 퍼포먼스',
    ],
  },
];

/* ============================================================
   유틸리티
   ============================================================ */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ============================================================
   모달 관련
   ============================================================ */
function openModal(eventId) {
  const event = EVENTS.find((e) => e.id === eventId);
  if (!event) return;

  /* 모달 내용 채우기 */
  const modalImg = $('#modalImage');
  modalImg.src = event.thumbnail || '';
  modalImg.alt = event.titleKo;
  $('#modalHostBadge').textContent = event.hostLabel;
  $('#modalTitle').textContent = event.titleKo;
  $('#modalTitleEn').textContent = event.titleEn;
  $('#modalHost').textContent = event.host;
  $('#modalDescription').textContent = event.description;

  const roleList = $('#modalRoles');
  roleList.innerHTML = event.roles
    .map(
      (role) =>
        `<li class="modal-role-item">
          <span class="modal-role-dot"></span>
          <span>${role}</span>
        </li>`
    )
    .join('');

  /* 모달 열기 */
  const modal = $('#eventModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = $('#eventModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function openAllEventsModal() {
  $('#allEventsModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAllEventsModal() {
  $('#allEventsModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   주요 행사 사례 — 카드 6개 렌더링
   ============================================================ */
function renderFeaturedCards() {
  const container = $('#featured-events-container');
  if (!container) return;

  /* 이미지 카드 5개 HTML */
  const imageCardsHTML = EVENTS.map((event) => `
    <div class="event-card fade-section" data-event-id="${event.id}" role="button" tabindex="0" aria-label="${event.titleKo} 상세 보기">
      <img src="${event.thumbnail}" alt="${event.titleKo}" loading="lazy" />
      <span class="event-card-badge">${event.hostLabel}</span>
    </div>
  `).join('');

  /* 텍스트 카드 1개 (6번째) HTML */
  const textCardHTML = `
    <div class="event-card event-card-text fade-section" id="view-all-card" role="button" tabindex="0" aria-label="전체 행사 목록 보기">
      <p class="event-card-all-label">전체보기 클릭</p>
      <p class="event-card-all-number">150<span class="event-card-all-plus">+</span></p>
      <p class="event-card-all-sub">행사 진행</p>
    </div>
  `;

  container.innerHTML = imageCardsHTML + textCardHTML;

  /* 이미지 카드 클릭 이벤트 */
  container.querySelectorAll('.event-card[data-event-id]').forEach((card) => {
    card.addEventListener('click', () => {
      openModal(Number(card.dataset.eventId));
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(Number(card.dataset.eventId));
    });
  });

  /* 전체보기 카드 클릭 이벤트 */
  const viewAllCard = $('#view-all-card');
  if (viewAllCard) {
    viewAllCard.addEventListener('click', openAllEventsModal);
    viewAllCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openAllEventsModal();
    });
  }
}

/* ============================================================
   네비게이션 스크롤 효과 + Scroll Spy
   ============================================================ */
function initNavScroll() {
  const navbar = $('#navbar');
  const navLinks = $$('.nav-link');
  const sections = $$('section[id]');

  function onScroll() {
    /* 스크롤 시 네비 배경 변경 */
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    /* Scroll Spy — 현재 섹션 강조 */
    let currentId = '';
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= 100) currentId = section.id;
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* 초기 실행 */
}

/* ============================================================
   모바일 햄버거 메뉴
   ============================================================ */
function initHamburger() {
  const btn = $('#hamburger-btn');
  const menu = $('#mobile-menu');
  const mobileLinks = $$('.mobile-nav-link');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    /* 햄버거 아이콘 토글 */
    btn.querySelector('.icon-open').classList.toggle('hidden');
    btn.querySelector('.icon-close').classList.toggle('hidden');
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelector('.icon-open').classList.remove('hidden');
      btn.querySelector('.icon-close').classList.add('hidden');
    });
  });
}

/* ============================================================
   Smooth Scroll (nav 높이 오프셋 적용)
   ============================================================ */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   IntersectionObserver — fade-in 애니메이션
   ============================================================ */
function initFadeIn() {
  /* hover 불가 기기(모바일 등) 판별 — 1회만 계산 */
  const noHover = window.matchMedia('(hover: none)').matches;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          /* 모바일: 이미지 카드 진입 시 줌 힌트 1회 재생 */
          if (noHover && entry.target.matches('.event-card[data-event-id]')) {
            setTimeout(() => entry.target.classList.add('tap-hint'), 500);
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  $$('.fade-section').forEach((el) => observer.observe(el));
}

/* ============================================================
   Back-to-Top 버튼
   ============================================================ */
function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   About 좌측 클립 높이 — 우측 바이오 두 앵커 사이 높이에 맞춤
   ============================================================ */
function syncAboutClipHeight() {
  const topEl    = $('#bio-top-anchor');
  const bottomEl = $('#bio-bottom-anchor');
  const clipEl   = $('.about-left-clip');
  if (!topEl || !bottomEl || !clipEl) return;

  /* 두 요소가 같은 오프셋 부모(우측 컬럼 div) 안에 있으므로
     getBoundingClientRect 차이로 뷰포트 기준 높이를 계산 */
  const h = bottomEl.getBoundingClientRect().top - topEl.getBoundingClientRect().top;
  if (h > 0) clipEl.style.height = h + 'px';
}

/* ============================================================
   진행 영상 재생 버튼
   ============================================================ */
function initVideoPlayers() {
  $$('.video-wrap').forEach((wrap) => {
    const video = wrap.querySelector('video');
    const btn = wrap.querySelector('.video-play-btn');
    if (!video || !btn) return;

    /* 커스텀 재생 버튼 클릭 → 네이티브 controls 활성화 후 재생 시작 */
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.controls = true;
      video.muted = false;
      video.play();
    });

    /* 재생 시작: 커스텀 버튼 숨김 (이후 네이티브 controls에 위임) */
    video.addEventListener('play', () => wrap.classList.add('playing'));

    /* 재생 종료: controls 제거하고 커스텀 버튼 복귀 */
    video.addEventListener('ended', () => {
      wrap.classList.remove('playing');
      video.controls = false;
    });
  });
}

/* ============================================================
   초기화 진입점
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedCards(); /* 주요 행사 사례 카드 생성 후 */
  initVideoPlayers();    /* 영상 재생 버튼 초기화 */
  initFadeIn();          /* IntersectionObserver 등록 (카드 포함) */
  initNavScroll();
  initHamburger();
  initSmoothScroll();
  initBackToTop();
  syncAboutClipHeight();                          /* 좌측 클립 높이 동기화 */
  window.addEventListener('resize', syncAboutClipHeight); /* 반응형 대응 */

  /* 이미지 모달 닫기 이벤트 */
  $('#modal-close-btn')?.addEventListener('click', closeModal);
  $('#eventModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  /* 전체보기 모달 닫기 이벤트 */
  $('#all-events-close-btn')?.addEventListener('click', closeAllEventsModal);
  $('#allEventsModal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAllEventsModal();
  });

  /* ESC — 두 모달 모두 닫기 */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeAllEventsModal();
    }
  });
});
