# 문제집 추가 가이드

## 📚 새 문제집 추가하기

### 1단계: JSON 데이터 추가

`content/workbooks.json` 파일의 `items` 배열에 새 항목을 추가하세요.

```json
{
  "id": "wb-5",
  "title": "문제집 제목",
  "subtitle": "부제목 (한 줄 설명)",
  "description": "상세 설명 (2-3줄)",
  "price": 30000,
  "priceDisplay": "30,000원",
  "discountPrice": 24000,
  "discountPriceDisplay": "24,000원",
  "features": [
    "특징 1",
    "특징 2",
    "특징 3",
    "특징 4"
  ],
  "coverImage": "/images/workbook-cover.webp",
  "previewImages": [
    "/images/preview-1.jpg",
    "/images/preview-2.jpg",
    "/images/preview-3.jpg"
  ],
  "applicationUrl": "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
  "category": "코어"
}
```

### 2단계: 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `id` | string | ✅ | 고유 ID (wb-1, wb-2, ...) |
| `title` | string | ✅ | 문제집 제목 |
| `subtitle` | string | ✅ | 부제목 (한 줄) |
| `description` | string | ✅ | 상세 설명 (2-3줄) |
| `price` | number | ✅ | 정가 (숫자만) |
| `priceDisplay` | string | ✅ | 정가 표시 (쉼표 포함) |
| `discountPrice` | number | ❌ | 할인가 (선택) |
| `discountPriceDisplay` | string | ❌ | 할인가 표시 (선택) |
| `features` | string[] | ✅ | 특징 4개 (배열) |
| `coverImage` | string | ✅ | 커버 이미지 경로 |
| `previewImages` | string[] | ✅ | 미리보기 이미지 3개 |
| `applicationUrl` | string | ✅ | 신청 폼 URL |
| `category` | string | ✅ | 카테고리 (아래 참고) |

### 3단계: 카테고리 선택

현재 사용 가능한 카테고리:
- `"코어"` - 핵심 개념 정리
- `"실전"` - 모의고사/실전 문제
- `"자격증별"` - 자격증별 맞춤 구성

**새 카테고리 추가 시:**
`categories` 배열에도 추가해야 합니다.

```json
{
  "categories": ["전체", "코어", "실전", "자격증별", "신규카테고리"],
  "items": [...]
}
```

### 4단계: 이미지 준비

#### 커버 이미지
- **크기:** 800x1000px (세로형)
- **포맷:** WebP 권장 (또는 JPG)
- **위치:** `public/images/workbook-cover-{id}.webp`
- **용량:** 200KB 이하

#### 미리보기 이미지
- **크기:** 1200x800px (가로형)
- **포맷:** JPG 또는 WebP
- **위치:** `public/images/preview-{id}-{1,2,3}.jpg`
- **용량:** 각 300KB 이하

**이미지 최적화 팁:**
```bash
# WebP 변환 (ImageMagick)
convert input.jpg -quality 85 output.webp

# 리사이즈
convert input.jpg -resize 1200x800 output.jpg
```

### 5단계: 신청 폼 URL

Google Forms 또는 Typeform URL을 사용하세요.

**Google Forms 예시:**
```
https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform
```

**주의:** 폼이 공개 상태인지 확인하세요.

### 6단계: 검증

개발 서버를 실행하면 자동으로 검증됩니다.

```bash
npm run dev
```

콘솔에서 검증 오류를 확인하세요:
```
⚠️ 문제집 [4] 검증 실패: ["price 유효하지 않음"]
```

### 7단계: 확인

1. 브라우저에서 `http://localhost:3000` 접속
2. "문제집" 탭 클릭
3. 새 문제집이 표시되는지 확인
4. 카테고리 필터 동작 확인
5. 상세 보기 클릭하여 모든 정보 확인

---

## ✅ 체크리스트

새 문제집 추가 전 확인하세요:

- [ ] ID가 고유한가? (기존 ID와 중복 없음)
- [ ] 모든 필수 필드가 채워졌는가?
- [ ] 가격이 숫자로 입력되었는가? (쉼표 없음)
- [ ] features 배열에 4개 항목이 있는가?
- [ ] 이미지 파일이 public/images/에 있는가?
- [ ] 신청 폼 URL이 유효한가?
- [ ] category가 올바른가?

---

## 🔧 문제 해결

### 문제집이 표시되지 않아요
1. JSON 문법 오류 확인 (쉼표, 따옴표)
2. 개발 서버 재시작
3. 브라우저 캐시 삭제

### 이미지가 안 보여요
1. 파일 경로 확인 (`/images/...`)
2. 파일명 대소문자 확인
3. 이미지 파일 존재 확인

### 카테고리 필터가 안 돼요
1. category 값이 categories 배열에 있는지 확인
2. 대소문자 정확히 일치하는지 확인

---

## 📝 예시: 완전한 문제집 데이터

```json
{
  "id": "wb-5",
  "title": "운동생리학 기출문제 500제",
  "subtitle": "최근 5개년 기출 완벽 분석",
  "description": "최근 5개년 기출문제를 분석하여 출제 경향과 핵심 개념을 정리한 문제집입니다. 상세한 해설과 함께 실전 감각을 키울 수 있습니다.",
  "price": 35000,
  "priceDisplay": "35,000원",
  "discountPrice": 28000,
  "discountPriceDisplay": "28,000원",
  "features": [
    "5개년 기출 500제",
    "상세 해설 포함",
    "출제 경향 분석",
    "오답 노트 양식 제공"
  ],
  "coverImage": "/images/workbook-cover.webp",
  "previewImages": [
    "/images/preview-1.jpg",
    "/images/preview-2.jpg",
    "/images/preview-3.jpg"
  ],
  "applicationUrl": "https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform",
  "category": "실전"
}
```

---

## 🚀 배포

문제집 추가 후:

```bash
# 빌드 테스트
npm run build

# 배포 (GitHub Pages)
git add .
git commit -m "문제집 추가: [제목]"
git push origin main
```

GitHub Actions가 자동으로 배포합니다 (약 2-3분 소요).
