# Typography 규칙

## Font Weight

### 제목 (Headings)
- **H1-H2 (대제목)**: `font-bold` (700)
  - 예: Hero 제목, 섹션 메인 제목
- **H3-H4 (소제목)**: `font-semibold` (600)
  - 예: 카드 제목, 서브섹션 제목
- **H5-H6 (작은 제목)**: `font-semibold` (600)
  - 예: 라벨, 캡션 제목

### 버튼 (Buttons)
- **모든 버튼**: `font-semibold` (600)
  - ApplicationCTA, Header 버튼, 일반 버튼

### 본문 (Body)
- **강조 텍스트**: `font-semibold` (600)
  - 예: 이름, 역할, 중요 정보
- **일반 텍스트**: `font-normal` (400) - 기본값
  - 예: 설명, 본문 내용

### 특수 요소
- **배지/태그**: `font-semibold` (600)
- **통계 숫자**: `font-bold` (700)
- **아이콘 라벨**: `font-bold` (700)

---

## Line Height

### 제목
- **대제목 (H1-H2)**: `leading-[1.3]`
  - 타이트한 간격으로 임팩트 강조
- **소제목 (H3-H4)**: `leading-[1.4]` (기본값)
  - 적당한 간격

### 본문
- **일반 본문**: `leading-[1.7]`
  - 가독성 최적화
- **작은 텍스트**: `leading-[1.6]`
  - 예: 캡션, 메타 정보

---

## Letter Spacing

### 제목
- **대제목**: `tracking-tight`
  - 타이트한 자간으로 밀도감
- **소제목**: `tracking-[-0.01em]`
  - 미세 조정

### 특수
- **대문자 라벨**: `tracking-[0.3em]`
  - 예: "JHAP", "STEP 01"
- **일반 텍스트**: 기본값 (tracking 없음)

---

## 적용 예시

```tsx
// ✅ 대제목
<h1 className="text-5xl font-bold leading-[1.3] tracking-tight">

// ✅ 섹션 제목
<h2 className="text-3xl font-bold leading-[1.3] tracking-tight">

// ✅ 카드 제목
<h3 className="text-xl font-semibold tracking-[-0.01em]">

// ✅ 본문
<p className="text-base text-text-secondary leading-[1.7]">

// ✅ 작은 텍스트
<p className="text-sm text-text-muted leading-[1.6]">

// ✅ 버튼
<Button className="font-semibold">

// ✅ 대문자 라벨
<span className="text-xs font-semibold uppercase tracking-[0.3em]">
```

---

## 체크리스트

- [x] 제목 weight 700 (font-bold) 적용
- [x] 소제목 weight 600 (font-semibold) 적용
- [x] 버튼 weight 600 (font-semibold) 적용
- [x] 제목 line-height 1.3 적용
- [x] 본문 line-height 1.7 적용
- [x] 제목 tracking-tight 적용
- [x] 소제목 tracking-[-0.01em] 적용
- [x] 대문자 tracking-[0.3em] 적용

---

## 일관성 유지

새 컴포넌트 추가 시 이 규칙을 따라야 합니다.
규칙을 벗어나는 경우 명확한 이유가 있어야 합니다.
