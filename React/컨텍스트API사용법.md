# 리액트에서의 상태 관리
![general](https://media.vlpt.us/images/ppby/post/29a44e4d-861a-427a-9274-cd438743bd1c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-07-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.49.22.png)

- 리액트에서는 컴포넌트 간에 데이터를 부모 컴포넌트로부터 props로 전달
- 주로 최상위 컴포넌트인 App에서 state 관리
- 여러 번 거쳐서 전달하기 때문에 유지보수성이 떨어짐

# Context API에서의 상태 관리
![context](https://media.vlpt.us/images/ppby/post/d3c44041-9ff4-4a6a-b2b3-db44a496cb2d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-07-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.58.15.png)

- 중앙 스토어인 Context에서 원하는 값을 받아와 사용

## Context API 만들기
- createContext 함수 사용
```jsx
// player.js
import {createContext} from 'react';

const PlayerContext = createContext({ player: 'A' });

export default PlayerContext;
```

## Consumer 사용
- Context 안에 있는 데이터를 조회
- Reder Props(function as a child): 컴포넌트의 children이 있어야 할 자리에 함수를 전달하는 방법
```jsx
// PlayerList.js
import React from 'react';
import PlayerContext from './player';

const PlayerList = () => {
  return (
    <PlayerContext.Consumer>
      {value => (
        <div>{value.player}</div>
      )}
    </PlayerContext.Consumer> 
  );
};

export default PlayerList;
```

## Provider
- Context의 value를 변경
- value를 명시해주지 않으면 오류 발생

```jsx
// App.js
import React from 'react';
import PlayerList from './PlayerList';
import PlayerContext from './player';

const App = () => {
  return (
    <PlayerContext.Provider value={{ player: 'B' }}>
      <div>
        <PlayerList />
      </div>
    </PlayerContext.Provider>
  );
};

export default App;
```


