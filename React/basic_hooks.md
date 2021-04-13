# Why was hooks made?
- 클래스 컴포넌트에서 가능한 컴포넌트 상태 관리를 함수형 컴포넌트에서도 가능하도록 구현
- 함수형 컴포넌트에서 생명주기 기능읕 연동
***
## 📌  State Hook 


```react.js
import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}
```

- useState 함수를 사용하여 상태 관리를 할 대상을 초기화 => 일반적으로 일반 변수는 함수가 끝나면 사라지지만, state 변수는 React에 의해 사라지지 않음.
- event가 발생할 때(상태의 변화), useState 함수의 기능을 전달(?) 받은 setCount 함수를 실행
- 하나의 함수형 컴포넌트 안에서 여러 개의 state hook을 사용 가능
- useState 함수의 장점: this로 골머리를 앓을 필요가 없다.

## ⚡️ Effect Hook

```react.js
import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  
  // componentDidMount, componentDidUpdate와 유사
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다.
    document.title = `You clicked ${count} times.`;
  });
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}
```

- 리액트에게 컴포넌트가 렌덩링된 이후에 어떤 일을 수행해야하는지 방향성을 제시
- DOM 업데이트 -> effect 함수 실행

## Hook Rule
- 최상위에서만 Hook을 호출해야함 => 반복문, 조건문 혹은 중첩된 함수 내에서 Hook 호출 금지 => 반복문 조건문을 Hook 내에서 사용
- React 함수 내에서 Hook을 호출 => Hook을 일반 js 함수에서 호출하지 말아야
