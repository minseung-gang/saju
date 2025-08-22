# 🔮 사주 (Saju) - 사주팔자 운세 서비스

기업 과제: 사주팔자 기반 운세 서비스 웹 애플리케이션

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


