# 🔮 사주 (Saju) - 사주팔자 운세 서비스

기업 과제: 사주팔자 기반 운세 서비스 웹 애플리케이션

<br/>


### 주요 기능

📅 생년월일시 입력: 정확한 사주 계산을 위한 상세 정보 수집
🔍 사주팔자 분석: 천간지지 기반 사주 해석
📊 운세 정보: 오늘/이번 달/올해 운세 제공
📱 반응형 디자인: 모바일/태블릿/데스크톱 최적화
🎨 인터랙티브 UI: 사용자 친화적인 애니메이션과 전환 효과
<br/>
<br/>
### 설치 및 실행
```
# 저장소 클론

git clone https://github.com/minseung-gang/saju.git
cd saju

# 의존성 설치
npm install

# 또는
yarn install

# 개발 서버 실행
npm run dev

# 또는
yarn dev

```

### 📁 프로젝트 구조

```
saju/
├── src/
│   ├── components/
│   └── constants/                 
│   ├── pages/              
│   ├── styles/            
│   ├── types/            
│   ├── utils/             
├── public/
                   
```

### 트러블슈팅


**문제**: min-w-max와 clamp() 충돌 <br/>
**해결**: @layer utilities를 활용한 커스텀 클래스 구현 <br/>
**결과**: 반응형 텍스트와 레이아웃 양립 <br/>


