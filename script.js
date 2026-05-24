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
      '공공재정관리 분야의 주요 관계자들이 모여 정책 방향과 협력방안을 논의한 국제 회의로, 고위급 참석자들이 함꼐한 공식 행사인만큼 전문적이고 안정적인 진행이 중요한 자리였습니다.',
    roles: [
      '영어MC (개막식, 세션, 만찬)',
    ],
  },
  {
    id: 2,
    thumbnail: 'images/experience/mainevents/2.jpg',
    titleKo: '2025 APEC SME 장관회의',
    titleEn: 'APEC SME Ministerial Meeting',
    host: '중소벤처기업부',
    hostLabel: '중기부 장관 주재',
    description:
      'APEC 회원국 중소기업 담당 장관들이 참석한 고위급 다자 회의로, 중소기업 성장 지원 및 디지털 전환 협력을 주제로 논의가 이루어졌습니다. 다국적 참석자를 대상으로 짧은 투어부터 만찬까지 공식 세션을 진행하였습니다.',
    roles: [
      '한영MC',
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
      '한국의 개발 경험을 파트너 국가와 공유하는 지식공유사업(KSP)의 성과를 발표하는 국제 컨퍼런스로, 부총리 겸 기획재정부 장관이 주재하였습니다.',
    roles: [
      '영어 MC',
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
      '한반도 평화와 통일 문제를 논의하는 연례 국제포럼으로, 국내외 전문가, 외교관, 학자들이 참석하여 다양한 시각을 공유하는 자리가 마련되었습니다.',
    roles: [
      '한국어 MC',
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
      '식량 위기 국가를 지원하기 위한 대한민국의 공식 식량원조 출항을 기념하는 공식 행사로, 농림부 장관 주재 하에 진행되었습니다. 국내외 참석자가 함께하는 기념식의 공식 진행을 담당하였습니다.',
    roles: [
      '한영 MC ',
      '선박 세레머니 진행',
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
      <div class="event-card-overlay">
        <p class="event-card-label">${event.hostLabel}</p>
        <p class="event-card-title">${event.titleKo}</p>
      </div>
    </div>
  `).join('');

  /* 텍스트 카드 1개 (6번째) HTML */
  const textCardHTML = `
    <div class="event-card event-card-text fade-section" id="view-all-card" role="button" tabindex="0" aria-label="전체 행사 목록 보기">
      <p class="event-card-all-label">전체보기 클릭</p>
      <p class="event-card-all-number">150<span class="event-card-all-plus">+</span></p>
      <p class="event-card-all-sub">EVENTS HOSTED</p>
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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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

    /* 재생 버튼 클릭 → 재생 시작, 이후 네이티브 controls에 위임 */
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.play();
    });

    /* 재생/일시정지/종료 상태에 따라 버튼 표시 제어 */
    video.addEventListener('play',  () => wrap.classList.add('playing'));
    video.addEventListener('pause', () => wrap.classList.remove('playing'));
    video.addEventListener('ended', () => wrap.classList.remove('playing'));
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
