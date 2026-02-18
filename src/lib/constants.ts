/**
 * 애니메이션 관련 상수
 */
export const ANIMATION = {
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.5,
    SLOW: 0.7,
  },
  VIEWPORT: {
    MOBILE: 0.3,    // 모바일: 30% 보일 때 시작
    TABLET: 0.4,    // 태블릿: 40% 보일 때 시작
    DESKTOP: 0.5,   // 웹: 50% 보일 때 시작 (더 늦게)
    TITLE: 0.3,     // 타이틀: 30%
  },
  STAGGER: {
    FAST: 0.1,
    NORMAL: 0.15,
    SLOW: 0.2,
  },
} as const;

/**
 * 스프링 애니메이션 설정
 */
export const SPRING = {
  SMOOTH: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
  },
  BOUNCY: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 12,
  },
  STIFF: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 20,
  },
} as const;

/**
 * 브레이크포인트
 */
export const BREAKPOINTS = {
  SM: 430,
  MD: 768,
  LG: 1280,
  XL: 1440,
} as const;

/**
 * 환경 변수 (타입 안전)
 */
export const ENV = {
  FORM_URL: process.env.NEXT_PUBLIC_FORM_URL || '',
  FEEDBACK_FORM_URL: process.env.NEXT_PUBLIC_FEEDBACK_FORM_URL || '',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || '',
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
  BLOG_URL: process.env.NEXT_PUBLIC_BLOG_URL || '',
} as const;
