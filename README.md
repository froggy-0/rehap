# JHAP - 운동생리학 학습 랜딩 페이지

> 운동생리학 학습자 전체를 위한 핵심 정리와 실전 문제집 제공

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Motion](https://img.shields.io/badge/Motion-12.34.1-purple)](https://motion.dev/)

## 🚀 빠른 시작

```bash
# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
# .env.local 파일을 열어 실제 값으로 수정

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 📁 프로젝트 구조

```
rehap/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React 컴포넌트
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # 페이지 섹션
│   │   ├── shared/      # 공통 컴포넌트
│   │   ├── tabs/        # 탭별 컴포넌트
│   │   └── ui/          # shadcn UI
│   ├── lib/             # 유틸리티 & 상수
│   ├── hooks/           # 커스텀 훅
│   └── types/           # TypeScript 타입
├── content/             # JSON 콘텐츠
├── public/              # 정적 파일
└── docs/                # 문서
    ├── guides/          # 개발 가이드
    ├── decisions/       # 기술 결정 기록
    └── reports/         # 분석 리포트
```

## 🛠️ 기술 스택

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animation**: Motion 12.34.1
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## 📚 문서

- [개발 가이드](docs/guides/) - 컴포넌트 작성, 스타일 가이드
- [기술 결정](docs/decisions/) - 아키텍처 및 라이브러리 선택 이유
- [분석 리포트](docs/reports/) - 성능, 코드 품질 분석

## 🎯 주요 기능

- ✅ 4개 탭 구조 (홈, 문제집, 소개, 피드백)
- ✅ Motion 기반 부드러운 애니메이션
- ✅ 반응형 디자인 (모바일 최적화)
- ✅ 에러 바운더리 & 에러 핸들링
- ✅ 환경 변수 관리
- ✅ TypeScript 타입 안정성

## 🔧 개발 규칙

### 컴포넌트 작성
- 단일 책임 원칙 준수
- 150줄 이하 권장
- JSDoc 주석 작성

### 애니메이션
- `src/lib/constants.ts`의 상수 사용
- LazyMotion으로 번들 최적화
- `prefers-reduced-motion` 자동 대응

### 스타일링
- Tailwind CSS 유틸리티 우선
- 커스텀 CSS는 최소화
- 반응형: mobile-first

자세한 내용은 [개발 가이드](docs/guides/DEVELOPMENT.md) 참조

## 📊 성능

- **번들 사이즈**: ~135KB (gzipped)
- **Lighthouse**: 95+ 점
- **빌드 시간**: ~1.7초

## 🤝 기여

1. 이슈 생성
2. 브랜치 생성 (`feature/기능명`)
3. 커밋 (`git commit -m 'feat: 기능 추가'`)
4. 푸시 (`git push origin feature/기능명`)
5. Pull Request 생성

## 📝 라이선스

MIT License

## 📧 문의

- Email: contact@example.com
- Instagram: [@example](https://instagram.com/example)
