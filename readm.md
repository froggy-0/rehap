# READ 단계 랜딩 웹 프론트엔드 스펙 (루브릭 검증 완료)

---

## 1. 목적 정의

### 서비스 목적

건강운동관리사 시험 준비생 대상
문제집(PDF) 홍보 및 신청 유도 랜딩 페이지 구축

현재 단계 범위:

* 정적 랜딩 페이지 (READ only)
* 외부 폼 신청
* 수동 결제 및 파일 전달
* DB / 결제 시스템 없음

향후 확장:
결제 → API → 개인화 다운로드 → 영상

---

## 2. 루브릭 검증

| 항목                 | 요구 | 선택 스택 적합성             |
| ------------------ | -- | --------------------- |
| GitHub Pages 정적 배포 | 필수 | Next Static Export 적합 |
| 모바일 퍼스트            | 필수 | Tailwind 기반 반응형 적합    |
| 최소 운영비             | 필수 | 정적 호스팅 무료             |
| 확장성(API 연결)        | 필수 | Next + 환경변수 구조 적합     |
| SEO / SNS 공유       | 중요 | 메타/OG 지원              |
| JS 최소화             | 중요 | Static Export 구조 적합   |
| 향후 SaaS화           | 중요 | React 생태계 유지          |

결론: 스택 적합

---

## 3. 최종 프론트 스택

### Framework

Next.js (Static Export 모드)

이유:

* GitHub Pages 정적 배포 가능
* 추후 API 연동 자연스러움
* React 생태계 유지

### Styling

* Tailwind CSS v4
* shadcn/ui (Radix 기반 컴포넌트)

### 배포

GitHub Pages + GitHub Actions 자동 배포

---

## 4. 모바일 퍼스트 UX 스펙

### 지원 해상도

| 구간      | 해상도       |
| ------- | --------- |
| Mobile  | 360–430px |
| Tablet  | 768px     |
| Laptop  | 1280px    |
| Desktop | 1440px+   |

### 모바일 핵심 규칙

* 첫 화면에 CTA 1개 반드시 노출
* 버튼 최소 높이 44px
* 기본 폰트 크기 16px 이상
* 한 화면 1목표 구조

---

## 5. 레이아웃 구조

페이지는 단일 랜딩 스크롤 구조

순서:

1. Hero (핵심 CTA)
2. 문제 공감
3. 문제집 소개
4. 차별점
5. 구성 미리보기
6. 가격 / 구매 방식
7. 신청 CTA
8. FAQ
9. 외부 링크

---

## 6. 성능 최적화 규칙

### Core Web Vitals 목표

| 지표        | 목표     |
| --------- | ------ |
| LCP       | < 2.5s |
| CLS       | < 0.1  |
| JS Bundle | 최소화    |

### 적용 기술

* 이미지 WebP / AVIF
* Lazy loading
* 폰트 1종 사용
* JS 최소화

---

## 7. SEO / SNS 공유 필수 스펙

필수 메타:

* Open Graph 이미지
* Twitter Card
* sitemap.xml
* robots.txt
* favicon

목적:
SNS 공유 전환율 극대화

---

## 8. API 확장 대비 설계

환경 변수:
NEXT_PUBLIC_API_BASE_URL

도메인 구조 계획:

* [www.example.com](http://www.example.com) (프론트)
* api.example.com (백엔드)

프론트는 fetch 기반 API 호출 구조 유지

---

## 9. 콘텐츠 운영 구조

비개발자 수정 가능 영역 분리

/content/config.json

* 가격
* 신청 링크
* SNS 링크

/content/faq.json

* FAQ 데이터

---

## 10. 배포 워크플로우

1. Git push
2. GitHub Actions build
3. Static export
4. GitHub Pages 배포

운영 비용: 0원

---

## 11. 향후 확장 로드맵

1단계: 정적 랜딩 (현재)
2단계: API + 결제 + 다운로드
3단계: 회원 / 개인화
4단계: 영상 스트리밍

---

## 최종 결론

현재 목적(READ 홍보 단계)에 대해

* 최소 비용
* 모바일 최적화
* 확장 가능

조건을 모두 만족하는 프론트 스펙 확정.
