# 클래스형 컴포넌트에서 메서드 다루기

> 1. 클래스는 객체를 찍어내는 역할을 한다.
> 2. 객체는 수행(동작) 능력을 가질 수 있기 때문에 클래스는 메서드를 생성하고 사용할 수 있다.

## 메서드 만들기

### 일반 함수형

```javascript

(...생략)

class Message exntends Component {
  state = {
    message:'' 
  }
  
  handleChange(e) {
    this.setState( {
      message: e.target.value
    } )
  }
  
  (...생략)
}
```

### 화살표 함수형

```js
(...생략)
class Message exntends Component {
  state = {
    message:'' 
  }
  
  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  
  (...생략)
}
```

## 메서드 사용하기
### 일반함수형
- 일반 함수형에서 메서드를 사용할 때, this 바인딩을 해주어야한다.
- this 바인딩을 하지 않으면 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊긴다.(undefined)
```javascript

(...생략)

class Message exntends Component {
  state = {
    message:'' 
  }
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState( {
      message: e.target.value
    } )
  }
  
  render() {
    return(
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="message" placeholder="입력한 문자가 저장됩니다." value={this.state.message} onChange={this.handleChange} />
      </div>
    )
  }
}
```

### 화살표함수형
- 바벨의 transform-class-properties 문법으로 this 바인딩 하지 않고 사용 가능


```js,react
(...생략)
class Message exntends Component {
  state = {
    message:'' 
  }
  
  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        <h1>이벤트 연습</h1>
        <input type="text" name="message" placeholder="입력한 문자가 저장됩니다." value={this.state.message} onChange={this.handleChange} />
      </div>
    )
  }
}
```
