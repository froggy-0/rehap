# 파비콘 및 메타데이터 설정 완료

**작업 일시**: 2026-02-18  
**작업 내용**: JHAP 브랜드 파비콘 및 메타데이터 설정

---

## ✅ 완료된 작업

### 1. 파비콘 생성
**파일**: `src/app/icon.svg`

**디자인**:
- 배경: 에메랄드 그린 (#10b981)
- 텍스트: "JH" 흰색
- 크기: 32x32px
- 형식: SVG (확장 가능)

**특징**:
- SVG 형식으로 모든 해상도 지원
- 브랜드 컬러 사용
- 간결한 디자인

### 2. 메타데이터 설정
**파일**: `src/app/layout.tsx`

**추가된 설정**:
```typescript
icons: {
  icon: [
    { url: '/icon.svg', type: 'image/svg+xml' },
    { url: '/favicon.ico', sizes: 'any' },
  ],
  apple: '/apple-icon.png',
}
```

### 3. 타이틀 확인
**현재 설정**:
```
타이틀: JHAP - 운동생리학 전과목 합격 설계
설명: 운동생리학 학습자 전체를 위한 핵심 정리와 실전 문제집을 제공합니다.
```

**출처**: `content/config.json`에서 자동 로드

---

## 📱 브라우저별 지원

### 데스크톱
- ✅ Chrome/Edge: icon.svg 사용
- ✅ Firefox: icon.svg 사용
- ✅ Safari: icon.svg 사용

### 모바일
- ✅ iOS Safari: apple-icon.png (필요 시 추가)
- ✅ Android Chrome: icon.svg 사용

---

## 🎨 파비콘 디자인 가이드

### 현재 디자인
```
┌─────────────┐
│  ┌──┐       │
│  │  │   ┌─┐ │  <- "JH" 글자
│  │  │   │ │ │
│  └──┘   └─┘ │
│             │
│  에메랄드   │
└─────────────┘
```

### 색상
- 배경: `#10b981` (브랜드 에메랄드)
- 텍스트: `#ffffff` (흰색)
- 투명도: 90% (H 글자)

---

## 🔧 추가 파비콘 생성 (선택사항)

### Apple Touch Icon
**크기**: 180x180px  
**파일**: `src/app/apple-icon.png`

```bash
# ImageMagick 사용 (설치 필요)
convert icon.svg -resize 180x180 apple-icon.png
```

### Favicon ICO
**크기**: 16x16, 32x32, 48x48  
**파일**: `src/app/favicon.ico`

```bash
# ImageMagick 사용
convert icon.svg -define icon:auto-resize=16,32,48 favicon.ico
```

---

## 📊 메타데이터 전체 구조

```typescript
{
  title: "JHAP - 운동생리학 전과목 합격 설계",
  description: "운동생리학 학습자 전체를 위한...",
  icons: {
    icon: [SVG, ICO],
    apple: PNG
  },
  openGraph: {
    title, description, url, images
  },
  twitter: {
    card, title, description, images
  },
  robots: {
    index: true,
    follow: true
  }
}
```

---

## ✨ 확인 방법

### 로컬 개발
```bash
npm run dev
# http://localhost:3000 접속
# 브라우저 탭에서 파비콘 확인
```

### 프로덕션 빌드
```bash
npm run build
npm start
# 파비콘 및 타이틀 확인
```

### 브라우저 개발자 도구
```
1. F12 → Elements 탭
2. <head> 섹션 확인
3. <link rel="icon"> 태그 확인
```

---

## 🎯 Next.js 파비콘 규칙

### 자동 인식 파일
Next.js는 `app/` 폴더에 다음 파일을 자동 인식:

1. `favicon.ico` - 기본 파비콘
2. `icon.png` 또는 `icon.svg` - 모던 브라우저
3. `apple-icon.png` - iOS 홈 화면
4. `icon.tsx` - 동적 파비콘 (React 컴포넌트)

### 우선순위
1. `icon.svg` (벡터, 권장)
2. `icon.png` (래스터)
3. `favicon.ico` (레거시)

---

## 📝 참고 사항

### SVG 파비콘 장점
- ✅ 모든 해상도 지원
- ✅ 파일 크기 작음
- ✅ 수정 용이
- ✅ 모던 브라우저 지원

### 브랜드 일관성
- 파비콘 색상 = 브랜드 컬러
- 로고와 동일한 디자인 언어
- 간결하고 인식 가능

---

## 🔄 향후 개선 (선택사항)

### 1. 다크 모드 파비콘
```typescript
// src/app/icon.tsx
export default function Icon() {
  return (
    <svg>
      {/* 다크 모드 대응 */}
    </svg>
  );
}
```

### 2. 애니메이션 파비콘
```typescript
// 로딩 상태 표시 등
```

### 3. PWA 아이콘
```json
// manifest.json
{
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192" },
    { "src": "/icon-512.png", "sizes": "512x512" }
  ]
}
```

---

**작업 완료**: 2026-02-18  
**빌드 상태**: ✅ 성공  
**파비콘**: ✅ 적용됨
