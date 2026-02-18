# Color 시스템

## 핵심 원칙

**Primary는 CTA에만 사용**

---

## Color 역할

| 색상 | 용도 | 사용처 |
|------|------|--------|
| **Primary (Emerald)** | CTA, 핵심 강조 | Hero "한 권으로", ApplicationCTA 버튼 |
| **Slate** | 중립 정보 | 통계, 아이콘, 숫자, 태그, 테두리 |
| **Amber** | 평점 | 별점 |
| **Blue** | 정보 강조 | Urgency 섹션 |
| **Emerald/Rose** | 상태 | FitCheck 추천/비추천 |

---

## 적용 예시

```tsx
// ✅ CTA (Primary만 사용)
<Button className="bg-primary">신청하기</Button>
<span className="text-primary">한 권으로</span>

// ✅ 통계/아이콘 (Neutral)
<div className="text-slate-700">100+</div>
<div className="bg-slate-100">아이콘</div>

// ✅ 평점 (Amber)
<Star className="fill-amber-400" />

// ✅ 정보 (Blue)
<span className="bg-blue-600">업데이트</span>

// ❌ 금지
<div className="text-primary">일반 텍스트</div>  // Primary 남용
```

---

## 섹션 배경 패턴

```
white → surface → white → surface
```

교차 사용으로 스크롤 리듬 생성

---

## 체크리스트

- [ ] Primary는 CTA에만 사용했는가?
- [ ] 통계/아이콘은 중립 색상인가?
- [ ] 섹션 배경이 교차되는가?
