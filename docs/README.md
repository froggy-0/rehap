# 문서 인덱스

## 📚 가이드

### 개발
- [개발 가이드](guides/DEVELOPMENT.md) - 컴포넌트, 애니메이션, 스타일링 규칙
- [제품 스펙](guides/PRODUCT_SPEC.md) - 기능 요구사항 및 콘텐츠 템플릿
- [디자인 스펙](guides/design-spec.md) - UI/UX 디자인 가이드
- [문제집 가이드](guides/workbook-guide.md) - 문제집 데이터 구조

### 디자인
- [색상 시스템](color-system.md) - 브랜드 컬러 팔레트
- [타이포그래피](typography-rules.md) - 폰트 사용 규칙

---

## 🎯 기술 결정

- [ADR](decisions/ADR.md) - 아키텍처 결정 기록
  - ADR-001: Motion 라이브러리 선택
  - ADR-002: 환경 변수 관리
  - ADR-003: 에러 처리 전략
  - ADR-004: 상수 관리
  - ADR-005: 컴포넌트 구조
  - ADR-006: 스타일링 전략
  - ADR-007: 타입 정의 위치
  - ADR-008: 애니메이션 성능 최적화

---

## 📊 분석 리포트

### 프로젝트 리뷰
- [프로젝트 전체 리뷰](reports/PROJECT_REVIEW.md) - 성능, 구조, 멘트, 유지보수성 분석
- [개선 완료 리포트](reports/IMPROVEMENT_REPORT.md) - 적용된 개선사항 및 효과
- [업그레이드 리포트](reports/UPGRADE_REPORT.md) - Motion 마이그레이션 기록

### 콘텐츠 분석
- [가치 제안 분석](reports/VALUE_PROPOSITION_ANALYSIS.md) - 핵심 가치 멘트 분석
- [검증 리포트](reports/verification-report.md) - 기능 검증 결과

---

## 🚀 빠른 참조

### 새 컴포넌트 만들기
```tsx
"use client";

import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode;
}

/**
 * 컴포넌트 설명
 * @param children - 자식 요소
 */
export function MyComponent({ children }: MyComponentProps) {
  return <div>{children}</div>;
}
```

### 애니메이션 추가
```tsx
import { m } from "motion/react";
import { ANIMATION, SPRING } from "@/lib/constants";

<m.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: ANIMATION.VIEWPORT.MOBILE }}
  transition={SPRING.SMOOTH}
>
  {content}
</m.div>
```

### 환경 변수 사용
```tsx
import { ENV } from "@/lib/constants";

const url = ENV.FORM_URL;
```

---

## 📝 문서 작성 규칙

### 마크다운 스타일
- 제목: `#`, `##`, `###` 사용
- 코드 블록: 언어 명시 (```tsx, ```bash)
- 강조: **굵게**, *기울임*
- 리스트: `-` 또는 `1.` 사용

### 파일 위치
- 가이드: `docs/guides/`
- 기술 결정: `docs/decisions/`
- 리포트: `docs/reports/`

### 네이밍
- 대문자 스네이크 케이스: `DEVELOPMENT.md`
- 설명적 이름: `VALUE_PROPOSITION_ANALYSIS.md`
- 날짜 포함 (리포트): `2026-02-18-review.md`

---

## 🔄 업데이트 이력

| 날짜 | 변경 내용 | 작성자 |
|------|-----------|--------|
| 2026-02-18 | 문서 구조 재정비 | Kiro AI |
| 2026-02-18 | ADR 추가 | Kiro AI |
| 2026-02-18 | 개발 가이드 작성 | Kiro AI |

---

## 📧 문의

문서 관련 문의사항은 이슈로 등록해주세요.
