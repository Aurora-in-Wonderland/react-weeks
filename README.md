![rounded](https://capsule-render.vercel.app/api?type=rounded&color=f2f1df&fontColor=145f37&text=React-weeks&fontAlignY=50&fontSize=40&height=200&stroke=000000&strokeWidth=2)


홈페이지 주소: https://react-week-f5o6rbbae-aurora-in-wonderland.vercel.app/

```
In the project directory, you can run: `yarn start`
```

# Navigation

1. [Lv-1](#lv-1)
2. [Lv-2](#types)
3. [Lv-3](#color)
4. [Lv-4](#custom-color-list)
5. [Lv-5](#section)

# Lv-1

<img src= "https://github.com/Aurora-in-Wonderland/React-week/assets/99107568/b4efa543-d63f-48ae-97e1-0176709be719"/>
<br/>

## 💡Goal : My Todo List 만들기

<p>지금까지 배운 내용을 활용하여 My Todo List를 만들어봅시다.<p>
<p>이번 주에 배운 내용으로 충분히 할 수 있는 과제입니다. ✨</p>
<div>학습 과제를 끝내고 나면 할 수 있어요!</div>
<li>컴포넌트와 리액트 훅 요소를 다룰 수 있어요.</li>
<li>이벤트를 관리할 수 있어요.</li>
<li>vercel을 이용해 리액트 사이트를 배포할 수 있어요.</li>
<br/>

## ⚙️features : 구현해야 할 기능이에요.

<p>UI 구현하기<p>
<p>Todo 추가 하기</p>
<p>Todo 삭제 하기</p>
<p>Todo 완료 상태 변경하기 (완료 ↔ 진행중)</p>
<br/>

## 📌Requirement : 과제에 요구되는 사항이에요.

<p>1. 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.</p>
<p>2. Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링 해주세요.</p>
<p>3. Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.</p>
<p>4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.</p>
<p>5. 컴포넌트 구조는 자유롭게 구현해보세요.</p>
<br/>

### 컴포넌트 구조

<div>▪️ App.js - 전체적으로 랜더링하는 페이지입니다.</div>
<div>▪ Nav.jsx - 프로그램 제목이 적혀 있는 navbar 컴포넌트입니다.</div>
<div>▪️ InputForm.jsx - 제목과 내용을 입력할 수 있는 iput form 컴포넌트입니다.</div>
<div>▪️ ToDoList.jsx - 입력한 리스트들을 보여주는 컴포넌트입니다. 이 컴포넌트가 반복하여 리스트들을 나열합니다.</div>
<div>▪️ Button.jsx - 취소와 완료를 할 수 있는 버튼 컴포넌트입니다. 똑같이 생겼지만 기능만 다른 버튼을 컴포넌트로 분리하였습니다.</div>
