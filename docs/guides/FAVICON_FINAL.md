# 파비콘 및 이미지 경로 최종 가이드

**작업 일시**: 2026-02-18  
**문제**: GitHub Pages 배포 시 파비콘 및 이미지 깨짐  
**원인**: basePath 미적용

---

## 🔴 문제 원인

### GitHub Pages 배포 구조
```
실제 URL: https://username.github.io/rehap/
basePath: /rehap
```

### 경로 문제
```typescript
// ❌ 잘못된 경로 (basePath 미적용)
<Image src="/images/logo.svg" />
// → 실제 요청: /images/logo.svg (404)

// ✅ 올바른 경로 (basePath 적용)
<Image src={getAssetPath("/images/logo.svg")} />
// → 실제 요청: /rehap/images/logo.svg (200)
```

---

## ✅ 해결 방법

### 1. 헬퍼 함수 추가
**파일**: `src/lib/utils.ts`

```typescript
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_REPO_NAME 
    ? `/${process.env.NEXT_PUBLIC_REPO_NAME}` 
    : '';
  return `${basePath}${path}`;
}
```

### 2. 이미지 경로 수정
**수정된 파일**:
- `src/components/layout/LogoMark.tsx`
- `src/components/sections/WorkbookPreviewSection.tsx`
- `src/components/tabs/WorkbookCard.tsx`
- `src/components/tabs/WorkbookDetailDialog.tsx`

**사용 예시**:
```typescript
import { getAssetPath } from "@/lib/utils";

<Image src={getAssetPath("/images/logo.svg")} />
```

---

## 📋 최종 파비콘 파일 목록

### ✅ 필수 파일 (src/app/)

```
src/app/
├── favicon.ico          # 1KB, 다중 크기 (16/32/48px)
├── apple-icon.png       # 180x180px (iOS 홈 화면)
└── icon.svg             # 벡터 (모던 브라우저)
```

### 파일 크기 및 형식

| 파일 | 크기 | 용도 | 필수 |
|------|------|------|------|
| `favicon.ico` | 16x16, 32x32, 48x48 | 레거시 브라우저 | ✅ |
| `apple-icon.png` | 180x180 | iOS 홈 화면 | ✅ |
| `icon.svg` | 벡터 | 모던 브라우저 | 선택 |
| `icon.png` | 32x32 | 대체 파비콘 | 선택 |

---

## 🎯 파비콘 자동 인식

Next.js는 `src/app/` 폴더의 파비콘을 **자동으로 인식**하고 **basePath를 자동 적용**합니다.

### 자동 처리되는 파일
```
src/app/favicon.ico     → /rehap/favicon.ico
src/app/icon.svg        → /rehap/icon.svg
src/app/apple-icon.png  → /rehap/apple-icon.png
```

### 수동 처리 필요한 파일
```
public/images/*.jpg     → getAssetPath() 필요
public/images/*.svg     → getAssetPath() 필요
```

---

## 🔧 환경 변수 설정

### .env.local
```bash
NEXT_PUBLIC_REPO_NAME=rehap
```

### GitHub Actions
```yaml
env:
  NEXT_PUBLIC_REPO_NAME: rehap
```

---

## 📊 파비콘 생성 가이드

### 1. 온라인 도구 사용
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### 2. 필수 다운로드
1. **favicon.ico** - Standard ICO format
2. **apple-touch-icon.png** - Apple Touch Icon (180x180)

### 3. 파일 배치
```bash
# 다운로드한 파일을 다음 위치로 이동
favicon.ico → src/app/favicon.ico
apple-touch-icon.png → src/app/apple-icon.png
```

---

## ✨ 배포 체크리스트

### 빌드 전
- [ ] `NEXT_PUBLIC_REPO_NAME` 환경 변수 설정
- [ ] 파비콘 파일 3개 준비 (ico, png, svg)
- [ ] 모든 이미지 경로에 `getAssetPath()` 적용

### 빌드
```bash
npm run build
# → out/ 폴더 생성
```

### 배포 후 확인
- [ ] 파비콘 표시 확인 (브라우저 탭)
- [ ] 로고 이미지 로드 확인
- [ ] 미리보기 이미지 로드 확인
- [ ] 개발자 도구에서 404 에러 없는지 확인

---

## 🐛 트러블슈팅

### 파비콘이 안 보여요
1. **브라우저 캐시 클리어**: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows)
2. **시크릿 모드**로 확인
3. **파일 경로 확인**: `src/app/favicon.ico` 존재 여부

### 이미지가 깨져요
1. **환경 변수 확인**: `NEXT_PUBLIC_REPO_NAME` 설정 여부
2. **경로 확인**: `getAssetPath()` 사용 여부
3. **빌드 확인**: `out/` 폴더에 이미지 존재 여부

### 로컬에서는 되는데 배포하면 안 돼요
1. **basePath 문제**: `getAssetPath()` 미적용
2. **환경 변수**: GitHub Actions에서 `NEXT_PUBLIC_REPO_NAME` 설정 필요
3. **대소문자**: 파일명 대소문자 확인 (Linux는 대소문자 구분)

---

## 📝 참고 사항

### Next.js 파비콘 우선순위
1. `icon.svg` (벡터, 권장)
2. `icon.png` (래스터)
3. `favicon.ico` (레거시)

### 브라우저별 지원
- **Chrome/Edge**: SVG, PNG, ICO 모두 지원
- **Firefox**: SVG, PNG, ICO 모두 지원
- **Safari**: PNG, ICO 지원 (SVG 제한적)
- **iOS Safari**: apple-icon.png 필수

### 파일 크기 최적화
- `favicon.ico`: 1KB 이하
- `apple-icon.png`: 10KB 이하
- `icon.svg`: 1KB 이하

---

**작업 완료**: 2026-02-18  
**빌드 상태**: ✅ 성공  
**배포 준비**: ✅ 완료
