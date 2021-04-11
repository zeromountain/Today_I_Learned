# Ajax
- *Asynchronous Javascript and XML*
- 자바스크립트를 사용하여 비동기 방식으로 통신하여 웹 페이지를 동적으로 갱신하는 프로그래밍 방식
- XMLHttpRequest 객체를 기반으로 동작 => HTTP 비동기 통신을 위한 메서드와 프로퍼티 제공

| Ajax 이전 | Ajax 이후 |
|---|:---:|
|웹페이지 전체를 리렌더링|필요한 부분만 렌더링|

# JSON 
- Javascript Object Notation
- HTTP 통신을 위한 텍스트 데이터 포맷

## JSON 표기 방식
- 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 텍스트

```JSON
{
  "name": "Sonny",
  "age": 31,
  "alive": true,
  "hobby": ["football", "weight trainning"]
}
```
## JSON.stringify
- 직렬화(serializing)
- 객체(배열 포함)를 JSON 형태의 문자열로 변환

```js
const obj = {
  name: 'zeromountain',
  age: 31,
  alive: true,
  hobby: ['neflix', 'programming']
};

// 직렬화
const json = JSON.stringify(obj);
console.log(typeof json, json);

// 응용
function filter(key, value) {
  return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, fliter, 2);
console.log(typeof strFilteredObject, strFilteredObject); 
```

## JSON.parse
- 역직렬화(deserializing)
- JSON 형태의 문자열을 객체로 변환

```js
const obj = {
  name: 'zeromountain',
  age: 31,
  alive: true,
  hobby: ['neflix', 'programming']
};

// 직렬화
const json = JSON.stringify(obj);

// 역직렬화
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
```
