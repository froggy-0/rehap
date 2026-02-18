# 개발 가이드

## 컴포넌트 작성 규칙

### 파일 구조
```tsx
"use client"; // 클라이언트 컴포넌트인 경우

import { ... } from "...";

interface ComponentProps {
  // Props 타입 정의
}

/**
 * 컴포넌트 설명
 * @param prop1 - 설명
 * @param prop2 - 설명
 */
export function Component({ prop1, prop2 }: ComponentProps) {
  // 구현
}
```

### 규칙
1. **단일 책임 원칙**: 하나의 컴포넌트는 하나의 역할만
2. **150줄 제한**: 초과 시 분리 고려
3. **JSDoc 필수**: 공통 컴포넌트는 반드시 작성
4. **Props 타입**: interface로 명시적 정의

---

## 애니메이션 가이드

### 상수 사용
```tsx
import { ANIMATION, SPRING } from '@/lib/constants';

// viewport 설정
viewport={{ once: true, amount: ANIMATION.VIEWPORT.MOBILE }}

// transition 설정
transition={SPRING.SMOOTH}
```

### 규칙
1. **LazyMotion 사용**: `m` 컴포넌트 사용 (motion 아님)
2. **상수 활용**: 매직 넘버 금지
3. **접근성**: MotionConfig가 자동 처리
4. **성능**: whileInView로 스크롤 최적화

---

## 스타일링 가이드

### Tailwind 우선
```tsx
// ✅ Good
<div className="flex items-center gap-4 p-6">

// ❌ Bad
<div style={{ display: 'flex', alignItems: 'center' }}>
```

### 반응형
```tsx
// Mobile-first
<div className="text-base md:text-lg lg:text-xl">
```

### 규칙
1. **Tailwind 유틸리티 우선**
2. **커스텀 CSS 최소화**
3. **Mobile-first 접근**
4. **일관된 간격**: gap-4, p-6 등

---

## 상태 관리

### useState
```tsx
const [state, setState] = useState(initialValue);
```

### 규칙
1. **최소한의 상태**: 필요한 것만
2. **파생 상태 지양**: 계산 가능하면 계산
3. **로컬 우선**: 전역 상태 최소화

---

## 에러 처리

### API 호출
```tsx
try {
  const data = await apiFetch('/endpoint');
} catch (error) {
  if (error instanceof ApiError) {
    // API 에러 처리
  }
}
```

### 규칙
1. **try-catch 필수**: 모든 비동기 작업
2. **타입 체크**: instanceof 활용
3. **사용자 친화적 메시지**

---

## 환경 변수

### 사용법
```tsx
import { ENV } from '@/lib/constants';

const url = ENV.FORM_URL;
```

### 규칙
1. **constants.ts 통해 접근**
2. **NEXT_PUBLIC_ 접두사**: 클라이언트 노출 시
3. **.env.local에 실제 값**
4. **.env.example에 예시**

---

## 커밋 메시지

### 형식
```
type: 간단한 설명

상세 설명 (선택)
```

### 타입
- `feat`: 새 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅
- `refactor`: 리팩토링
- `test`: 테스트 추가
- `chore`: 빌드/설정 변경

### 예시
```
feat: 에러 바운더리 추가

- ErrorBoundary 컴포넌트 생성
- layout.tsx에 적용
- 사용자 친화적 에러 메시지
```
