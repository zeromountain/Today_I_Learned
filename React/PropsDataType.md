# 리액트에서 타입 설정
리액트에서 `props`에 타입을 지정할 수 있다.
부모 컴포넌트에서 자식 컴포넌트로 `props`를 내려주다 보면 해당 `props`의 타입이 명확하지가 않은데 다음과 같은 방법을 통해서 `props`의 타입을 지정해 줄 수 있다.

```jsx
// App.js
(...)
   <PropsDatatype
 	  String="react"
 	  Number={200}
      Boolean={1==1}
      Array={[0, 1, 8]}
      ObjectJson={{react:"리액트", twohundred:"200"}}
      Function={console.log("FucntionProps: function!")}
    />
(...)
```

```jsx
import React, {Component} from 'react';
import datatype from 'prop-types';

export default PropsDatatype extneds Component {
  render() {
  	let {
      String. Number, Boolean, Array, ObjectJson, Function
    } = this.porps
    
    return (
  	  <div>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <span>BooleanProps: {Boolean.toString()}</span>
        <p>ArrayProps: {Array.toString()}</p>
        <p>ObjectJsonProps: {Json.stringify(ObjectJson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    ); 
  }
}

PropsDatatype.propTypes = {
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Fucntion: datatype.func
}
```

- `props`로 받은 데이터의 자료형이 `propTypes`로 지정한 타입과 다를 경우 경고 메세지가 콘솔에 나타난다.
- 타입을 지정하기 위해서 리액트의 기본 내장 패키지인 `prop-types`를 임포트해서 사용해야함

[참고서적]: 초보자를 위한 리액트 200제
