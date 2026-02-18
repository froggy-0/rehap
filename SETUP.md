# JHAP 프로젝트 실행 가이드

## 1단계: Node.js 설치

### Windows
1. https://nodejs.org/ko 접속
2. "LTS" 버전 다운로드 (추천)
3. 다운로드한 파일 실행하고 "Next" 계속 클릭
4. 설치 완료

### Mac
1. https://nodejs.org/ko 접속
2. "LTS" 버전 다운로드
3. 다운로드한 `.pkg` 파일 실행
4. 설치 완료

### 설치 확인
터미널(Mac) 또는 명령 프롬프트(Windows)를 열고:
```bash
node -v
npm -v
```
버전이 나오면 설치 성공

---

## 2단계: 프로젝트 파일 준비

1. 프로젝트 폴더를 원하는 위치에 복사
2. 터미널/명령 프롬프트 열기
3. 프로젝트 폴더로 이동:
```bash
cd 프로젝트폴더경로
```

---

## 3단계: 프로젝트 설치

프로젝트 폴더에서 실행:
```bash
npm install
```
- 시간이 좀 걸립니다 (1~3분)
- `node_modules` 폴더가 생성됨

---

## 4단계: 프로젝트 실행

```bash
npm run dev
```

브라우저에서 열기:
```
http://localhost:3000
```

---

## 종료 방법

터미널에서 `Ctrl + C` 누르기

---

## 문제 해결

### "npm을 찾을 수 없습니다" 에러
→ Node.js 재설치 필요

### 포트 3000이 이미 사용중
```bash
npm run dev -- -p 3001
```
그리고 `http://localhost:3001` 접속

### 설치가 안될 때
```bash
npm cache clean --force
npm install
```

---

## 배포용 빌드 (선택사항)

실제 서비스용으로 빌드:
```bash
npm run build
npm start
```
